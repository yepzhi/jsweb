/**
 * Cloudflare Master Worker — yepzhi.com
 * Simplified Routing for GitHub Pages (No-Loop Extensionless)
 */

const CONFIG = {
  origin: 'https://yepzhi.github.io',
  projects: ['jsweb', 'jovenesstem', 'propass', 'entrytest', 'nearly', 'proassistant', 'visitors', 'sensorapp', 'lot', 'neosys'],
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1. Static Asset Pass-through (extension detection)
    const lastSegment = path.split('/').pop() || '';
    if (lastSegment.includes('.') && !path.endsWith('.html')) {
      return fetch(new Request(new URL(path, CONFIG.origin).toString(), request));
    }

    // 2. Handle Directory Roots (Add trailing slash redirect)
    for (const p of CONFIG.projects) {
      if (path === `/${p}`) {
        return Response.redirect(`${url.origin}/${p}/`, 301);
      }
    }

    // 3. Main Routing Logic
    // Try fetching the path as-is, then try .html if needed.
    let targetPath = path;
    
    // index.html mapping
    if (path.endsWith('/')) {
      targetPath += 'index.html';
    }

    let response = await fetch(new Request(new URL(targetPath, CONFIG.origin).toString(), request));

    // 4. Extensionless fallback
    // If we get a 404 and there's no extension, try suffixing .html
    if (response.status === 404 && !targetPath.includes('.')) {
      const htmlUrl = new URL(targetPath + '.html', CONFIG.origin);
      const htmlResponse = await fetch(new Request(htmlUrl.toString(), request));
      if (htmlResponse.ok) {
        return htmlResponse;
      }
    }

    // 5. Force Clean URL Redirect (Optional but recommended)
    // If the user manually types .html, redirect to clean URL to hide it.
    if (path.endsWith('.html')) {
      const cleanPath = path.replace(/\.html$/, '').replace(/\/index$/, '/');
      return Response.redirect(`${url.origin}${cleanPath}${url.search}`, 301);
    }

    return response;
  },
};
