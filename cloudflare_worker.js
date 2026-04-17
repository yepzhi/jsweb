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
