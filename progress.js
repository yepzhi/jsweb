/**
 * progress.js — Firestore Progress Sync for JóvenesSTEM v5.0
 *
 * Uses Clerk userId as Firestore document key.
 * Auth is handled entirely by Clerk — Firestore rules allow read/write.
 * Optimistic UI: localStorage updates instantly, Firestore syncs async.
 *
 * Exposes globally:
 *   window.loadProgress()         → Promise<userData|null>
 *   window.saveModuleComplete(id) → Promise<void>
 *   window.addXPCloud(amount)     → Promise<void>
 *   window.checkCertificate()     → Promise<bool>
 *   window.progressReady          → bool
 */

import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc,
  arrayUnion, increment
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

import { firebaseConfig } from './firebase-config.js';

// Init Firebase (avoid double-init if app already loaded)
const _app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApps()[0];

const db = getFirestore(_app);

// Signal that progress module is ready
window.progressReady = false;

// ── Helpers ──────────────────────────────────────────────────

function getClerkUserId() {
  return window.Clerk?.user?.id || null;
}

function getClerkUserMeta() {
  const u = window.Clerk?.user;
  if (!u) return {};
  return {
    name: u.firstName || u.emailAddresses?.[0]?.emailAddress?.split('@')[0] || 'Estudiante',
    email: u.emailAddresses?.[0]?.emailAddress || '',
  };
}

async function ensureUserDoc(userId) {
  const ref = doc(db, 'users', userId);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    const meta = getClerkUserMeta();
    const initData = {
      ...meta,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      xp: 0,
      completedModules: [],
      rank: 'ASPIRANTE STEM',
      hasCertificate: false,
      stripePaymentId: null,
    };
    await setDoc(ref, initData);
    console.log('[Progress] New user document created in Firestore ✓');
    return initData;
  }

  return snap.data();
}

// ── Public API ────────────────────────────────────────────────

/**
 * loadProgress() — Load user's Firestore data and sync to localStorage.
 * Call this at the start of dashboard render.
 */
window.loadProgress = async function () {
  const userId = getClerkUserId();
  if (!userId) return null;

  try {
    const data = await ensureUserDoc(userId);

    // Sync to localStorage as fast-access cache
    localStorage.setItem('js_completed_modules', JSON.stringify(data.completedModules || []));
    localStorage.setItem('jstem_profile', JSON.stringify({
      name: data.name || getClerkUserMeta().name,
      email: data.email || getClerkUserMeta().email,
      xp: data.xp || 0,
      hasCertificate: data.hasCertificate || false,
    }));

    console.log(`[Progress] Loaded from Firestore — ${(data.completedModules || []).length} modules, ${data.xp || 0} XP`);
    return data;
  } catch (err) {
    console.warn('[Progress] Firestore unavailable, using localStorage fallback:', err.message);
    return null;
  }
};

/**
 * saveModuleComplete(moduleId) — Mark a module as completed.
 * Updates localStorage immediately, syncs to Firestore async.
 */
window.saveModuleComplete = async function (moduleId) {
  // Optimistic localStorage update
  const local = JSON.parse(localStorage.getItem('js_completed_modules') || '[]');
  if (!local.includes(moduleId)) {
    local.push(moduleId);
    localStorage.setItem('js_completed_modules', JSON.stringify(local));
  }

  const userId = getClerkUserId();
  if (!userId) return;

  try {
    const ref = doc(db, 'users', userId);
    await updateDoc(ref, {
      completedModules: arrayUnion(moduleId),
      lastActive: new Date().toISOString(),
    });
    console.log(`[Progress] Module ${moduleId} saved to Firestore ✓`);
  } catch (err) {
    console.warn('[Progress] Could not save module to Firestore:', err.message);
  }
};

/**
 * addXPCloud(amount) — Add XP points.
 * Updates localStorage immediately, syncs to Firestore async.
 */
window.addXPCloud = async function (amount) {
  // Optimistic localStorage update
  const profile = JSON.parse(localStorage.getItem('jstem_profile') || '{}');
  profile.xp = (profile.xp || 0) + amount;
  localStorage.setItem('jstem_profile', JSON.stringify(profile));

  const userId = getClerkUserId();
  if (!userId) return;

  try {
    const ref = doc(db, 'users', userId);
    await updateDoc(ref, {
      xp: increment(amount),
      lastActive: new Date().toISOString(),
    });
    console.log(`[Progress] +${amount} XP synced to Firestore ✓`);
  } catch (err) {
    console.warn('[Progress] Could not sync XP:', err.message);
  }
};

/**
 * checkCertificate() — Check if user has paid for certificate.
 */
window.checkCertificate = async function () {
  const userId = getClerkUserId();
  if (!userId) return false;

  try {
    const ref = doc(db, 'users', userId);
    const snap = await getDoc(ref);
    return snap.exists() && snap.data().hasCertificate === true;
  } catch {
    return false;
  }
};

// Mark progress module as ready
window.progressReady = true;
window.dispatchEvent(new CustomEvent('progressReady'));

console.log('[JóvenesSTEM] progress.js loaded ✓');
