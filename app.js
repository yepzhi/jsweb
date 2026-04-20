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
    <div class="global-footer">
      <div class="footer-container">
        <div class="footer-brand">
          <span class="logo-text">JóvenesSTEM<em>®</em></span>
          <p class="footer-tagline">Hacia la independencia tecnológica de México.</p>
        </div>
        
        <div class="footer-meta">
          <p class="copyright">&copy; ${year} Neosys Aeon. Todos los derechos reservados.</p>
          <span class="footer-version">v4.2.1 • Production Ready</span>
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
