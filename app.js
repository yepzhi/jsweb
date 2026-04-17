/**
 * app.js - JóvenesSTEM MVP (Vanilla JS)
 */

// ── MODULE READER MODAL ──────────────────────────────────────────────
function injectReaderStyles() {
  if (document.getElementById('reader-styles')) return;
  const style = document.createElement('style');
  style.id = 'reader-styles';
  style.textContent = `
    #module-reader-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.82);
      backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
    #module-reader-overlay.open {
      opacity: 1; visibility: visible;
    }
    #reader-panel {
      background: var(--card-bg, #0e1628);
      border: 1px solid rgba(0,242,255,0.18);
      border-radius: 20px;
      width: min(92vw, 780px);
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: translateY(24px);
      transition: transform 0.3s ease;
      box-shadow: 0 32px 80px -12px rgba(0,0,0,0.6);
    }
    #module-reader-overlay.open #reader-panel {
      transform: translateY(0);
    }
    #reader-header {
      padding: 20px 24px 16px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: flex; justify-content: space-between; align-items: flex-start; gap: 12px;
      flex-shrink: 0;
    }
    #reader-title {
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      font-size: 1.25rem;
      color: var(--text-color, #e2e8f0);
      line-height: 1.3;
    }
    #reader-close {
      background: rgba(255,255,255,0.07);
      border: none; border-radius: 50%;
      width: 32px; height: 32px;
      cursor: pointer; color: #aaa;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: background 0.2s;
    }
    #reader-close:hover { background: rgba(255,255,255,0.14); color: #fff; }
    #reader-body {
      padding: 24px;
      overflow-y: auto;
      flex: 1;
      font-size: 0.97rem;
      line-height: 1.8;
      color: var(--text-muted, #94a3b8);
    }
    #reader-body strong {
      color: var(--primary, #00f2ff);
      font-weight: 700;
    }
    #reader-body p { margin-bottom: 1rem; }
    #reader-body hr {
      border: none;
      border-top: 1px solid rgba(255,255,255,0.08);
      margin: 1.5rem 0;
    }
    #reader-body .reader-footer {
      font-size: 0.78rem;
      color: rgba(148,163,184,0.6);
      line-height: 1.6;
      background: rgba(0,242,255,0.04);
      border: 1px solid rgba(0,242,255,0.12);
      border-radius: 10px;
      padding: 12px 14px;
      margin-top: 1rem;
    }
    #reader-footer {
      padding: 16px 24px;
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex; gap: 12px; justify-content: flex-end;
      flex-shrink: 0;
    }
    #reader-go-tutor {
      background: var(--primary, #00f2ff);
      color: #000;
      border: none;
      border-radius: 12px;
      padding: 11px 24px;
      font-weight: 800;
      font-size: 0.9rem;
      cursor: pointer;
      display: flex; align-items: center; gap: 8px;
      transition: opacity 0.2s;
    }
    #reader-go-tutor:hover { opacity: 0.85; }
    #reader-duration {
      font-size: 0.75rem;
      color: #888;
      align-self: center;
    }
  `;
  document.head.appendChild(style);
}

