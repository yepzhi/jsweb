/**
 * Cloudflare Master Worker — yepzhi.com
 * Manejo de URLs limpias + API Endpoints + Seguridad CSP + STEMBOT
 */

const cleanUrlProjects = [
  'jsweb', 'jovenesstem', 'propass', 'entrytest', 'nearly', 
  'proassistant', 'visitors', 'sensorapp', 'lot', 'neosys'
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

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
    if (path.includes("firebase-config")) {
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
          systemInstruction: body.systemInstruction || body.system_instruction || { parts: [{ text: "Eres StemBot, un evaluador STEM riguroso. Tu objetivo es asegurar que el estudiante domine el 80% del contenido de la lectura actual antes de pasar. 1) Sé socrático: nunca des la respuesta, haz preguntas que guíen al alumno. 2) Mantente estrictamente dentro del contexto de la lectura proporcionada. 3) Solo cuando estés 80% seguro de su dominio, incluye la etiqueta [MODULE_COMPLETED] al final de tu mensaje para autorizar su progreso. Sé breve y profesional." }] },
          generationConfig: body.generationConfig || { temperature: 0.7, maxOutputTokens: 800 }
        };

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geminiPayload)
        });

        const data = await geminiRes.json();
        return new Response(JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
      }
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

    // Definimos nuestra regla (Permite blob: para Workers de Clerk y UI de CDN)
    const csp = [
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:;",
      "worker-src 'self' blob:;",
      "style-src 'self' 'unsafe-inline' https:;",
      "img-src 'self' data: https: blob:;",
      "connect-src 'self' https:;"
    ].join(" ");

    newResponse.headers.set("Content-Security-Policy", csp);
    newResponse.headers.set("X-Frame-Options", "SAMEORIGIN");
    
    return newResponse;
  }
};
