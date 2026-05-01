/**
 * Cloudflare Master Worker — yepzhi.com
 * Clean URLs (Extensionless) without redirect loops.
 */

const cleanUrlProjects = [
  'jsweb', 'jovenesstem', 'propass', 'entrytest', 'nearly', 
  'proassistant', 'visitors', 'sensorapp', 'lot', 'neosys'
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // --- STEMBOT AI TUTOR (Proxy to Gemini with Context Injection) ---
    if (path === '/api/tutor' && request.method === 'POST') {
      try {
        const body = await request.json();
        const userId = body.userId || 'anonymous';
        const userContext = body.userContext || {}; // { name, xp, completions: [] }

        // Inject dynamic personality (Lean version for token saving)
        const personalizedInstruction = `
          ${body.system_instruction?.parts[0]?.text || ''}
          
          CONTEXTO DEL ESTUDIANTE:
          - Nombre: ${userContext.name || 'Estudiante'}
          - Nivel (XP): ${userContext.xp || 0}
          
          REGLA SOCRÁTICA: 
          Sé breve. Guía a ${userContext.name || 'el estudiante'} usando el contenido del módulo actual. 
          No menciones temas de otros módulos a menos que el estudiante lo haga.
        `.trim();

        // Prepare payload for Gemini 2.0 Flash
        const geminiPayload = {
          contents: body.contents,
          system_instruction: { parts: [{ text: personalizedInstruction }] },
          generationConfig: body.generationConfig || { temperature: 0.7, maxOutputTokens: 500 }
        };

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiPayload)
        });

        const data = await geminiRes.json();
        
        // Optional: Here we could trigger an async fetch to save chat to Firestore
        // for long-term memory, but we'll start with session-based memory + context injection.

        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // --- FIREBASE CONFIG (Serves client config from Worker env vars — not in git) ---
    if (path === '/api/firebase-config') {
      const config = {
        apiKey:            env.FIREBASE_API_KEY,
        authDomain:        `${env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
        projectId:         env.FIREBASE_PROJECT_ID,
        storageBucket:     `${env.FIREBASE_PROJECT_ID}.firebasestorage.app`,
        messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
        appId:             env.FIREBASE_APP_ID,
        measurementId:     env.FIREBASE_MEASUREMENT_ID || '',
      };
      return new Response(JSON.stringify(config), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=3600', // Cache 1h — config rarely changes
        }
      });
    }

    // --- STRIPE CHECKOUT (Creates payment session for $19 MXN) ---
    if (path === '/api/stripe/checkout' && request.method === 'POST') {
      try {
        const formData = new URLSearchParams();
        formData.append('line_items[0][price_data][currency]', 'mxn');
        formData.append('line_items[0][price_data][product_data][name]', 'Certificación Oficial JóvenesSTEM');
        formData.append('line_items[0][price_data][product_data][description]', 'Validación de competencias STEM alineada a NGSS y RENAC.');
        formData.append('line_items[0][price_data][unit_amount]', '1900'); // $19.00 MXN
        formData.append('line_items[0][quantity]', '1');
        formData.append('mode', 'payment');
        formData.append('success_url', 'https://yepzhi.com/jsweb/dashboard?payment=success&session_id={CHECKOUT_SESSION_ID}');
        formData.append('cancel_url', 'https://yepzhi.com/jsweb/dashboard?payment=cancel');

        const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        });

        const session = await stripeRes.json();
        
        if (session.error) throw new Error(session.error.message);

        return new Response(JSON.stringify({ url: session.url }), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }
    }

    // Handle Pre-flight requests for CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }

    // 1. Force Clean URLs in the browser (if someone types .html)
    // We only redirect if it's the original request to avoid breaking our own internal fetches
    if (path.endsWith('.html') && request.headers.get('cf-worker') !== 'internal') {
      const cleanPath = path.replace(/\.html$/, '').replace(/\/index$/, '/');
      return Response.redirect(`${url.origin}${cleanPath}${url.search}`, 301);
    }

    // 2. Handle Directory Roots (Add trailing slash redirect)
    // E.g., /jsweb -> /jsweb/
    for (const p of cleanUrlProjects) {
      if (path === `/${p}`) {
        return Response.redirect(`${url.origin}/${p}/`, 301);
      }
    }

    // 3. Static Asset Pass-through
    // Don't modify paths that already look like files (except .html which we handle below)
    const lastSegment = path.split('/').pop() || '';
    if (lastSegment.includes('.') && !path.endsWith('.html')) {
      return fetch(request);
    }

    // 4. Default Pass-through (Try original path first)
    // If it's a directory like /jsweb/, Cloudflare+GitHub natively serves index.html
    const response = await fetch(request);

    // 5. Clean URL Logic (Internal Fallback)
    // If 404 and we haven't already added .html, try fetching with .html internally
    if (response.status === 404 && !path.endsWith('/') && !lastSegment.includes('.')) {
      const htmlUrl = new URL(path + '.html', url.origin);
      
      // We add a custom header so we don't accidentally trigger the .html redirect in Step 1
      const internalRequest = new Request(htmlUrl.toString(), request);
      internalRequest.headers.set('cf-worker', 'internal');

      const htmlResponse = await fetch(internalRequest);
      
      // If we find the HTML file, return it but keep the clean URL visible
      if (htmlResponse.ok) {
        return new Response(htmlResponse.body, htmlResponse);
      }
    }

    return response;
  },
};
