/**
 * Cloudflare Master Worker — yepzhi.com
 * Manejo de URLs limpias + API Endpoints + Seguridad CSP + STEMBOT
 */

const cleanUrlProjects = [
  'jsweb', 'jovenesstem', 'propass', 'entrytest', 'nearly', 
  'proassistant', 'visitors', 'sensorapp', 'lot', 'neosys', 'ldgen2', 'ldgen', 'citas', 'power'
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 0. SECURITY: Block access to source code and dev folders
    if (path.startsWith('/_src/') || path.startsWith('/_dev/') || path === '/obfuscate.js' || path === '/package.json') {
      return new Response("Forbidden", { status: 403 });
    }

    // 1. API CLERK (Configuración dinámica)
    if (url.href.includes("clerk")) {
      return new Response(JSON.stringify({ 
        publishableKey: env.CLERK_PUBLISHABLE_KEY 
      }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store"
        }
      });
    }

    // 2. API FIREBASE (Configuración dinámica)
    // Only intercept pure API calls — NOT static .js files like /citas/firebase-config.js
    if (path.includes("firebase-config") && !path.endsWith('.js')) {
      const config = {
        apiKey: env.FIREBASE_API_KEY,
        authDomain: `${env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
        projectId: env.FIREBASE_PROJECT_ID,
        storageBucket: `${env.FIREBASE_PROJECT_ID}.firebasestorage.app`,
        messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
        appId: env.FIREBASE_APP_ID,
      };
      return new Response(JSON.stringify(config), {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    // 3. API TUTOR AI (STEMBOT - Versión Limpia para Gemini)
    if (path.includes("/api/tutor") && request.method === 'POST') {
      try {
        const body = await request.json();
        
        // Limpiamos el payload para que Google no rechace campos desconocidos
        const geminiPayload = {
          contents: body.contents,
          systemInstruction: body.systemInstruction || body.system_instruction || { parts: [{ text: "Eres StemBot, un evaluador STEM ultra-directo. REGLAS: 1) Socrático y BREVE: haz una sola pregunta a la vez. 2) DECISIVO: En cuanto el alumno demuestre dominio (aunque sea simple), di '¡Excelente! Has dominado el tema.' e incluye [APTO_PARA_AVANZAR]. 3) IMPORTANTE: Si incluyes [APTO_PARA_AVANZAR], NO hagas ninguna pregunta más. Solo felicita y cierra. 4) Máximo 2 oraciones. No seas repetitivo." }] },
          generationConfig: body.generationConfig || { temperature: 0.7, maxOutputTokens: 800 }
        };

        if (body.cachedContent) {
          geminiPayload.cachedContent = body.cachedContent;
        }

        let geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiPayload)
        });

        // Fallback: If cached content fails (e.g., expired or invalid), retry without it
        if (!geminiRes.ok && body.cachedContent) {
          console.warn("[Worker] Context caching failed. Retrying without cache.");
          delete geminiPayload.cachedContent;
          geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(geminiPayload)
          });
        }

        const data = await geminiRes.json();
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
      }
    }

    // 3.5. API CONFIG (Para Rate Limits y Precios Dinámicos)
    if (path.includes("/api/config") && request.method === 'GET') {
      return new Response(JSON.stringify({
        STEMBOT_MAX_MSGS_PER_MODULE: env.STEMBOT_MAX_MSGS_PER_MODULE || "15",
        STEMBOT_MAX_MSGS_PER_DAY: env.STEMBOT_MAX_MSGS_PER_DAY || "80",
        CERT_UNLOCK_THRESHOLD: env.CERT_UNLOCK_THRESHOLD || "0.80",
        CERT_PRICE_MXN: env.CERT_PRICE_MXN || "49"
      }), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    // 4. LÓGICA DE RUTAS LIMPIAS (Redirección .html forzada)
    if (path.endsWith('.html') && request.headers.get('cf-worker') !== 'internal') {
      const cleanPath = path.replace(/\.html$/, '').replace(/\/index$/, '/');
      return Response.redirect(`${url.origin}${cleanPath}${url.search}`, 301);
    }

    // 5. CARGA DE CONTENIDO Y CABECERAS DE SEGURIDAD
    let response = await fetch(request);

    // Fallback para archivos .html ocultos (URLs limpias)
    if (response.status === 404 && !path.includes('.')) {
      const htmlUrl = new URL(path + '.html', url.origin);
      const internalRequest = new Request(htmlUrl.toString(), request);
      internalRequest.headers.set('cf-worker', 'internal');

      const htmlResponse = await fetch(internalRequest);
      if (htmlResponse.ok) {
        response = htmlResponse;
      }
    }

    // --- SEGURIDAD FINAL (CSP) ---
    // Clonamos la respuesta para inyectar cabeceras que permitan a Clerk funcionar
    let newResponse = new Response(response.body, response);
    
    // Eliminamos CSP previos si existen
    newResponse.headers.delete("Content-Security-Policy");
    newResponse.headers.delete("X-Content-Security-Policy");

    // Definimos nuestra regla (Permite Power BI y Microsoft)
    const csp = [
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:;",
      "worker-src 'self' blob:;",
      "style-src 'self' 'unsafe-inline' https:;",
      "img-src 'self' data: https: blob:;",
      "connect-src 'self' https: *.powerbi.com *.microsoft.com *.clerk.accounts.dev;",
      "frame-src 'self' https://app.powerbi.com https://*.powerbi.com https://*.microsoft.com https://*.clerk.accounts.dev;"
    ].join(" ");

    newResponse.headers.set("Content-Security-Policy", csp);
    // Remove X-Frame-Options to allow the page itself to be framed if needed, 
    // and to avoid conflicts with embedded content.
    newResponse.headers.delete("X-Frame-Options");
    
    return newResponse;
  }
};
