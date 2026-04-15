/**
 * Cloudflare Master Worker — yepzhi.com
 * Routes:
 *   /jsweb*  → Reverse proxy to Vercel (Next.js)
 *   /*       → Pass-through to GitHub Pages with clean URL support
 *
 * FIX (2026-04-13): Corrected Host header in proxy to avoid Vercel 404s.
 */

const CONFIG = {
  // Projects that support clean URL (extensionless .html)
  cleanUrlProjects: [
    'propass',
    'entrytest',
    'nearly',
    'proassistant',
    'visitors',
    'sensorapp',
    'lot',
    'neosys',
  ],
  // Base origin (GitHub Pages)
  origin: 'https://yepzhi.github.io',
  // Vercel Proxy — Next.js app
  vercelBase: 'https://jovenesstem-web.vercel.app',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // ── 0. Reverse Proxy for Next.js App (/jsweb) ──────────────────────────
    // Critical fix: rewrite Host header so Vercel can identify the deployment.
    // Made case-insensitive to support /JSWeb or /jsweb alike
    const pathLower = path.toLowerCase();
    
    if (pathLower === '/jsweb' || pathLower.startsWith('/jsweb/')) {
      const targetUrl = new URL(pathLower + url.search, CONFIG.vercelBase);

      // Build new headers — keep originals but correct the Host
      const newHeaders = new Headers(request.headers);
      newHeaders.set('host', new URL(CONFIG.vercelBase).hostname);
      // Forward original IP for logging / rate limiting
      newHeaders.set('x-forwarded-host', url.hostname);

      const newRequest = new Request(targetUrl.toString(), {
        method: request.method,
        headers: newHeaders,
        body: ['GET', 'HEAD'].includes(request.method) ? null : request.body,
        redirect: 'follow',
      });

      return fetch(newRequest);
    }

    // ── 1. Pass static assets through immediately (.js, .css, .png, etc.) ──
    const lastSegment = path.split('/').pop() || '';
    if (lastSegment.includes('.')) {
      return fetch(request);
    }

    // ── 2. Handle project root — add trailing slash for SEO ────────────────
    for (const project of CONFIG.cleanUrlProjects) {
      if (path === `/${project}`) {
        return Response.redirect(`${url.origin}/${project}/`, 301);
      }
    }

    // ── 3. Clean URL Logic (extensionless .html) ────────────────────────────
    if (path !== '/' && !path.endsWith('/')) {
      const newUrl = new URL(request.url);
      newUrl.pathname = path + '.html';

      const response = await fetch(newUrl.toString(), {
        method: request.method,
        headers: request.headers,
        redirect: 'manual',
      });

      // If .html exists, serve content but keep clean URL in address bar
      if (response.status === 200) {
        return new Response(response.body, response);
      }
    }

    // ── 4. Default pass-through ────────────────────────────────────────────
    return fetch(request);
  },
};
