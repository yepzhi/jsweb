# Technical Specifications: JóvenesSTEM Platform
**Version:** v4.2.0 (Vanilla / Edge Architecture)  
**Author:** Alberto Yépiz  
**Date:** April 2026  

## 1. Executive Summary
JóvenesSTEM is an educational platform designed to provide a diagnostic and Socratic tutoring experience for Mexican youth (6-18 years old), aligned with NGSS and RENAC EC009 standards. Following the v4.2.0 pivot, the platform discards heavy compilation frameworks in favor of a pure, stateless Vanilla architecture for maximum performance and explicit developer control.

## 2. Technology Stack & Rationale
The platform operates entirely at the edge without a Node.js runtime.
- **Frontend Core:** Vanilla HTML5, CSS3, ES6 JavaScript.
- **Styling:** In-house "Vanilla Design System" built directly into `styles.css`. Electric Blue (`#277eff`) acts as the primary accent. Component styles (like glassmorphism) are hardcoded for zero-build-time latency.
- **Authentication & Database (Future MVP):** Firebase (Auth + Firestore). This offers immediate real-time synching without the overhead of Postgres setup.
- **Edge Routing & Proxy:** Cloudflare Pages & Cloudflare Worker (`cloudflare_worker.js`). Handles extensionless URLs (dropping `.html`) and routing rules.
- **AI Integration. (StemBot):** Google Gemini (3 Flash / Pro) accessed via REST `fetch()` calls from the client-side (`tutor.js`), or eventually proxied through a Cloudflare Worker for edge-level security.

## 3. Directory Structure
```
/
├── .github/          # GitHub Actions (if any)
├── cloudflare_worker.js # Edge Routing Rules
├── firebase-config.js   # Firebase environment setup
├── app.js               # Global UI logic and Data loading
├── styles.css           # Global Design System
├── tutor.js             # StemBot Engine (Gemini API & Web Speech)
├── data/
│   └── modules.json     # Content source of truth for the 3 Chapters
├── images/              # Assets
└── *.html               # Main Views (dashboard, modules, tutor, home)
```

## 4. Key Modules & Features (MVP)
### 4.1. Modules Playlist (`modules.html`)
- Parses `data/modules.json` to organize 7 available modules across 3 chapters.
- Uses `"in_development": true` configuration to gate access and visually lock future content.

### 4.2. StemBot Socratic Tutor (`tutor.html` & `tutor.js`)
- **Speech UI:** Integrates `window.SpeechRecognition` and `window.speechSynthesis` natively.
- **Socratic Engine:** Instructs the Gemini model to *never* give direct answers but use leading questions.
- **Inferential Grading:** Includes strict logic where the bot evaluates student understanding. Once it calculates >80% mastery, the LLM emits a hidden `[APTO_PARA_AVANZAR]` tag which the client intercepts to unlock the next module.

## 5. Deployment Strategy
- Local Development: Direct file access, VS Code Live Server, or `python -m http.server 8000`.
- Production: Push to `main` -> GitHub Pages -> Cloudflare Edge Proxy handles cache and custom domains (`yepzhi.com`).
