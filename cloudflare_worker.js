/**
 * Cloudflare Master Worker - yepzhi.com
 * Logic: Handles Clean URLs (extensionless) and proxying for sub-projects.
 */

const CONFIG = {
  // List of projects that should support Clean URLs
  cleanUrlProjects: [
    'jsweb', 
    'propass', 
    'entrytest', 
    'nearly', 
    'proassistant', 
    'visitors', 
    'sensorapp',
    'lot'
  ],
  // Base origin (GitHub Pages)
  origin: 'https://yepzhi.github.io',
  // Vercel Proxy Destination (Next.js Application)
  proxy: {
    '/jsweb': 'https://jovenesstem-b86rmsj5g-yepzhi-3874s-projects.vercel.app'
  }
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 0. Reverse Proxy for Next.js App (/jsweb)
    if (path.startsWith('/jsweb')) {
      const target = CONFIG.proxy['/jsweb'] + path;
      const newRequest = new Request(target, request);
      return fetch(newRequest);
    }

    // 1. Pass through static assets immediately (.js, .css, .png, etc.)
    const hasExtension = path.split('/').pop().includes('.');
    if (hasExtension) {
      return fetch(request);
    }

    // 2. Handle Root and Project Homes
    // If it's a project home without trailing slash, add it (SEO best practice)
    for (const project of CONFIG.cleanUrlProjects) {
      if (path === `/${project}`) {
        return Response.redirect(`${url.origin}/${project}/`, 301);
      }
    }

    // 3. Clean URL Logic (Extensionless .html)
    // If the path doesn't end in .html and isn't a root, try fetching with .html
    if (path !== '/' && !path.endsWith('/')) {
      const newUrl = new URL(request.url);
      newUrl.pathname = path + '.html';
      
      const response = await fetch(newUrl.toString(), {
        method: request.method,
        headers: request.headers,
        redirect: 'manual'
      });

      // If .html exists, serve it but keep the clean URL in address bar
      if (response.status === 200) {
        // Return the .html content but keep the response "clean"
        return new Response(response.body, response);
      }
    }

    // 4. Default Pass-through
    return fetch(request);
  }
};
