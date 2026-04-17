/**
 * Cloudflare Master Worker — yepzhi.com
 * Routes everything to GitHub Pages with Clean URL support.
 */

const CONFIG = {
  // Projects that support clean URL (extensionless .html)
  cleanUrlProjects: [
    'jsweb',        // ← ADDED: The new static platform
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
    const path = url.pathname;

    // 1. Pass static assets through immediately (.js, .css, .json, .png, etc.)
    const lastSegment = path.split('/').pop() || '';
    if (lastSegment.includes('.')) {
      return fetch(request);
    }

    // 2. Map /jsweb/ to /jsweb/index.html internally
    if (path === '/jsweb' || path === '/jsweb/') {
      const targetUrl = new URL('/jsweb/index.html', CONFIG.origin);
      return fetch(new Request(targetUrl.toString(), request));
    }

    // 3. Handle project roots — add trailing slash for consistency
    for (const project of CONFIG.cleanUrlProjects) {
      if (path === `/${project}`) {
        return Response.redirect(`${url.origin}/${project}/`, 301);
      }
    }

    // 4. Clean URL Logic (extensionless .html)
    // If path is /jsweb/dashboard, it tries /jsweb/dashboard.html
    if (path !== '/' && !path.endsWith('/')) {
      const gitHubUrl = new URL(path + '.html', CONFIG.origin);

      const response = await fetch(gitHubUrl.toString(), {
        method: request.method,
        headers: request.headers,
        redirect: 'manual',
      });

      // If .html exists on GitHub, serve its content
      if (response.status === 200) {
        return new Response(response.body, response);
      }
    }

    // 5. Default pass-through to GitHub Pages
    const finalUrl = new URL(path, CONFIG.origin);
    return fetch(new Request(finalUrl.toString(), request));
  },
};
