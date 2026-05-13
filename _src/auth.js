/**
 * auth.js — Clerk Authentication Wrapper for JóvenesSTEM v6.1.3
 * Provides route protection and Clerk UI mounting helpers.
 * Requires Clerk <script> tags loaded BEFORE this file.
 */

const CLERK_APPEARANCE = {
  variables: {
    colorPrimary: '#277eff',
    fontFamily: "'Inter', 'Outfit', sans-serif",
    borderRadius: '14px',
    colorBackground: '#ffffff',
    colorText: '#0a0a0a',
    colorTextSecondary: '#949494',
    colorInputBackground: '#ffffff',
    colorInputText: '#0a0a0a',
  },
  elements: {
    rootBox:               { width: '100%', display: 'flex', justifyContent: 'center' },
    card:                  { boxShadow: 'none', padding: '0', borderRadius: '0', background: 'transparent' },
    headerTitle:           { fontFamily: "'Outfit', sans-serif", fontWeight: '800', fontSize: '1.6rem', letterSpacing: '-0.03em' },
    headerSubtitle:        { color: '#949494', fontSize: '0.875rem' },
    socialButtonsBlockButton: { borderRadius: '12px', border: '1.5px solid rgba(0,0,0,0.10)', fontWeight: '600' },
    formButtonPrimary:     { backgroundColor: '#277eff', fontFamily: "'Outfit', sans-serif", fontWeight: '700', borderRadius: '14px', fontSize: '0.975rem' },
    formFieldInput:        { borderRadius: '12px', border: '1.5px solid rgba(0,0,0,0.10)', fontSize: '0.95rem' },
    footerActionLink:      { color: '#277eff', fontWeight: '700' },
    identityPreviewEditButton: { color: '#277eff' },
  }
};

const CLERK_APPEARANCE_DARK = {
  variables: {
    colorPrimary: '#277eff',
    fontFamily: "'Inter', 'Outfit', sans-serif",
    borderRadius: '14px',
    colorBackground: 'rgba(255,255,255,0.04)',
    colorText: '#ffffff',
    colorTextSecondary: 'rgba(255,255,255,0.5)',
    colorInputBackground: 'rgba(255,255,255,0.06)',
    colorInputText: '#ffffff',
    colorNeutral: '#ffffff',
  },
  elements: {
    rootBox:               { width: '100%', display: 'flex', justifyContent: 'center' },
    card:                  { boxShadow: 'none', padding: '0', borderRadius: '0', background: 'transparent', border: 'none' },
    headerTitle:           { fontFamily: "'Outfit', sans-serif", fontWeight: '800', fontSize: '2rem', letterSpacing: '-0.03em', color: '#ffffff' },
    headerSubtitle:        { color: 'rgba(255,255,255,0.5)' },
    socialButtonsBlockButton: { borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.12)', color: '#ffffff', background: 'rgba(255,255,255,0.06)' },
    formButtonPrimary:     { backgroundColor: '#277eff', fontFamily: "'Outfit', sans-serif", fontWeight: '700', borderRadius: '14px', fontSize: '1rem' },
    formFieldInput:        { borderRadius: '12px', border: '1.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#ffffff' },
    formFieldLabel:        { color: 'rgba(255,255,255,0.6)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem' },
    footerActionLink:      { color: '#277eff', fontWeight: '700' },
    dividerLine:           { background: 'rgba(255,255,255,0.1)' },
    dividerText:           { color: 'rgba(255,255,255,0.3)' },
    otpCodeFieldInput:     { borderRadius: '10px', border: '1.5px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#ffffff' },
  }
};

// ── Wait for Clerk to be ready ───────────────────────────────
// ── Wait for Clerk to be ready ───────────────────────────────
let clerkLoadingPromise = null;

async function waitForClerk() {
  if (window.Clerk && window.Clerk.loaded) return window.Clerk;
  if (clerkLoadingPromise) return clerkLoadingPromise;

  clerkLoadingPromise = (async () => {
    // 1. Fetch key from worker first
    let publishableKey = null;
    try {
      const res = await fetch('/api/clerk-config');
      const data = await res.json();
      publishableKey = data.publishableKey;
    } catch (err) {
      console.error('[Auth] Failed to fetch Clerk key:', err);
    }

    if (!publishableKey) {
      console.error('[Auth] CRITICAL: No publishable key found. Auth will not work.');
      return null;
    }

    // 2. Dynamically inject Clerk script
    if (!window.Clerk) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = "https://clerk.yepzhi.com/npm/@clerk/clerk-js@latest/dist/clerk.browser.js";
        script.setAttribute('data-clerk-publishable-key', publishableKey);
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    // 3. Wait for Clerk object and initialize
    let checkCount = 0;
    while (!window.Clerk && checkCount < 100) {
      await new Promise(r => setTimeout(r, 50));
      checkCount++;
    }

    if (!window.Clerk.loaded) {
      const loadOptions = {
        localization: {
          socialButtonsBlockButton: "Continuar con {{provider|titleize}}",
          dividerText: "o también",
          formFieldLabel__emailAddress: "Correo electrónico",
          formFieldLabel__password: "Contraseña",
          formFieldLabel__firstName: "Nombre",
          formFieldLabel__lastName: "Apellido",
          formButtonPrimary: "Continuar",
          signIn: {
            start: {
              title: "Iniciar sesión",
              subtitle: "¡Bienvenido de nuevo! Inicia sesión para continuar.",
              actionText: "¿No tienes cuenta?",
              actionLink: "Regístrate"
            }
          },
          signUp: {
            start: {
              title: "Crea tu cuenta",
              subtitle: "¡Bienvenido! Completa los detalles para comenzar.",
              actionText: "¿Ya tienes cuenta?",
              actionLink: "Inicia sesión"
            }
          }
        }
      };

      try {
        await window.Clerk.load({
          ...loadOptions,
          publishableKey: publishableKey
        });
      } catch (err) {
        console.error('[Auth] Error initializing Clerk:', err);
      }
    }

    return window.Clerk;
  })();

  return clerkLoadingPromise;
}
window.waitForClerk = waitForClerk;

