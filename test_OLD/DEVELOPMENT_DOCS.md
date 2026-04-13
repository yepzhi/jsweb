# SIIP NextGEN STEM Diagnostic Test - Development Documentation

This document serves as a comprehensive reference for the implementation, rules, and logic of the STEM Diagnostic Test project. It is designed to provide context for future AI agents or developers analyzing this codebase.

## 📌 Project Overview
- **Goal**: A premium, interactive STEM diagnostic test with **exactly 100 questions**.
- **Standard**: Based on PISA 2025 "Scientific Literacy" framework.
- **Project Root**: `/Users/yepz/entrytest`
- **Target Audience**: Students in STEM preparatory programs.

## 🛠️ Technical Stack
- **Frontend**: Vanilla HTML5, CSS3 (Glassmorphism design), and JavaScript (ES Modules).
- **Backend (Database)**: Firebase Firestore (Compat SDK) for storing survey data and test results.
- **Admin**: Discreet access via a hidden dot button with password protection.
- **Deployment**: Automatic push to GitHub (`yepzhi/entrytest`).

## 📜 Development History & Request Log
Below is the chronological history of requirements requested by the user during development:

1.  **Survey Enhancement**: Added specific family-related STEM questions:
    -   "¿Tus papas te hablan de tecnologia de vez en cuando o de ciencias?"
    -   "¿Hay ingenieros o cientificos en la familia?"
    -   "¿Sientes admiracion por ellos?"
2.  **Admin Panel**:
    -   Discreet access button with password: `JStem14`.
    -   Visual list of massive results with score per category and student name.
    -   Export functionality to **Excel**.
    -   Cloud integration via **Firebase**.
3.  **UI/UX Fixes**:
    -   Persistent language selector (ES, EN, CN).
    -   Resolved "Infinite Loading Loop" caused by recursive logo errors.
    -   Fixed scrolling issues on the student profile survey.
    -   Fixed "Begin Test" button and state clearing.
4.  **Security & Anti-Cheat**:
    -   **Exactly 100 Questions**: Expanded from 80 to exactly 100 to cover more depth in AI, Coding, and Engineering.
    -   **Per-Question Timer**: 30-second limit per question to deter external AI assistance.
    -   **Question Shuffling**: Random order for every new attempt.
5.  **Folio & Resumption (v1.5)**:
    -   Generation of a unique tracking Folio (**`JSTEM-XXXXX`**).
    -   **Resume with Folio**: Users can resume a test if interrupted by entering their Folio ID.
    -   **Firebase Progress Sync**: State (answers, indices, time) is saved to Firestore after every question transition.
    -   **Spanish Default**: Hardcoded Spanish as the default language.
    -   **Confirmation Screen**: Displays the folio and a simulated email confirmation.

## ⚙️ Core Logic & Implementation Rules

### 1. Question Bank (`questions.js`)
- **Capacity**: Must always maintain **100 questions**. 
- **Structure**: Objects with `category`, `question`, `options` (array), `answer` (index), and `points`.
- **Shuffling**: `state.shuffledQuestions` is generated at the start of chaque session via the Fisher-Yates algorithm.

### 2. Authentication & Admin (`admin.html`)
- **Admin Access**: Bottom-right dot button (`.admin-dot-btn`).
- **Session Auth**: Stores `adminAuth: 'true'` in `sessionStorage` after successful login.

### 3. Timing Mechanism
- **Total Time**: `state.secondsElapsed` increments every second globally.
- **Question Timer**: `state.questionSecondsRemaining` starts at 30 for each question.
- **Timeout Logic**: At zero, the response is marked as `-1` (timeout) and `showNext()` is triggered automatically.

### 4. Internationalization (`translations.js`)
- **Mapping**: The `categoryMap` in `main.js` translates raw categories from `questions.js` into i18n keys for UI display.
- **UI Elements**: All translatable elements use the `data-i18n` attribute.

### 5. Data Schema (Firebase)
- **Collection**: `results`
- **Document ID**: Folio ID (`JSTEM-XXXXX`).
- **Fields**: `email`, `survey` (object), `currentQuestionIndex`, `answers` (array of indices), `shuffledIndices`, `secondsElapsed`, `status` (`'in-progress'` or `'completed'`), `score`, `timestamp`.

---
*Created on 2026-03-15 by Antigravity AI for yepzhi.*