function injectReaderModal() {
  if (document.getElementById('module-reader-overlay')) return;
  const el = document.createElement('div');
  el.id = 'module-reader-overlay';
  el.innerHTML = `
    <div id="reader-panel" role="dialog" aria-modal="true">
      <div id="reader-header">
        <div id="reader-title"></div>
        <button id="reader-close" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div id="reader-body"></div>
      <div id="reader-footer">
        <span id="reader-duration"></span>
        <button id="reader-go-tutor">
          Ir al Tutor
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(el);

  document.getElementById('reader-close').addEventListener('click', closeReader);
  el.addEventListener('click', (e) => { if (e.target === el) closeReader(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeReader(); });
}

let _readerTutorUrl = '#';

function openReader(module, tutorUrl) {
  _readerTutorUrl = tutorUrl;
  const overlay = document.getElementById('module-reader-overlay');
  if (!overlay) return;

  document.getElementById('reader-title').textContent = `${module.id} ${module.title}`;
  document.getElementById('reader-duration').textContent = `⏱ ${module.duration || 7} min lectura`;

  // Render fullText: parse **bold** and newlines to HTML
  const raw = module.fullText || module.content || 'Contenido no disponible aún.';
  const title = module.title;

  let mainContent = raw.split('---')[0]
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .split('\n\n')
    .map(p => p.trim() ? `<p>${p.replace(/\n/g, '<br>')}</p>` : '')
    .join('');

  const footerRaw = raw.includes('---') ? raw.split('---')[1] : '';
  let footerHtml = '';

  if (footerRaw) {
    const lines = footerRaw.split('\n').filter(l => l.trim());
    footerHtml = `<div class="standards-model-card">`;

    lines.forEach(line => {
      let icon = '';
      let label = '';
      let content = line.trim();

      if (line.includes('🔖')) {
        icon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
        label = 'Bluebook';
        content = content.replace('**🔖', '').replace('🔖', '').replace('**', '').replace('Bluebook v1 ·', '').trim();
      } else if (line.includes('📐')) {
        icon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3-3Z"></path></svg>`;
        label = 'NGSS';
        content = content.replace('**📐', '').replace('📐', '').replace('**', '').replace('NGSS:', '').trim();
      } else if (line.includes('📋')) {
        icon = `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`;
        label = 'RENAC';
        content = content.replace('**📋', '').replace('📋', '').replace('**', '').replace('RENAC / ', '').replace('RENAC:', '').trim();
        if (content.includes('EC009')) content = 'SEP-CONOCER: ' + content;
      } else if (line.includes('💡')) {
        const concepts = content.replace('**💡', '').replace('💡', '').replace('**', '').replace(/Standards World:|Estándares:|World of Standards:/g, '').trim().split(' · ').join(', ');
        footerHtml += `
          <div class="standard-world-box">
            <span class="standard-world-label">Estándares Evaluados</span>
            <div style="font-size:0.85rem; color:var(--text-color); line-height:1.4;">${concepts}</div>
          </div>
        `;
        return;
      }

      if (icon) {
        footerHtml += `
          <div class="standard-item">
            <div class="standard-icon">${icon}</div>
            <div><span class="standard-label">${label}</span> ${content}</div>
          </div>
        `;
      }
    });
    footerHtml += `</div>`;
  }

  let html = mainContent + footerHtml;

  // Append closing phrase
  html += `
    <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid rgba(255,255,255,0.05); text-align:center;">
      <p style="font-size:0.9rem; color:var(--text-muted); font-style:italic;">
        Una vez que termines tu lectura, haz clic en <strong>'Ir al Tutor'</strong> para charlar con el <strong>STEMBot</strong> sobre lo que aprendiste.
      </p>
    </div>
  `;

  document.getElementById('reader-body').innerHTML = html;

  document.getElementById('reader-body').scrollTop = 0;

  document.getElementById('reader-go-tutor').onclick = () => {
    closeReader();
    window.location.href = tutorUrl;
  };

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReader() {
  const overlay = document.getElementById('module-reader-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Progression & Storage Helpers
const PROGRESS_KEY = 'jstem_progress';

function getProgress() {
  const p = localStorage.getItem(PROGRESS_KEY);
  return p ? JSON.parse(p) : { completed: [] };
}

function unlockNext(moduleId) {
  const p = getProgress();
  if (!p.completed.includes(moduleId)) {
    p.completed.push(moduleId);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  }
}

// XP Gamification
function getXP() {
  return parseInt(localStorage.getItem('jstem_xp')) || 0;
}

function addXP(amount) {
  let xp = getXP();
  xp += amount;
  localStorage.setItem('jstem_xp', xp);
  // Update navbar counter if it exists
  const counter = document.getElementById('navbar-xp-count');
  if (counter) {
    counter.textContent = xp;
    counter.classList.add('xp-glow');
    setTimeout(() => counter.classList.remove('xp-glow'), 1000);
  }
}

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
  if (document.querySelector('.dash-header')) return;
  const progress = getProgress();
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  const avatarHtml = profile.avatar
    ? `<img src="${profile.avatar}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;border:1px solid var(--border);">`
    : `<div style="width:32px;height:32px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:12px;">${(profile.name || 'A').charAt(0)}</div>`;

  const nav = document.createElement('nav');
  nav.className = 'dash-header';
  nav.innerHTML = `
    <a href="home.html" style="font-weight:900;font-size:1.1rem;color:var(--text-color);">
      JóvenesSTEM<span style="color:var(--primary)">®</span>
    </a>
    <div class="flex gap-4 items-center">
      <div class="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded-lg border border-primary/10">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--warning)" stroke="var(--warning)" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
        <span id="navbar-xp-count" class="text-xs font-black text-primary">${getXP()}</span>
        <span class="text-[9px] font-bold text-muted opacity-60">XP</span>
      </div>
      <a href="dashboard.html" class="text-sm font-bold text-muted hover-primary" style="text-decoration:none;">Dashboard</a>
      <a href="modules.html" class="text-sm font-bold text-muted hover-primary" style="text-decoration:none;">Módulos</a>
      <a href="profile.html" style="text-decoration:none;">${avatarHtml}</a>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);
}

// Dashboard Dynamic Hero
async function renderDashboard() {
  const nameEl = document.getElementById('dash-user-name');
  const heroEl = document.getElementById('active-module-hero');
  const titleEl = document.getElementById('hero-module-title');
  const linkEl = document.getElementById('hero-module-link');

  if (!nameEl) return;

  // Personalization
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  if (profile.name) nameEl.textContent = profile.name.split(' ')[0];

  // Logic to find next module
  const data = await loadModules();
  const progress = getProgress();
  let nextModule = null;

  // Find first non-completed module in Chapter 1
  for (const ch of data.chapters) {
    for (const m of ch.modules) {
      if (!progress.completed.includes(m.id)) {
        nextModule = m;
        break;
      }
    }
    if (nextModule) break;
  }

  // If all completed or none found, default to first
  if (!nextModule && data.chapters.length > 0) {
    nextModule = data.chapters[0].modules[0];
  }

  if (nextModule && heroEl) {
    titleEl.textContent = nextModule.title;
    linkEl.href = `tutor.html?id=${nextModule.id}`;
    heroEl.style.display = 'block';
  }
}

// Modules Grid
async function renderModulesList(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = await loadModules();
  const progress = getProgress();
  let html = ``;

  let globalIdx = 0;
  // Pedagogical Order Notice
  html += `
    <div class="academic-note" style="margin-bottom: 2.5rem; background: rgba(0, 242, 255, 0.05); border: 1px solid rgba(0, 242, 255, 0.2); padding: 1.25rem; border-radius: 12px; display: flex; align-items: flex-start; gap: 1rem;">
      <div style="color: var(--primary); margin-top: 3px;">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 14c-.77 1.333.192 3 1.732 3z"></path></svg>
      </div>
      <div>
        <h4 style="margin: 0; font-weight: bold; color: var(--primary); font-size: 0.9rem; letter-spacing: 0.05em;">NOTA ACADÉMICA</h4>
        <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">
          El plan curricular está diseñado para llevarse en **orden secuencial**. Cada módulo construye los cimientos del siguiente para garantizar el dominio total de los conceptos del <b>Bluebook v2</b>.
        </p>
      </div>
    </div>
  `;

  let lastCompletedIdInPrevChapter = null;

  data.chapters.forEach(ch => {
    html += `
      <div style="margin-bottom: 3rem;">
        <h2 class="text-2xl font-head font-bold mb-6 flex items-center gap-3">
          <div style="color:${ch.color}; width:28px; height:28px; display:inline-flex; align-items:center;">${ch.icon}</div>
          ${ch.title}
        </h2>
        <div class="grid-centered">
    `;

    ch.modules.forEach((m, globalIdxInCh) => {
      if (m.sectionTitle) {
        html += `
          <div class="section-divider">
            <h3 class="text-xl font-bold text-primary mb-6 mt-10">${m.sectionTitle}</h3>
          </div>
        `;
      }

      // Logic: 30-module limit (demo)
      const isChapter2 = ch.id === 'ch2';
      const isDemoLimit = globalIdxInCh >= 30;
      const isFirstOfAll = globalIdx === 0;
      const prevModule = globalIdxInCh > 0 ? ch.modules[globalIdxInCh - 1] : null;

      let isPrevCompleted = false;
      if (prevModule) {
        isPrevCompleted = progress.completed.includes(prevModule.id);
      } else if (lastCompletedIdInPrevChapter) {
        isPrevCompleted = progress.completed.includes(lastCompletedIdInPrevChapter);
      } else {
        isPrevCompleted = isFirstOfAll;
      }

      const finalLockedState = isChapter2 ? false : (isDemoLimit ? !isPrevCompleted : false);
      const isCompleted = progress.completed.includes(m.id);

      const targetUrl = finalLockedState ? '#' : `tutor.html?id=${m.id}`;
      let badgeCls = finalLockedState ? (isDemoLimit ? 'badge-locked' : 'badge-dev') : 'badge-active';
      let badgeTxt = finalLockedState ? (isDemoLimit ? '$19 MXN' : 'BLOQUEADO') : 'DISPONIBLE';

      if (isCompleted) {
        badgeCls = 'badge-active';
        badgeTxt = 'COMPLETADO ✅';
      }

      const hasFullText = !!m.fullText;

      html += `
        <a href="${targetUrl}" class="card flex-col ${finalLockedState ? 'card-locked' : ''} ${isCompleted ? 'completed-card' : ''}" style="${finalLockedState ? 'cursor:not-allowed;' : ''}">
          ${finalLockedState && isDemoLimit ? `
            <div class="lock-overlay">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" class="mb-2" style="color:var(--primary)"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              <div class="lock-cta">Activar Módulo</div>
            </div>
          ` : ''}
          <div class="flex justify-between items-center mb-4 module-header">
            <div class="flex gap-2 items-center">
              <span class="badge ${badgeCls}">${badgeTxt}</span>
            </div>
            <div class="module-icon" style="color: ${finalLockedState ? 'var(--text-muted)' : (isCompleted ? '#10b981' : 'var(--primary)')};">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" class="opacity-80">
                <circle cx="12" cy="12" r="10"></circle>
                ${isCompleted ? '<path d="m9 12 2 2 4-4"></path>' : '<path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path>'}
              </svg>
            </div>
          </div>
          <h3 class="font-bold text-lg mb-1 module-title">${m.id} ${m.title}</h3>
          <p class="text-sm text-muted line-clamp-2 module-excerpt">${m.content}</p>
          <div class="mt-4 pt-3 border-t border-primary/5 flex items-center justify-between module-footer">
            <span class="book-ref-tag">${m.bookReference || 'Ref. STEM'}</span>
            <div class="flex items-center gap-1 text-[10px] font-bold text-primary">
              ENTRAR
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="3" fill="none"><path d="m9 18 6-6-6-6"></path></svg>
            </div>
          </div>
        </a>
      `;
      globalIdx++;
      if (globalIdxInCh === ch.modules.length - 1) {
        lastCompletedIdInPrevChapter = m.id;
      }
    });

    html += `</div></div></div>`;
  });

  container.innerHTML = html;

  // Store all module data globally so the reader modal can access it
  window.__jstem_data = {};
  data.chapters.forEach(ch => ch.modules.forEach(m => { window.__jstem_data[m.id] = m; }));
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  injectReaderStyles();
  injectReaderModal();
  renderNavbar();
  renderDashboard();
  renderModulesList('modules-grid');
});
