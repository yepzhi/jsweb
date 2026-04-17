/**
 * tutor.js - StemBot AI Vanilla Integration
 */

// ⚠️ PON TU CLAVE DE GEMINI AQUÍ PARA PRUEBAS (En producción usa Cloudflare Worker)
const GEMINI_API_KEY = 'TU_API_KEY_DE_GEMINI_AQUI'; 

const SYSTEM_PROMPT = `
Eres StemBot, el tutor personal de JóvenesSTEM, creado por Alberto Yépiz.

MISIÓN:
Guiar a estudiantes mexicanos de 6-18 años a través del conocimiento
STEM del BlueBook v1 usando el método socrático. Tu objetivo no es
dar respuestas — es hacer que el alumno las descubra.

PERSONALIDAD:
- Entusiasta y curioso.
- Paciente — nunca te frustras con errores.
- Celebras cada descubrimiento genuinamente.
- Usas analogías con tecnología moderna (videojuegos, YouTube, Roblox).
- Hablas en español mexicano natural.

MÉTODO SOCRÁTICO — TU REGLA DE ORO:
NUNCA des la respuesta directamente. Siempre guía con preguntas hacia el descubrimiento.

ESTRUCTURA DE RESPUESTA:
1. Reconoce lo que dijo el alumno brevemente.
2. Haz UNA pregunta para profundizar o guiar.
3. Máximo 2-3 oraciones totales.

EVALUACIÓN INFERENCIAL (ESTRICTO):
Debes evaluar silenciosamente la comprensión del alumno basada en sus respuestas.
1. Cuando el alumno demuestre una comprensión superior al 80% sobre el tema, DEBES incluir OBLIGATORIAMENTE la etiqueta estricta "[APTO_PARA_AVANZAR]" al final de tu respuesta.
2. Si el alumno está muy perdido, dice no saber nada, o su comprensión es menor al 80% de forma persistente, OBLIGATORIAMENTE agrega al final de tu respuesta la etiqueta "[REPASAR_LECTURA]".
`.trim();

