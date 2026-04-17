/**
 * app.js - JóvenesSTEM MVP (Vanilla JS)
 */

async function loadModules() {
  try {
    const res = await fetch('./data/modules.json');
    if (!res.ok) throw new Error('Data no encontrada');
    return await res.json();
  } catch (err) {
    console.error('Error cargando módulos:', err);
    return { chapters: [] };
  }
}

// Render Header/Menu
function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'dash-header';
  nav.innerHTML = `
    <a href="dashboard" style="font-weight:900;font-size:1.1rem;color:var(--text-color);">
      JóvenesSTEM<span style="color:var(--primary)">®</span>
    </a>
    <div class="flex gap-4 items-center">
      <a href="modules" class="text-sm font-bold text-muted hover-primary">Módulos</a>
      <div style="width:32px;height:32px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;">A</div>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
}

// Modules Grid (used in modules.html and dashboard)
async function renderModulesList(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = await loadModules();
  let html = '';

  data.chapters.forEach(ch => {
    html += `
      <div style="margin-bottom: 2rem;">
        <h2 class="text-2xl font-head font-bold mb-4">${ch.title} ${ch.emoji}</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.5rem;">
    `;

    ch.modules.forEach(m => {
      const isLocked = m.in_development;
      const targetUrl = isLocked ? '#' : `tutor?id=${m.id}`;
      const badgeCls = isLocked ? 'badge-dev' : 'badge-active';
      const badgeTxt = isLocked ? 'EN DESARROLLO' : 'DISPONIBLE';
      
      html += `
        <a href="${targetUrl}" class="card flex-col" style="text-decoration:none; color:inherit; ${isLocked ? 'opacity:0.6;cursor:not-allowed;' : ''}">
          <div class="flex justify-between items-center mb-4">
            <span class="badge ${badgeCls}">${badgeTxt}</span>
            <span style="font-size:24px;">🤖</span>
          </div>
          <h3 class="font-bold text-lg mb-1">${m.title}</h3>
          <p class="text-xs text-muted mb-4">~${m.duration} min</p>
        </a>
      `;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderModulesList('modules-grid');
});
