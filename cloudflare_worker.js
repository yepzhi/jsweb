/**
 * Cloudflare Master Worker — yepzhi.com
 * Routes:
 *   /jsweb*          → Reverse proxy to Vercel (Next.js dashboard)
 *   /jovenesstem*    → GitHub Pages (static HTML marketing layer)
 *   /*               → Pass-through to GitHub Pages with clean URL support
 *
 * Architecture (2026-04-17):
 *   - Marketing pages (homepage, login, register) → static HTML on GitHub Pages
 *   - Student dashboard (/jsweb) → Next.js on Vercel
 *   - Cloudflare Worker handles routing, clean URLs, and caching at the edge
 *
 * FIX (2026-04-13): Corrected Host header in proxy to avoid Vercel 404s.
 */

const CONFIG = {
  // Projects that support clean URL (extensionless .html)
  cleanUrlProjects: [
    'jovenesstem', // ← NEW: static HTML marketing layer (login, register, etc.)
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
  // Vercel Proxy — Next.js dashboard app
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

      // ── 0a. Static HTML pages (served from GitHub Pages) ──────────────
      const staticMap = {
        '/jsweb':          '/jsweb/index.html',
        '/jsweb/':         '/jsweb/index.html',
        '/jsweb/home':     '/jsweb/index.html',
        '/jsweb/login':    '/jsweb/login.html',
        '/jsweb/register': '/jsweb/register.html',
      };

      const staticPath = staticMap[pathLower];
      const targetPath = staticPath || pathLower;
      
      const targetUrl = new URL(targetPath + url.search, CONFIG.origin);

      return fetch(new Request(targetUrl.toString(), {
        method: request.method,
        headers: request.headers,
        redirect: 'follow',
      }));
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
