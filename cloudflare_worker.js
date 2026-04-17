/**
 * Cloudflare Master Worker — yepzhi.com
 * Routes everything to GitHub Pages with FORCED Clean URL support.
 */

const CONFIG = {
  cleanUrlProjects: [
    'jsweb',
    'jovenesstem',
    'propass',
    'entrytest',
    'nearly',
    'proassistant',
    'visitors',
    'sensorapp',
    'lot',
    'neosys',
  ],
  origin: 'https://yepzhi.github.io',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // ── 1. Force Clean URL Redirect ──────────────────────────────────────────
    if (path.endsWith('.html')) {
      let cleanPath = path.replace(/\.html$/, '');
      
      // Special case: /jsweb/index.html -> /jsweb/
      if (cleanPath.endsWith('/index')) {
        cleanPath = cleanPath.replace(/\/index$/, '/');
      }
      
      return Response.redirect(`${url.origin}${cleanPath}${url.search}`, 301);
    }

    // ── 2. Strip /index from any accidental direct linking ──────────────────
    if (path.endsWith('/index')) {
      return Response.redirect(`${url.origin}${path.replace(/\/index$/, '/')}${url.search}`, 301);
    }

    // ── 3. Pass static assets through immediately (.js, .css, .json, .png, etc.)
    const lastSegment = path.split('/').pop() || '';
    if (lastSegment.includes('.')) {
      return fetch(request);
    }

    // ── 4. Map /jsweb/ to /jsweb/index.html internally
    if (path === '/jsweb' || path === '/jsweb/') {
      const targetUrl = new URL('/jsweb/index.html', CONFIG.origin);
      return fetch(new Request(targetUrl.toString(), request));
    }

    // ── 5. Handle project roots — add trailing slash for consistency
    for (const project of CONFIG.cleanUrlProjects) {
      if (path === `/${project}`) {
        return Response.redirect(`${url.origin}/${project}/`, 301);
      }
    }

    // ── 6. Clean URL Logic (Internal Mapping) ───────────────────────────────
    if (path !== '/' && !path.endsWith('/')) {
      const gitHubUrl = new URL(path + '.html', CONFIG.origin);
      const response = await fetch(gitHubUrl.toString(), {
        method: request.method,
        headers: request.headers,
        redirect: 'manual',
      });

      if (response.status === 200) {
        return new Response(response.body, response);
      }
    }

    // ── 7. Default pass-through to GitHub Pages
    const finalUrl = new URL(path, CONFIG.origin);
    return fetch(new Request(finalUrl.toString(), request));
  },
};