// ── Route Protection ─────────────────────────────────────────
// Call on protected pages — redirects to login if no session.
window.requireAuth = async function() {
  try {
    const clerk = await waitForClerk();
    if (!clerk?.user) {
      const returnTo = encodeURIComponent(window.location.href);
      window.location.replace(`login.html?return=${returnTo}`);
      return null;
    }
    return clerk.user;
  } catch (err) {
    console.error('[Auth] Error in requireAuth:', err);
    return null;
  }
};

// ── Update global nav based on auth state ───────────────────
window.syncClerkNav = async function() {
  try {
    const clerk = await waitForClerk();
    const navLinks = document.querySelector('.nav-links');
    if (!clerk?.user || !navLinks) return;

    const u = clerk.user;
    const initials = (u.firstName?.[0] || u.emailAddresses?.[0]?.emailAddress?.[0] || 'U').toUpperCase();

    // Replace the "Ingresar" button area with UserButton + user orb
    const existing = navLinks.querySelector('#clerk-user-btn');
    if (!existing) {
      const container = document.createElement('div');
      container.id = 'clerk-user-btn';
      container.style.cssText = 'display:flex;align-items:center;gap:12px;flex-shrink:0;';
      navLinks.innerHTML = `
        <a href="/jsweb/dashboard" class="nav-link">Dashboard</a>
        <a href="/jsweb/modules" class="nav-link">Explorar</a>
      `;
      // Spacer to push UserButton to the far right
      const spacer = document.createElement('div');
      spacer.style.cssText = 'flex:1;';
      navLinks.appendChild(spacer);
      navLinks.appendChild(container);
      clerk.mountUserButton(container, {
        afterSignOutUrl: '/jsweb',
        appearance: CLERK_APPEARANCE,
      });
    }
  } catch (err) {
    console.error('[Auth] Error in syncClerkNav:', err);
  }
};

// ── Mount Sign-In (Light Theme — login.html) ─────────────────
window.mountClerkSignIn = async function(containerId = 'clerk-sign-in', dark = false) {
  try {
    const clerk = await waitForClerk();
    if (clerk?.user) { window.location.replace('dashboard.html'); return; }
    const el = document.getElementById(containerId);
    if (!el) return;
    
    // Ensure container is empty before mounting
    el.innerHTML = '';
    
    clerk.mountSignIn(el, {
      appearance: dark ? CLERK_APPEARANCE_DARK : CLERK_APPEARANCE,
      afterSignInUrl: '/jsweb/dashboard',
      afterSignUpUrl: '/jsweb/dashboard',
      signUpUrl: '/jsweb/register',
    });
  } catch (err) {
    console.error('[Auth] Error mounting Sign-In:', err);
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = '<div style="padding:20px; text-align:center; color:#ef4444; font-weight:600;">Error al cargar el inicio de sesión. Por favor, intenta refrescar la página.</div>';
  }
};

// ── Mount Sign-Up (Dark Theme — register.html) ───────────────
window.mountClerkSignUp = async function(containerId = 'clerk-sign-up', dark = false) {
  try {
    const clerk = await waitForClerk();
    if (clerk?.user) { window.location.replace('dashboard.html'); return; }
    const el = document.getElementById(containerId);
    if (!el) return;
    
    el.innerHTML = '';
    
    clerk.mountSignUp(el, {
      appearance: dark ? CLERK_APPEARANCE_DARK : CLERK_APPEARANCE,
      afterSignUpUrl: '/jsweb/dashboard',
      afterSignInUrl: '/jsweb/dashboard',
      signInUrl: '/jsweb/login',
    });
  } catch (err) {
    console.error('[Auth] Error mounting Sign-Up:', err);
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = '<div style="padding:20px; text-align:center; color:#ef4444; font-weight:600;">Error al cargar el registro. Por favor, intenta refrescar la página.</div>';
  }
};

// ── Get current user (sync helper) ──────────────────────────
window.getClerkUser = function() {
  return window.Clerk?.user || null;
};

// ── Sign out ─────────────────────────────────────────────────
window.clerkSignOut = async function() {
  const clerk = await waitForClerk();
  await clerk.signOut();
  window.location.replace('/jsweb');
};

// ── Auto-init ────────────────────────────────────────────────
window.addEventListener('load', async () => {
  await window.syncClerkNav();
});
