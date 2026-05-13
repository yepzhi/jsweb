/**
 * Cloudflare Worker — JóvenesSTEM / yepzhi.com
 * Clean URLs, API endpoints, security headers, StemBot proxy and Stripe checkout.
 */

const cleanUrlProjects = [
  'jsweb', 'jovenesstem', 'propass', 'entrytest', 'nearly',
  'proassistant', 'visitors', 'sensorapp', 'lot', 'neosys', 'ldgen2', 'ldgen', 'citas', 'power'
];

const STEMBOT_SYSTEM_PROMPT = `
Eres StemBot, el tutor personal de JóvenesSTEM, creado por Alberto Yépiz.

MISIÓN:
Guiar a estudiantes mexicanos de 6-18 años a través del conocimiento STEM del BlueBook v1 usando el método socrático.
Tu objetivo no es dar respuestas directas, sino hacer que el alumno las descubra.

PERSONALIDAD:
- Entusiasta, claro y paciente.
- Usas español mexicano natural.
- Reconoces el esfuerzo sin regalar respuestas.

MÉTODO SOCRÁTICO:
1. Reconoce brevemente lo que dijo el alumno.
2. Haz UNA sola pregunta para profundizar o guiar.
3. Responde en máximo 2-3 oraciones.
4. Nunca des una solución completa si puedes guiar con una pregunta.

EVALUACIÓN:
1. Nunca apruebes en las primeras 2 respuestas del alumno.
2. Antes de aprobar, el alumno debe demostrar comprensión de al menos el 80% de los conceptos clave del módulo.
3. Si apruebas, la respuesta debe cerrar sin preguntas y terminar con [APTO_PARA_AVANZAR].
4. Si el alumno sigue perdido después de 3+ intentos, termina con [REPASAR_LECTURA].
`.trim();

const tutorBuckets = new Map();
const processedStripeEvents = new Map();

function pruneMap(map, now = Date.now()) {
  for (const [key, value] of map.entries()) {
    if (value.expiresAt && value.expiresAt < now) map.delete(key);
  }
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...extraHeaders
    }
  });
}

function getClientKey(request, bodyUserId = 'anonymous') {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown-ip';
  const userId = String(bodyUserId || 'anonymous').slice(0, 80);
  return `${ip}:${userId}`;
}

function checkRateLimit(key, limit, windowMs) {
  const now = Date.now();
  pruneMap(tutorBuckets, now);

  const bucket = tutorBuckets.get(key) || { count: 0, expiresAt: now + windowMs };
  if (bucket.expiresAt < now) {
    bucket.count = 0;
    bucket.expiresAt = now + windowMs;
  }

  bucket.count += 1;
  tutorBuckets.set(key, bucket);

  return {
    allowed: bucket.count <= limit,
    remaining: Math.max(0, limit - bucket.count),
    resetSeconds: Math.ceil((bucket.expiresAt - now) / 1000)
  };
}

function sanitizeGeminiHistory(contents) {
  if (!Array.isArray(contents)) return [];

  return contents.slice(-12).map((item) => {
    const role = item?.role === 'model' ? 'model' : 'user';
    const text = String(item?.parts?.[0]?.text || '').slice(0, 1800);
    return { role, parts: [{ text }] };
  }).filter((item) => item.parts[0].text.trim().length > 0);
}

function safeGenerationConfig(input) {
  const maxOutputTokens = Math.min(Math.max(Number(input?.maxOutputTokens) || 500, 80), 700);
  const temperature = Math.min(Math.max(Number(input?.temperature) || 0.7, 0.1), 0.9);
  return { temperature, maxOutputTokens };
}

function cleanString(value, maxLength = 200) {
  return String(value || '').replace(/[\r\n]/g, ' ').trim().slice(0, maxLength);
}

async function handleClerkConfig(env) {
  return json({ publishableKey: env.CLERK_PUBLISHABLE_KEY || null });
}

