/**
 * app.js - JóvenesSTEM Platform Core
 * Handles unified navigation and dynamic module rendering.
 */

async function fetchModules() {
  try {
    const res = await fetch('./data/modules.json');
    if (!res.ok) throw new Error('Data no encontrada');
    return await res.json();
  } catch (err) {
    console.error('Error cargando módulos:', err);
    return { chapters: [] };
  }
}

/**
 * GLOBAL NAVIGATION INJECTION
 * Ensures every page has the same polished header.
 */
function injectGlobalNav() {
  const header = document.getElementById('global-nav');
  if (!header) return;

  const path = window.location.pathname;
  const isAppPage = path.includes('modules') || path.includes('tutor') || path.includes('dashboard') || path.includes('profile');
  
  const savedProfile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  const userName = savedProfile.name || 'Estudiante';
  const firstLetter = userName.charAt(0).toUpperCase();

  header.innerHTML = `
    <nav class="global-header">
      <div class="nav-container">
        <a href="/jsweb/" class="nav-logo">
          <span class="logo-text">JóvenesSTEM<em>®</em></span>
        </a>
        
        <div class="nav-links">
          ${isAppPage ? `
            <a href="modules" class="nav-link">Explorar</a>
            <a href="dashboard" class="nav-link">Dashboard</a>
            <div class="nav-user-orb" onclick="window.location.href='profile'">
              <span>${firstLetter}</span>
            </div>
          ` : `
            <a href="/jsweb/#proceso" class="nav-link hide-mobile">Metodología</a>
            <a href="/jsweb/#pricing" class="nav-link hide-mobile">Precios</a>
            <a href="login" class="nav-btn-primary">Ingresar</a>
          `}
        </div>
      </div>
    </nav>
  `;
}

/**
 * HIGH-DENSITY MODULE GRID
 * Renders modules in a consistent 4-column layout with section headers.
 */
async function renderModulesList() {
  const container = document.getElementById('modules-grid');
  if(!container) return;
  
  const modules = await fetchModules();
  let html = '';

  modules.chapters.forEach(ch => {
    html += `
      <div class="section-divider">
        <h3 class="font-head font-black tracking-tight text-primary uppercase text-xs">Capítulo ${ch.chapter}: ${ch.title}</h3>
      </div>
      <div class="grid-centered">
    `;

    ch.modules.forEach(m => {
      const isLocked = m.in_development;
      const targetUrl = isLocked ? '#' : `tutor?id=${m.id}`;
      const badgeCls = isLocked ? 'badge-dev' : 'badge-active';
      const badgeTxt = isLocked ? 'EN DESARROLLO' : 'DISPONIBLE';
      
      html += `
        <a href="${targetUrl}" class="card ${isLocked ? 'locked' : ''}" style="text-decoration:none; color:inherit;">
          <div class="flex flex-col gap-2">
            <span class="badge ${badgeCls}">${badgeTxt}</span>
            <h4 class="font-head font-bold text-sm leading-tight">${m.title}</h4>
            <p class="text-xs text-muted" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${m.excerpt || ''}</p>
          </div>
        </a>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

// System Init
document.addEventListener('DOMContentLoaded', () => {
  injectGlobalNav();

  // Dashboard specifics
  const nameEl = document.getElementById('dash-user-name');
  if (nameEl) {
    const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
    nameEl.textContent = profile.name || 'Estudiante';
  }

  // Modules Grid
  if (document.getElementById('modules-grid')) {
    renderModulesList();
  }
});
