/**
 * firebase-config.example.js — Template for local development
 *
 * INSTRUCTIONS:
 * 1. Copy this file and rename it to: firebase-config.js
 * 2. Fill in your real values from Firebase Console →
 *    Project Settings → Your apps → Web app
 * 3. firebase-config.js is in .gitignore and will NOT be committed.
 *
 * In PRODUCTION: values are served via Cloudflare Worker /api/firebase-config
 * from Worker Environment Variables — never exposed in git.
 */

export const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project",
  storageBucket:     "your-project.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
  measurementId:     "G-XXXXXXXXXX", // optional
};
