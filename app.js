/**
 * app.js - JóvenesSTEM Platform Core
 * Handles unified navigation, Firebase Auth sync, and dynamic module rendering.
 */
/**
 * app.js - JóvenesSTEM Platform Core
 * Handles unified navigation and dynamic module rendering.
 */

// Global state
let currentUser = null;

export async function fetchModules() {
  try {
    const res = await fetch(`./data/modules.json?t=${new Date().getTime()}`);
    if (!res.ok) throw new Error('Data no encontrada');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error cargando módulos:', err);
    return { chapters: [] };
  }
}
window.fetchModules = fetchModules;

/**
 * GLOBAL NAVIGATION INJECTION
 */
export function injectGlobalNav() {
  const header = document.getElementById('global-nav');
  if (!header) return;

  const path = window.location.pathname;
  const isAppPage = path.includes('modules') || path.includes('tutor') || path.includes('dashboard') || path.includes('profile');
  
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  const userName = profile.name || (currentUser ? currentUser.displayName : 'Estudiante');
  const firstLetter = userName.charAt(0).toUpperCase();

  header.innerHTML = `
    <nav class="global-header">
      <div class="nav-container">
        <a href="index.html" class="nav-logo">
          <span class="logo-text">JóvenesSTEM<em>®</em></span>
        </a>
        
        <div class="nav-links">
          ${currentUser || isAppPage ? `
            <a href="modules.html" class="nav-link">Explorar</a>
            <a href="dashboard.html" class="nav-link">Dashboard</a>
            <div class="nav-user-orb" onclick="window.location.href='profile.html'">
              <span>${firstLetter}</span>
            </div>
          ` : `
            <a href="index.html#proceso" class="nav-link hide-mobile">Metodología</a>
            <a href="index.html#pricing" class="nav-link hide-mobile">Precios</a>
            <a href="login.html" class="nav-btn-primary">Ingresar</a>
          `}
        </div>
      </div>
    </nav>
  `;
}
window.injectGlobalNav = injectGlobalNav;

/**
 * GLOBAL FOOTER INJECTION
 */
export function injectGlobalFooter() {
  const footer = document.getElementById('global-footer');
  if (!footer) return;

  const year = new Date().getFullYear();
  footer.innerHTML = `
    <div class="global-footer minimalist">
      <div class="footer-container">
        <div class="footer-brand">
          <span class="logo-text">JóvenesSTEM<em>®</em></span>
          <p class="footer-tagline">Hacia la independencia tecnológica de las Americas.</p>
        </div>
        
        <div class="footer-meta">
          <p class="copyright">&copy; 2026 jóvenesSTEM. Todos los derechos reservados.</p>
          <span class="footer-version">v5.0.0 (HIFI COMPLETE)</span>
        </div>
      </div>
    </div>
  `;
}
window.injectGlobalFooter = injectGlobalFooter;

/**
 * GAMIFICATION & PROGRESS
 */
export function addXP(amount) {
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  profile.xp = (profile.xp || 0) + amount;
  localStorage.setItem('jstem_profile', JSON.stringify(profile));
  
  // Trigger a custom event for UI updates if needed
  window.dispatchEvent(new CustomEvent('xpUpdated', { detail: profile.xp }));
  console.log(`XP Added: ${amount}. Total: ${profile.xp}`);
}
window.addXP = addXP;

export function unlockNext(currentId) {
  const completions = JSON.parse(localStorage.getItem('js_completed_modules') || '[]');
  if (!completions.includes(currentId)) {
    completions.push(currentId);
    localStorage.setItem('js_completed_modules', JSON.stringify(completions));
  }
  console.log(`Module ${currentId} completed/unlocked.`);
}
window.unlockNext = unlockNext;

/**
 * MODULE GRID
 */
