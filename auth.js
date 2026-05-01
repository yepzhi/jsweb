/**
 * auth.js — Clerk Authentication Wrapper for JóvenesSTEM v5.0
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
    rootBox:               { width: '100%' },
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
    rootBox:               { width: '100%' },
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
async function waitForClerk() {
  await new Promise(resolve => {
    const check = () => (window.Clerk ? resolve() : setTimeout(check, 40));
    check();
  });
  if (!window.__clerkLoaded) {
    await window.Clerk.load({
      ui: { ClerkUI: window.__internal_ClerkUICtor }
    });
    window.__clerkLoaded = true;
  }
  return window.Clerk;
}

// ── Route Protection ─────────────────────────────────────────
// Call on protected pages — redirects to login if no session.
window.requireAuth = async function() {
  const clerk = await waitForClerk();
  if (!clerk.user) {
    const returnTo = encodeURIComponent(window.location.href);
    window.location.replace(`/jsweb/login?return=${returnTo}`);
    return null;
  }
  return clerk.user;
};

// ── Update global nav based on auth state ───────────────────
window.syncClerkNav = async function() {
  const clerk = await waitForClerk();
  const navLinks = document.querySelector('.nav-links');
  if (!clerk.user || !navLinks) return;

  const u = clerk.user;
  const initials = (u.firstName?.[0] || u.emailAddresses?.[0]?.emailAddress?.[0] || 'U').toUpperCase();

  // Replace the "Ingresar" button area with UserButton + user orb
  const existing = navLinks.querySelector('#clerk-user-btn');
  if (!existing) {
    const container = document.createElement('div');
    container.id = 'clerk-user-btn';
    container.style.cssText = 'display:flex;align-items:center;gap:12px;';
    navLinks.innerHTML = `
      <a href="/jsweb/modules" class="nav-link">Explorar</a>
      <a href="/jsweb/dashboard" class="nav-link">Dashboard</a>
    `;
    navLinks.appendChild(container);
    clerk.mountUserButton(container, {
      afterSignOutUrl: '/jsweb/',
      appearance: CLERK_APPEARANCE,
    });
  }
};

// ── Mount Sign-In (Light Theme — login.html) ─────────────────
window.mountClerkSignIn = async function(containerId = 'clerk-sign-in', dark = false) {
  const clerk = await waitForClerk();
  // If already signed in → go to dashboard
  if (clerk.user) { window.location.replace('/jsweb/dashboard'); return; }
  const el = document.getElementById(containerId);
  if (!el) return;
  clerk.mountSignIn(el, {
    appearance: dark ? CLERK_APPEARANCE_DARK : CLERK_APPEARANCE,
    afterSignInUrl: '/jsweb/dashboard',
    signUpUrl: '/jsweb/register',
  });
};

// ── Mount Sign-Up (Dark Theme — register.html) ───────────────
window.mountClerkSignUp = async function(containerId = 'clerk-sign-up', dark = false) {
  const clerk = await waitForClerk();
  if (clerk.user) { window.location.replace('/jsweb/dashboard'); return; }
  const el = document.getElementById(containerId);
  if (!el) return;
  clerk.mountSignUp(el, {
    appearance: dark ? CLERK_APPEARANCE_DARK : CLERK_APPEARANCE,
    afterSignUpUrl: '/jsweb/dashboard',
    signInUrl: '/jsweb/login',
  });
};

// ── Get current user (sync helper) ──────────────────────────
window.getClerkUser = function() {
  return window.Clerk?.user || null;
};

// ── Sign out ─────────────────────────────────────────────────
window.clerkSignOut = async function() {
  const clerk = await waitForClerk();
  await clerk.signOut();
  window.location.replace('/jsweb/');
};

console.log('[JóvenesSTEM] auth.js loaded ✓');
