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

    // --- STEMBOT AI PROXY (Secure Gemini Integration) ---
    if (path === '/api/tutor' && request.method === 'POST') {
      try {
        const body = await request.json();
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY}`;

        const geminiResponse = await fetch(geminiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        const data = await geminiResponse.json();
        return new Response(JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
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