async function handleFirebaseConfig(env) {
  return json({
    apiKey: env.FIREBASE_API_KEY,
    authDomain: `${env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: env.FIREBASE_PROJECT_ID,
    storageBucket: `${env.FIREBASE_PROJECT_ID}.firebasestorage.app`,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.FIREBASE_APP_ID,
    measurementId: env.FIREBASE_MEASUREMENT_ID,
  });
}

async function handlePublicConfig(env) {
  return json({
    STEMBOT_MAX_MSGS_PER_MODULE: env.STEMBOT_MAX_MSGS_PER_MODULE || '15',
    STEMBOT_MAX_MSGS_PER_DAY: env.STEMBOT_MAX_MSGS_PER_DAY || '80',
    CERT_UNLOCK_THRESHOLD: env.CERT_UNLOCK_THRESHOLD || '0.80',
    CERT_PRICE_MXN: env.CERT_PRICE_MXN || '49'
  });
}

async function handleTutor(request, env) {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  if (!env.GEMINI_API_KEY) return json({ error: 'Gemini API key not configured' }, 503);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON payload' }, 400);
  }

  const key = getClientKey(request, body.userId);
  const maxPerHour = Math.max(Number(env.STEMBOT_MAX_MSGS_PER_HOUR) || 80, 1);
  const rate = checkRateLimit(key, maxPerHour, 60 * 60 * 1000);
  if (!rate.allowed) {
    return json(
      { error: 'Rate limit exceeded', retryAfter: rate.resetSeconds },
      429,
      { 'Retry-After': String(rate.resetSeconds) }
    );
  }

  const contents = sanitizeGeminiHistory(body.contents);
  if (!contents.length) return json({ error: 'Missing conversation contents' }, 400);

  const totalChars = contents.reduce((sum, item) => sum + item.parts[0].text.length, 0);
  if (totalChars > 12000) return json({ error: 'Conversation payload too large' }, 413);

  const moduleContext = cleanString(body.moduleContext, 1200);
  const userContext = body.userContext || {};
  const contextInstruction = [
    STEMBOT_SYSTEM_PROMPT,
    moduleContext ? `\nCONTEXTO DEL MÓDULO:\n${moduleContext}` : '',
    `\nCONTEXTO DEL USUARIO:\nNombre: ${cleanString(userContext.name || 'Estudiante', 80)}. XP: ${Number(userContext.xp) || 0}.`
  ].join('\n');

  const geminiPayload = {
    contents,
    systemInstruction: { parts: [{ text: contextInstruction }] },
    generationConfig: safeGenerationConfig(body.generationConfig)
  };

  const geminiRes = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiPayload)
    }
  );

  const data = await geminiRes.json();
  return json(data, geminiRes.ok ? 200 : geminiRes.status);
}

async function handleStripeCheckout(request, env, url) {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  if (!env.STRIPE_SECRET_KEY) return json({ error: 'Stripe secret key not configured' }, 503);

  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const certPriceMxn = Math.max(Number(env.CERT_PRICE_MXN) || 49, 1);
  const amountCentavos = Math.round(certPriceMxn * 100);
  const userId = cleanString(body.userId || 'anonymous', 120);
  const email = cleanString(body.email || '', 180);
  const successPath = '/jsweb/dashboard?payment=success&session_id={CHECKOUT_SESSION_ID}';
  const cancelPath = '/jsweb/dashboard?payment=cancel';

  const params = new URLSearchParams();
  params.set('mode', 'payment');
  params.set('success_url', `${url.origin}${successPath}`);
  params.set('cancel_url', `${url.origin}${cancelPath}`);
  params.set('client_reference_id', userId);
  params.set('metadata[userId]', userId);
  params.set('metadata[source]', 'jovenesstem-cert');
  params.set('payment_intent_data[metadata][userId]', userId);
  params.set('payment_intent_data[metadata][source]', 'jovenesstem-cert');
  params.set('line_items[0][quantity]', '1');

  if (email) params.set('customer_email', email);

  if (env.STRIPE_CERT_PRICE_ID) {
    params.set('line_items[0][price]', env.STRIPE_CERT_PRICE_ID);
  } else {
    params.set('line_items[0][price_data][currency]', 'mxn');
    params.set('line_items[0][price_data][unit_amount]', String(amountCentavos));
    params.set('line_items[0][price_data][product_data][name]', 'Certificado JóvenesSTEM');
    params.set('line_items[0][price_data][product_data][description]', 'Certificación digital oficial al completar la ruta JóvenesSTEM.');
  }

  const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  });

  const data = await stripeRes.json();
  if (!stripeRes.ok) {
    return json({ error: data.error?.message || 'Stripe checkout failed' }, stripeRes.status);
  }

  return json({ url: data.url, id: data.id });
}

async function handleStripeSession(request, env, url) {
  if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
  if (!env.STRIPE_SECRET_KEY) return json({ error: 'Stripe secret key not configured' }, 503);

  const sessionId = url.searchParams.get('session_id');
  if (!sessionId || !/^cs_(test|live)_/.test(sessionId)) {
    return json({ error: 'Invalid session_id' }, 400);
  }

  const stripeRes = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
    headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}` }
  });

  const session = await stripeRes.json();
  if (!stripeRes.ok) {
    return json({ error: session.error?.message || 'Unable to verify Stripe session' }, stripeRes.status);
  }

  return json({
    id: session.id,
    paid: session.payment_status === 'paid',
    status: session.status,
    paymentStatus: session.payment_status,
    amountTotal: session.amount_total,
    currency: session.currency,
    userId: session.client_reference_id || session.metadata?.userId || null
  });
}

function parseStripeSignature(header) {
  const parts = String(header || '').split(',');
  const parsed = { signatures: [] };
  for (const part of parts) {
    const [key, value] = part.split('=');
    if (key === 't') parsed.timestamp = value;
    if (key === 'v1') parsed.signatures.push(value);
  }
  return parsed;
}