async function renderModulesList() {
  const container = document.getElementById('modules-grid');
  if(!container) return;
  
  const modules = await fetchModules();
  let html = '';

  modules.chapters.forEach(ch => {
    const isIntro = ch.id && ch.id.toLowerCase().includes('intro');
    const chNum = ch.id ? ch.id.replace('ch', '') : '?';
    // Explicitly force "Capítulo Intro" for the intro chapter
    const headerTitle = isIntro ? "Capítulo Intro" : `Capítulo ${chNum}: ${ch.title}`;
    
    html += `
      <div class="section-divider">
        <h3 class="font-head font-black tracking-tight text-primary uppercase text-xs">${headerTitle}</h3>
      </div>
      <div class="grid-centered">
    `;

    ch.modules.forEach(m => {
      const isLocked = m.in_development;
      const targetUrl = isLocked ? '#' : `tutor.html?id=${m.id}`;
      const badgeCls = isLocked ? 'badge-dev' : 'badge-active';
      const badgeTxt = isLocked ? 'EN DESARROLLO' : 'DISPONIBLE';
      
      // Use ch.icon and ch.color for the card accent
      const accentColor = ch.color || 'var(--primary)';
      const iconSvg = ch.icon || '';

      html += `
        <a href="${targetUrl}" class="card ${isLocked ? 'card-locked' : ''}" style="text-decoration:none; color:inherit; border-top: 3px solid ${accentColor};">
          <div class="module-header">
            <div class="flex justify-between items-center mb-2">
               <span class="badge ${badgeCls}">${badgeTxt}</span>
               <div style="color:${accentColor}; width:18px; height:18px;">${iconSvg}</div>
            </div>
            <h4 class="module-title font-head font-bold">${m.title}</h4>
          </div>
          <p class="module-excerpt text-xs text-muted">${m.content || 'Explora este módulo...'}</p>
          
          <div class="mt-4 flex justify-between items-center module-footer">
            <span class="text-xs font-bold opacity-60">${m.duration || 7} min</span>
            <div class="reader-btn">
               <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          
          ${isLocked ? `
            <div class="lock-overlay">
              <div style="color:var(--text-muted); margin-bottom:10px;">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <span class="lock-cta">Próximamente</span>
            </div>
          ` : ''}
        </a>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
}

/**
 * ACHIEVEMENT BADGE SYSTEM v5.0.0
 */
const BADGE_COLLECTION = [
  { name: "Starter Mind", type: "LÓGICA", attr: "BEGINNER", color: "#00d2ff", desc: "Inicio del viaje STEM", icon: `<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-4.12 2.5 2.5 0 0 1 0-4.12A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-4.12 2.5 2.5 0 0 0 0-4.12A2.5 2.5 0 0 0 14.5 2z" />` },
  { name: "Curious Explorer", type: "LÓGICA", attr: "EXPLORER", color: "#ffcc00", desc: "Preguntando al mundo", icon: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/>` },
  { name: "Problem Solver", type: "LÓGICA", attr: "SOLVER", color: "#00f260", desc: "Conectando ideas", icon: `<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>` },
  { name: "Tech Apprentice", type: "TECH", attr: "SKILL", color: "#ff0055", desc: "Habilidades técnicas pro", icon: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/>` },
  { name: "Idea Generator", type: "TECH", attr: "CREATOR", color: "#f40076", desc: "Soluciones creativas", icon: `<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5M9 18h6M10 22h4"/>` },
  { name: "Lab Rookie", type: "FÍSICA", attr: "CHEMIST", color: "#bdc3c7", desc: "Primeras pruebas", icon: `<path d="M9 2v17.5A2.5 2.5 0 0 0 11.5 22h1A2.5 2.5 0 0 0 15 19.5V2M9 8h6M8 2h8"/>` },
  { name: "Data Tracker", type: "FÍSICA", attr: "ANALYST", color: "#00e5ff", desc: "Maestro de patrones", icon: `<path d="M3 3v18h18M7 16l4-4 4 4 5-8"/>` },
  { name: "System Builder", type: "TECH", attr: "ENGR", color: "#ffbf00", desc: "Construyendo el futuro", icon: `<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05M12 22.08V12"/>` },
  { name: "Tech Fixer", type: "TECH", attr: "DEBUG", color: "#a8ff78", desc: "Depurando sistemas", icon: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>` },
  { name: "Module Master", type: "FÍSICA", attr: "MÉXICO", color: "#ffdf00", desc: "Primer gran hito", icon: `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-2.34c0-.55.45-1 1-1h1c.55 0 1 .45 1 1zM17 14.66V17c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-2.34c0-.55.45-1 1-1h1c.55 0 1 .45 1 1zM15 9V5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4h6z"/>` },
  { name: "Science Analyst", type: "FÍSICA", attr: "CORE", color: "#00b4d8", desc: "Visión microscópica", icon: `<path d="M6 18h8M3 22h18M12 18a3 3 0 0 0 3-3V9M12 14h3M12 10h3M12 6h3M9 10a3 3 0 0 1 3-3"/>` },
  { name: "Automation Thinker", type: "TECH", attr: "ROBOT", color: "#9d4edd", desc: "Mente robótica", icon: `<path d="M12 8V4M8 4h8M9 12v2M15 12v2M5 9v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M9 9h6M2 13h3M19 13h3"/>` },
  { name: "Digital Architect", type: "COSMOS", attr: "NETS", color: "#4cc9f0", desc: "Diseño de redes", icon: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M10 6h4M10 18h4M7 10v4M17 10v4"/>` },
  { name: "Signal Navigator", type: "FÍSICA", attr: "NAV", color: "#f72585", desc: "Ondas y frecuencias", icon: `<path d="M2 20a16 16 0 0 1 20 0M7 15a8 8 0 0 1 10 0M12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>` },
  { name: "Innovation Driver", type: "LÓGICA", attr: "LEAD", color: "#3a0ca3", desc: "Impulso creativo", icon: `<circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10M12 12l5 5"/>` },
  { name: "Deep Thinker", type: "LÓGICA", attr: "QUANT", color: "#4361ee", desc: "Análisis avanzado", icon: `<path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 0-6.74-9.31M11 12h2M12 9v6"/>` },
  { name: "Research Specialist", type: "COSMOS", attr: "UNIVERSE", color: "#b5179e", desc: "Investigación científica", icon: `<path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/>` },
  { name: "Tech Explorer", type: "TECH", attr: "ACE", color: "#ff9100", desc: "Tecnologías de punta", icon: `<path d="m4.5 16.5-1.5 3 3 1.5M19.5 7.5l1.5-3-3-1.5M12 12l.01.01M9 6.75l6 10.5M6.75 15l10.5-6"/>` },
  { name: "Future Designer", type: "COSMOS", attr: "LEGEND", color: "#80ffdb", desc: "Diseñando el mañana", icon: `<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 8l4 4-4 4M8 12h8"/>` },
  { name: "Knowledge Commander", type: "COSMOS", attr: "MITHIC", color: "#560bad", desc: "Liderazgo STEM", icon: `<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z"/><path d="M6 2v18M12 8h4M12 12h4"/>` },
  { name: "Master of Progress", type: "COSMOS", attr: "GOD", color: "#ffd700", desc: "Logro Final", icon: `<path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/><circle cx="12" cy="12" r="4"/><path d="m12 8 4 4-4 4-4-4 4-4z"/>` }
];

async function renderBadges() {
  const container = document.getElementById('badge-gallery');
  if (!container) return;

  const completions = JSON.parse(localStorage.getItem('js_completed_modules') || '[]');
  const doneCount = completions.length;
  
  let html = '';
  BADGE_COLLECTION.forEach((badge, idx) => {
    const levelNum = idx + 1;
    const isLocked = doneCount < (levelNum * 10);
    
    html += `
      <div class="badge-card-container">
        <div class="badge-card ${isLocked ? 'locked' : ''}" 
             style="--card-color: ${badge.color}"
             onclick="${isLocked ? '' : 'window.openShareModal(' + idx + ')'}">
          
          <div class="card-header">
            <span class="card-lvl">lvl. ${levelNum}</span>
            <span class="card-attr">${badge.attr}</span>
          </div>

          <div class="card-body">
            <div class="card-illustration">
              <svg viewBox="0 0 24 24" style="stroke: ${badge.color}">${badge.icon}</svg>
            </div>
            <div class="card-holo"></div>
          </div>

          <div class="card-footer">
            <div class="card-name">${badge.name}</div>
            <div class="card-type">${badge.type}</div>
          </div>
          
          ${isLocked ? '<div class="card-lock-overlay">🔒 BLOQUEADO</div>' : ''}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

window.openShareModal = function(idx) {
  const modal = document.getElementById('badge-modal');
  const badge = BADGE_COLLECTION[idx];
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  const name = profile.name || 'Estudiante';
  
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="modal-content fade-in">
      <button class="modal-close" onclick="document.getElementById('badge-modal').style.display='none'">×</button>
      <div class="modal-badge-preview">
        <svg viewBox="0 0 24 24" width="80" height="80" stroke="#277eff" fill="none" stroke-width="1.5">${badge.icon}</svg>
      </div>
      <h2 class="text-2xl font-head font-black mb-2" style="color:#fff;">${badge.name}</h2>
      <p class="text-muted mb-6">¡Felicidades ${name}! Has alcanzado este nivel científico.</p>
      
      <div class="share-btn-group">
        <button class="btn-share btn-download" onclick="window.downloadBadge(${idx})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          DESCARGAR LOGRO
        </button>
        <button class="btn-share btn-copy" onclick="window.copyShareLink(${idx})">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          COPIAR ENLACE
        </button>
      </div>
    </div>
  `;
};

window.downloadBadge = async function(idx) {
  const badge = BADGE_COLLECTION[idx];
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  const name = (profile.name || 'Estudiante').toUpperCase();
  const canvas = document.getElementById('share-canvas');
  const ctx = canvas.getContext('2d');
  
  // 1. Background
  const grad = ctx.createLinearGradient(0, 0, 1200, 630);
  grad.addColorStop(0, '#0f172a');
  grad.addColorStop(1, '#1e293b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1200, 630);
  
  // 2. Deco
  ctx.strokeStyle = 'rgba(39, 126, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for(let i=0; i<1200; i+=60) { ctx.moveTo(i, 0); ctx.lineTo(i, 630); }
  for(let i=0; i<630; i+=60) { ctx.moveTo(0, i); ctx.lineTo(1200, i); }
  ctx.stroke();

  // 3. Texts
  ctx.textAlign = 'center';
  ctx.fillStyle = '#277eff';
  ctx.font = 'bold 24px Inter';
  ctx.fillText('JÓVENES STEM® · LOGRO OFICIAL', 600, 100);
  
  ctx.fillStyle = '#fff';
  ctx.font = '900 100px Outfit';
  ctx.fillText(badge.name, 600, 280);
  
  ctx.font = 'bold 36px Inter';
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.fillText(`NIVEL CIENTÍFICO #${idx+1}`, 600, 350);
  
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 50px Inter';
  ctx.fillText(name, 600, 480);
  
  ctx.font = '18px Inter';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText('CERTIFICADO POR ALBERTO YÉPIZ · PROYECTO JSWEB', 600, 560);

  // 4. Download
  const link = document.createElement('a');
  link.download = `JS-Logro-${badge.name.replace(/\s/g, '-')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
};

window.copyShareLink = function(idx) {
  const badge = BADGE_COLLECTION[idx];
  const text = `¡Acabo de desbloquear el nivel "${badge.name}" en JóvenesSTEM! 🚀 #STEM #Educacion`;
  navigator.clipboard.writeText(text).then(() => {
    alert('Texto de logro copiado para compartir!');
  });
};

/**
 * DYNAMIC DASHBOARD ENGINE
 */
async function renderDashboard() {
  const percentEl = document.getElementById('dash-percent');
  if (!percentEl) return;

  const completions = JSON.parse(localStorage.getItem('js_completed_modules') || '[]');
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  const data = await fetchModules();
  
  // 1. Calculate stats
  let totalModules = 0;
  let nextModule = null;
  data.chapters.forEach(ch => {
    totalModules += ch.modules.length;
    if (!nextModule) {
      nextModule = ch.modules.find(m => !completions.includes(m.id) && !m.in_development);
    }
  });

  const doneCount = completions.length;
  const pendingCount = Math.max(0, totalModules - doneCount);
  const percent = Math.min(100, Math.round((doneCount / totalModules) * 100));

  // 2. Update UI
  percentEl.textContent = `${percent}%`;
  document.getElementById('stat-done').textContent = doneCount;
  document.getElementById('stat-pending').textContent = pendingCount;
  document.getElementById('stat-xp').textContent = profile.xp || 0;

  // 3. Badges (v4.2.2)
  renderBadges();

  // Progress Bar SVG (Circumference is 565.48)
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    const offset = 565.48 - (565.48 * percent) / 100;
    progressBar.style.strokeDashoffset = offset;
  }

  // Rank / Title
  const rankEl = document.getElementById('dash-rank');
  if (rankEl) {
    if (percent === 100) rankEl.textContent = 'GRADUADO STEM 🎓';
    else if (percent >= 50) rankEl.textContent = 'MAESTRO JS ⚡';
    else if (percent >= 10) rankEl.textContent = 'EXPLORADOR STEM 🔭';
    else rankEl.textContent = 'ASPIRANTE STEM';
  }

  // Milestones
  if (doneCount >= 10) document.getElementById('ms-10')?.classList.add('unlocked');
  if (doneCount >= 50) document.getElementById('ms-50')?.classList.add('unlocked');
  if (doneCount >= 100) document.getElementById('ms-100')?.classList.add('unlocked');
  if (doneCount >= totalModules) document.getElementById('ms-final')?.classList.add('unlocked');

  // Next Module Link
  const nextLink = document.getElementById('hero-module-link');
  if (nextLink && nextModule) {
    nextLink.href = `tutor.html?id=${nextModule.id}`;
  }
}

// Global Logout
window.logout = async () => {
  localStorage.removeItem('jstem_profile');
  window.location.href = 'index.html';
};

// Setup Auth bypass (Local Storage Only)
function checkLocalAuth() {
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  const path = window.location.pathname;
  const protectedPaths = ['profile.html']; // Only strictly personal data is protected
  const isProtected = protectedPaths.some(p => path.includes(p));
  
  if (isProtected && !profile.name) {
    console.warn('Acceso restringido. Redirigiendo a login...');
    window.location.href = 'login.html';
  }

  // Dashboard specifics
  const nameEl = document.getElementById('dash-user-name');
  if (nameEl) {
    nameEl.textContent = profile.name || 'Invitado';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Core Services
  if (typeof injectGlobalNav === 'function') injectGlobalNav();
  if (typeof injectGlobalFooter === 'function') injectGlobalFooter();
  if (typeof checkLocalAuth === 'function') checkLocalAuth();
  
  // 2. Dashboard Hub
  if (document.getElementById('dash-percent')) {
    renderDashboard();
  }

  // 3. Module Index
  if (document.getElementById('modules-grid')) {
    renderModulesList();
  }

  // 4. Milestone Check
  const completions = JSON.parse(localStorage.getItem('js_completed_modules') || '[]');
  if (completions.length >= 10 && !localStorage.getItem('js_survey_done')) {
    setTimeout(showMilestoneModal, 1500);
  }
});

function showMilestoneModal() {
  // Prevent double trigger and set flag immediately
  if (document.getElementById('milestone-overlay')) return;
  localStorage.setItem('js_survey_done', 'true');

  const overlay = document.createElement('div');
  overlay.id = 'milestone-overlay';
  overlay.style = "position:fixed; inset:0; background:rgba(5,5,15,0.85); backdrop-filter:blur(15px); z-index:10000; display:flex; align-items:center; justify-content:center; padding:20px; animation: modalIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;";
  
  overlay.innerHTML = `
    <div style="background:linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.1); border-radius:32px; padding:48px 40px; max-width:480px; width:100%; text-align:center; color:white; box-shadow:0 30px 60px rgba(0,0,0,0.5);">
      <div style="font-size:64px; margin-bottom:24px; animation: bounce 2s infinite;">🎓</div>
      <h2 style="font-family:'Outfit',sans-serif; font-weight:900; font-size:2.4rem; margin-bottom:8px; letter-spacing:-0.03em;">¡Hito de 10 Módulos!</h2>
      <p style="color:var(--primary); font-weight:800; text-transform:uppercase; letter-spacing:0.15em; font-size:0.75rem; margin-bottom:24px;">LISTO PARA LA CERTIFICACIÓN</p>
      
      <p style="opacity:0.8; line-height:1.6; margin-bottom:32px; font-size:1rem;">Has completado el núcleo inicial de JóvenesSTEM. ¿Quieres recibir tu <strong>Certificación Oficial</strong> alineada a NGSS y RENAC SEP?</p>

      <div style="background:rgba(39, 126, 255, 0.1); border:1px solid var(--primary); border-radius:16px; padding:16px; margin-bottom:32px;">
         <span style="display:block; font-size:0.75rem; opacity:0.6; text-transform:uppercase;">Precio de Certificación</span>
         <span style="font-size:2rem; font-weight:900; color:white;">$49.00 <small style="font-size:1rem; opacity:0.6;">MXN</small></span>
      </div>

      <div id="survey-footer" style="display:flex; flex-direction:column; gap:12px;">
         <a href="https://forms.gle/vuestra_forma_de_pago" target="_blank" id="final-survey-link" style="background:var(--primary); color:white; padding:16px; border-radius:16px; font-weight:800; text-decoration:none; font-family:'Outfit',sans-serif; font-size:1rem; box-shadow:0 10px 20px rgba(39,126,255,0.3); transition:all 0.2s;">Obtener Mi Certificado</a>
         <button id="close-milestone" style="background:rgba(255,255,255,0.05); color:rgba(255,255,255,0.4); border:none; padding:12px; border-radius:12px; cursor:pointer; font-size:0.85rem;">Continuar practicando</button>
      </div>
      
      <div id="save-progress-hint" style="margin-top:24px; padding-top:24px; border-top:1px solid rgba(255,255,255,0.06); display:none;">
          <p style="font-size:0.85rem; opacity:0.6; margin-bottom:8px;">¿Quieres guardar estos logros para siempre?</p>
          <a href="register.html" style="color:var(--primary); font-weight:800; text-decoration:none; font-size:0.9rem;">Crea tu cuenta gratuita aquí</a>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Simple Rating Logic
  const stars = overlay.querySelectorAll('.star-btn');
  stars.forEach(s => {
    s.addEventListener('mouseover', () => {
      const v = parseInt(s.dataset.v);
      stars.forEach((st, idx) => st.style.filter = (idx < v) ? 'grayscale(0)' : 'grayscale(1)');
    });
    s.addEventListener('click', () => {
       const v = s.dataset.v;
       localStorage.setItem('js_survey_rating', v);
       document.getElementById('survey-footer').innerHTML = `
         <div style="background:rgba(0,168,150,0.1); border:1px solid var(--teal); padding:16px; border-radius:16px; color:var(--teal); font-weight:700; margin-bottom:12px;">¡Gracias por tu calificación de ${v}/5 estrellas!</div>
         <a href="https://forms.gle/jsweb_survey" target="_blank" onclick="localStorage.setItem('js_survey_done', 'true');" style="color:white; opacity:0.6; text-decoration:underline; font-size:0.85rem;">¿Deseas darnos más detalles?</a>
         <button onclick="document.getElementById('milestone-overlay').remove()" style="background:var(--primary); color:white; padding:14px; border-radius:14px; font-weight:800; border:none; cursor:pointer; margin-top:10px;">Continuar Navegando</button>
       `;
       document.getElementById('save-progress-hint').style.display = 'block';
    });
  });

  document.getElementById('close-milestone').addEventListener('click', () => {
    localStorage.setItem('js_survey_done', 'true');
    overlay.remove();
  });

  document.getElementById('final-survey-link').addEventListener('click', () => {
    localStorage.setItem('js_survey_done', 'true');
  });
  
  // Confetti!
  if (typeof confetti === 'function') {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  }
}