document.addEventListener('DOMContentLoaded', async () => {
  if (!document.getElementById('chat-messages')) return;
  renderNavbar(); // from app.js

  const urlParams = new URLSearchParams(window.location.search);
  const moduleId = urlParams.get('id');
  const titleEl = document.getElementById('module-title');
  const chatEl = document.getElementById('chat-messages');
  const avatar = document.getElementById('bot-avatar');
  
  const titleElLarge = document.getElementById('module-title-large');
  const contentEl = document.getElementById('module-content');
  const keypointsEl = document.getElementById('module-keypoints');
  const loadingReader = document.getElementById('loading-reader');
  const articleWrapper = document.getElementById('article-content');
  const alignmentFooter = document.getElementById('alignment-footer');
  
  const textInput = document.getElementById('text-input');
  const sendBtn = document.getElementById('send-btn');
  const micBtn = document.getElementById('mic-btn');
  const nextBtn = document.getElementById('next-module-btn');
  const controls = document.getElementById('input-controls');

  let history = [];
  let isRecording = false;

  // Load Module Data
  const data = await loadModules();
  let currentModule = null;
  data.chapters.forEach(ch => {
    const found = ch.modules.find(m => m.id === moduleId);
    if(found) currentModule = found;
  });

  if (currentModule) {
    if (titleElLarge) titleElLarge.textContent = `${currentModule.id} ${currentModule.title}`;
    
    // Support HTML and priority for fullText in the reader pane
    const rawContent = currentModule.fullText || currentModule.content || 'Sin contenido de lectura.';
    
    let mainBody = rawContent.split('---')[0]
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('\n\n')
      .map(p => p.trim() ? `<p style="margin-bottom:1.2rem;">${p.replace(/\n/g, '<br>')}</p>` : '')
      .join('');

    const footerRaw = rawContent.includes('---') ? rawContent.split('---')[1] : '';
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
              <div style="font-size:0.8rem;"><span class="standard-label">${label}</span> ${content}</div>
            </div>
          `;
        }
      });
      footerHtml += `</div>`;
    }
      
    if (contentEl) {
      contentEl.innerHTML = mainBody + footerHtml;
      contentEl.style.whiteSpace = 'normal'; // Allow HTML layout
    }

    if (keypointsEl && currentModule.keyPoints) {
      // Remove bullets and clean up list
      keypointsEl.style.listStyle = 'none';
      keypointsEl.style.paddingLeft = '0';
      keypointsEl.innerHTML = currentModule.keyPoints.join(', ');
      const botStandards = document.getElementById('bot-standards');
      if(botStandards) botStandards.style.display = 'block';
    }

    if (loadingReader) loadingReader.style.display = 'none';
    if (articleWrapper) articleWrapper.style.display = 'block';

    // Activate reader mode button if module has fullText
    const readerModeBtn = document.getElementById('reader-mode-btn');
    if (currentModule.fullText && readerModeBtn) {
      readerModeBtn.style.display = 'flex';
      readerModeBtn.addEventListener('click', () => {
        if (typeof openReader === 'function') {
          openReader(currentModule, window.location.href);
        }
      });
    }

  } else {
    if (titleElLarge) titleElLarge.textContent = 'Módulo no encontrado';
    if (loadingReader) loadingReader.textContent = 'Error al cargar módulo.';
    addMessage('bot', 'Hubo un problema cargando este módulo.');
  }

  // --- Pedagogical Lock Logic ---
  const readyBtn = document.getElementById('ready-btn');
  const chatOverlay = document.getElementById('chat-overlay');
  const reReadBtn = document.getElementById('re-read-btn');
  
  if (readyBtn && chatOverlay) {
    readyBtn.addEventListener('click', () => {
      if (contentEl) contentEl.classList.add('text-blurred');
      if (alignmentFooter) alignmentFooter.classList.add('text-blurred');
      readyBtn.style.display = 'none';
      chatOverlay.style.display = 'none';
      if (reReadBtn) reReadBtn.style.display = 'block';
      
      if (currentModule) {
        addMessage('bot', `¡Genial! Has terminado tu lectura sobre ${currentModule.title}. Ahora dime con tus propias palabras en el Tutor AI, ¿qué te pareció lo más interesante de este tema? Trata de definir cada uno de los conceptos evaluados para que el bot analice tu comprensión y puedas continuar.`);
      }
    });
  }

  if (reReadBtn) {
    reReadBtn.addEventListener('click', () => {
      // Re-lock the chatbot and unlock reading
      if (contentEl) contentEl.classList.remove('text-blurred');
      if (alignmentFooter) alignmentFooter.classList.remove('text-blurred');
      readyBtn.style.display = 'flex';
      chatOverlay.style.display = 'flex';
      reReadBtn.style.display = 'none';
    });
  }

  // UI Helpers
  function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = `msg msg-${role} fade-in`;
    div.textContent = text;
    chatEl.appendChild(div);
    chatEl.scrollTop = chatEl.scrollHeight;
  }

  function setAvatarState(state) {
    avatar.className = 'avatar';
    if(state !== 'idle') avatar.classList.add(state);
    
    // We keep the SVG, just change the state class string for CSS animation
    if (state === 'celebrating') {
      avatar.innerHTML = `<svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.5" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
      avatar.style.color = "var(--warning)";
      avatar.style.borderColor = "var(--warning)";
    } else {
      // Normal Bot SVG
      avatar.innerHTML = `<svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="1.5" fill="none" class="${state === 'speaking' ? 'pulse' : ''}"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16" stroke-width="3"></line><line x1="16" y1="16" x2="16.01" y2="16" stroke-width="3"></line></svg>`;
      avatar.style.color = "";
      avatar.style.borderColor = "";
    }
  }

  // Web Speech API
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = 'es-MX';
    recognition.interimResults = false;
    
    recognition.onstart = () => {
      isRecording = true;
      micBtn.classList.add('active');
      textInput.placeholder = 'Escuchando...';
    };
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      textInput.value = transcript;
    };
    
    recognition.onend = () => {
      isRecording = false;
      micBtn.classList.remove('active');
      textInput.placeholder = 'Escribe tu respuesta aquí...';
      if(textInput.value) processUserInput();
    };
  } else {
    micBtn.style.display = 'none'; // hide microphone if unsupported
  }

  micBtn.addEventListener('click', () => {
    if (isRecording) {
      recognition.stop();
    } else {
      if(recognition) recognition.start();
    }
  });

  // Handle Text Submit
  sendBtn.addEventListener('click', () => {
    if(textInput.value) processUserInput();
  });
  textInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter' && textInput.value) processUserInput();
  });

  // LLM Logic
  async function processUserInput() {
    const text = textInput.value.trim();
    if (!text) return;

    addMessage('user', text);
    textInput.value = '';
    
    // Format history for Gemini API
    history.push({ role: 'user', parts: [{ text }] });
    
    setAvatarState('thinking');

    try {
      if (GEMINI_API_KEY === 'TU_API_KEY_DE_GEMINI_AQUI') {
        throw new Error('No hay API Key configurada. Ponla en tutor.js en la línea 6.');
      }

      const payload = {
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: history,
        generationConfig: { temperature: 0.85, maxOutputTokens: 300 }
      };

      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if(data.error) throw new Error(data.error.message);

      let responseText = data.candidates[0].content.parts[0].text;
      
      // Update history
      history.push({ role: 'model', parts: [{ text: responseText }] });
      
      // Check evaluation tag for Success
      if (responseText.includes('[APTO_PARA_AVANZAR]')) {
        responseText = responseText.replace(/\[APTO_PARA_AVANZAR\]/g, '').trim();
        controls.style.display = 'none';
        nextBtn.style.display = 'block';
        reReadBtn.style.display = 'none';
        setAvatarState('celebrating');
        
        // --- Celebration Ceremony ---
        celebrateSuccess();
        
        // Unlock next module in global progress
        if (typeof unlockNext === 'function') {
          unlockNext(moduleId);
        }
      } 
      // Check evaluation tag for Failure
      else if (responseText.includes('[REPASAR_LECTURA]')) {
        responseText = responseText.replace(/\[REPASAR_LECTURA\]/g, '').trim();
        reReadBtn.style.display = 'block';
        setAvatarState('speaking');
      }
      else {
        setAvatarState('speaking');
      }

      addMessage('bot', responseText);
      speakText(responseText);

    } catch (err) {
      console.error(err);
      addMessage('bot', `Error de conexión: ${err.message}`);
      setAvatarState('idle');
    }
  }

  function speakText(text) {
    if (!window.speechSynthesis) {
      setTimeout(() => setAvatarState('idle'), 2000);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-MX';
    utter.onend = () => {
      // Don't override celebration
      if (avatar.textContent !== '🎉') setAvatarState('idle');
    };
    window.speechSynthesis.speak(utter);
  }

  function celebrateSuccess() {
    // 1. Confetti
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#277eff', '#00a896', '#f59e0b', '#ffffff']
      });
    }

    // 2. Play Sound
    const sound = document.getElementById('success-sound');
    if (sound) {
      sound.volume = 0.4;
      sound.play().catch(e => console.log("Audio block:", e));
    }

    // 3. Add XP
    if (typeof addXP === 'function') {
      addXP(100);
    }
    
    // 4. Visual Feedback in Chat
    const msg = document.createElement('div');
    msg.className = 'msg msg-bot fade-in font-bold text-center';
    msg.style.background = 'rgba(245, 158, 11, 0.1)';
    msg.style.borderColor = 'var(--warning)';
    msg.innerHTML = `🏆 ¡MAESTRÍA ALCANZADA! +100 XP <br><span class="text-[10px] opacity-60">Has demostrado dominio total de los estándares.</span>`;
    chatEl.appendChild(msg);
    chatEl.scrollTop = chatEl.scrollHeight;
  }

});