function timingSafeEqualHex(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function hmacSha256Hex(secret, message) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return [...new Uint8Array(signature)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function verifyStripeWebhook(payload, signatureHeader, secret) {
  const { timestamp, signatures } = parseStripeSignature(signatureHeader);
  if (!timestamp || !signatures.length) return false;

  const ageSeconds = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(ageSeconds) || ageSeconds > 300) return false;

  const expected = await hmacSha256Hex(secret, `${timestamp}.${payload}`);
  return signatures.some((signature) => timingSafeEqualHex(expected, signature));
}

async function handleStripeWebhook(request, env) {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  if (!env.STRIPE_WEBHOOK_SECRET) return json({ error: 'Stripe webhook secret not configured' }, 503);

  const payload = await request.text();
  const signature = request.headers.get('Stripe-Signature');
  const isValid = await verifyStripeWebhook(payload, signature, env.STRIPE_WEBHOOK_SECRET);
  if (!isValid) return json({ error: 'Invalid Stripe signature' }, 400);

  let event;
  try {
    event = JSON.parse(payload);
  } catch {
    return json({ error: 'Invalid Stripe webhook JSON' }, 400);
  }

  pruneMap(processedStripeEvents);
  if (processedStripeEvents.has(event.id)) {
    return json({ received: true, duplicate: true });
  }
  processedStripeEvents.set(event.id, { expiresAt: Date.now() + 24 * 60 * 60 * 1000 });

  if (event.type === 'checkout.session.completed') {
    const session = event.data?.object || {};
    const userId = session.client_reference_id || session.metadata?.userId || null;
    if (session.payment_status === 'paid' && userId) {
      // Server-authoritative persistence needs a service-account or backend DB binding.
      // This webhook verifies the payment and provides a safe extension point.
      console.log('[Stripe] Certificate paid', { sessionId: session.id, userId });
    }
  }

  return json({ received: true });
}

function withSecurityHeaders(response) {
  const newResponse = new Response(response.body, response);

  newResponse.headers.delete('Content-Security-Policy');
  newResponse.headers.delete('X-Content-Security-Policy');

  const csp = [
    "default-src 'self';",
    "script-src 'self' 'unsafe-inline' https://clerk.yepzhi.com https://*.clerk.accounts.dev https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://www.gstatic.com;",
    "worker-src 'self' blob:;",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
    "font-src 'self' https://fonts.gstatic.com;",
    "img-src 'self' data: https: blob:;",
    "media-src 'self' https://assets.mixkit.co;",
    "connect-src 'self' https://generativelanguage.googleapis.com https://*.googleapis.com https://api.stripe.com https://api.clerk.com https://*.clerk.com https://*.clerk.accounts.dev https://clerk.yepzhi.com https://www.gstatic.com;",
    "frame-src 'self' https://checkout.stripe.com https://app.powerbi.com https://*.powerbi.com https://*.microsoft.com https://*.clerk.accounts.dev;",
    "base-uri 'self';",
    "form-action 'self' https://checkout.stripe.com;",
    "object-src 'none';"
  ].join(' ');

  newResponse.headers.set('Content-Security-Policy', csp);
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.delete('X-Frame-Options');

  return newResponse;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (request.method === 'OPTIONS' && path.startsWith('/api/')) {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type,Authorization,Stripe-Signature',
          'Access-Control-Max-Age': '86400'
        }
      });
    }

    if (
      path.includes('/_src/') ||
      path.includes('/_dev/') ||
      path.endsWith('/obfuscate.js') ||
      path.endsWith('/package.json') ||
      path.endsWith('/wrangler.toml')
    ) {
      return new Response('Forbidden', { status: 403 });
    }

    if (path === '/api/clerk-config') return handleClerkConfig(env);
    if (path === '/api/firebase-config') return handleFirebaseConfig(env);
    if (path === '/api/config') return handlePublicConfig(env);
    if (path === '/api/tutor') return handleTutor(request, env);
    if (path === '/api/stripe/checkout') return handleStripeCheckout(request, env, url);
    if (path === '/api/stripe/session') return handleStripeSession(request, env, url);
    if (path === '/api/stripe/webhook') return handleStripeWebhook(request, env);

    if (path.endsWith('.html') && request.headers.get('cf-worker') !== 'internal') {
      const cleanPath = path.replace(/\.html$/, '').replace(/\/index$/, '/');
      return Response.redirect(`${url.origin}${cleanPath}${url.search}`, 301);
    }

    let response = await fetch(request);

    if (response.status === 404 && !path.includes('.')) {
      const htmlUrl = new URL(path + '.html', url.origin);
      const internalRequest = new Request(htmlUrl.toString(), request);
      internalRequest.headers.set('cf-worker', 'internal');

      const htmlResponse = await fetch(internalRequest);
      if (htmlResponse.ok) response = htmlResponse;
    }

    return withSecurityHeaders(response);
  }
};
