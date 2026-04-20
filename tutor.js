import { TTSManager } from './tts.js?v=3';
/**
 * tutor.js - StemBot AI Vanilla Integration
 * Uses window globals from app.js to avoid caching issues.
 */

// ⚠️ SEGURIDAD: La API KEY ahora se maneja en el Cloudflare Worker (env.GEMINI_API_KEY)
// El frontend solo llama al endpoint local /api/tutor

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
  
  // Use window globals for maximum reliability in dev
  const injectGlobalNav = window.injectGlobalNav;
  const fetchModules = window.fetchModules;

  if (typeof injectGlobalNav === 'function') injectGlobalNav();

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

  const tts = new TTSManager();
  const ttsPlay = document.getElementById('tts-play');
  const ttsPause = document.getElementById('tts-pause');
  const ttsStop = document.getElementById('tts-stop');
  const ttsMsg = document.getElementById('tts-msg');

  let history = [];
  let isRecording = false;

  // Load Module Data
  if (typeof fetchModules !== 'function') {
    console.error('Critical: fetchModules is not available.');
    return;
  }
  const data = await fetchModules();
  let currentModule = null;
  data.chapters.forEach(ch => {
    const found = ch.modules.find(m => String(m.id) === String(moduleId));
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

    const rawReadingText = currentModule.fullText || currentModule.content || '';
    const readingText = rawReadingText.split('---')[0];

    // --- HIGHLIGHTING HELPERS ---
    const highlightToggle = document.getElementById('tts-highlight-toggle');
    let wordsSpans = [];

    function prepareHighlighting() {
      if (!contentEl || wordsSpans.length > 0) return;
      
      contentEl.innerHTML = mainBody;
      let wordIndex = 0;
      
      function traverse(node) {
        if (node.nodeType === 3) {
           const text = node.nodeValue;
           // Split while keeping delimiters (spaces)
           const parts = text.split(/(\s+)/);
           if (parts.length === 1 && !parts[0].trim()) return; 
           
           const fragment = document.createDocumentFragment();
           for (let i = 0; i < parts.length; i++) {
              let part = parts[i];
              if (part.trim().length > 0) {
                 // It is a word. Check if next part is whitespace to include it.
                 let nextPart = (i + 1 < parts.length && parts[i+1].trim().length === 0) ? parts[i+1] : '';
                 const span = document.createElement('span');
                 span.className = 'word-span';
                 span.id = `word-${wordIndex++}`;
                 span.textContent = part + nextPart;
                 span.onclick = (e) => {
                   e.stopPropagation();
                   const idx = parseInt(span.id.replace('word-', ''));
                   tts.seekToWord(idx, readingText);
                 };
                 fragment.appendChild(span);
                 if (nextPart) i++; // Skip the whitespace we just consumed
              } else {
                 // It is leading whitespace (no word before it in this node)
                 fragment.appendChild(document.createTextNode(part));
              }
           }
           node.parentNode.replaceChild(fragment, node);
        } else if (node.nodeType === 1) {
           Array.from(node.childNodes).forEach(traverse);
        }
      }
      
      Array.from(contentEl.childNodes).forEach(traverse);
      
      // Re-append footer unhighlighted
      const footerContainer = document.createElement('div');
      footerContainer.innerHTML = footerHtml;
      contentEl.appendChild(footerContainer);
      
      wordsSpans = contentEl.querySelectorAll('.word-span');
    }

    function clearHighlighting() {
      if (!contentEl) return;
      contentEl.innerHTML = mainBody + footerHtml;
      wordsSpans = [];
    }

    if (highlightToggle) {
      highlightToggle.addEventListener('change', () => {
        if (highlightToggle.checked) prepareHighlighting();
        else clearHighlighting();
      });
    }

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

    // --- TTS Handlers ---
    if (ttsPlay && currentModule) {
      tts.onStateChange = (state) => {
        const toolbar = document.getElementById('tts-toolbar');
        if (state === 'playing' || state === 'playing-neural') {
          ttsPlay.style.display = 'none';
          ttsPause.style.display = 'flex';
          ttsMsg.textContent = state === 'playing-neural' ? 'VOZ NEURONAL ACTIVA' : 'REPRODUCIENDO...';
          ttsMsg.parentElement.style.color = 'var(--primary)';
          if (state === 'playing-neural' && toolbar) toolbar.classList.add('neural-active');
          
          if (highlightToggle.checked) prepareHighlighting();
        } else if (state === 'neural-ready') {
          if (toolbar) toolbar.classList.add('neural-active');
          const badge = document.getElementById('neural-badge');
          if (badge) badge.style.display = 'inline-flex';
          const notice = document.getElementById('data-notice');
          if (notice) notice.style.display = 'none'; 
          ttsMsg.textContent = 'MOTOR NEURONAL LISTO';
        } else if (state === 'loading-neural') {
          ttsMsg.textContent = 'PREPARANDO MOTOR (25MB)...';
          ttsMsg.parentElement.style.color = 'var(--warning)';
        } else if (state === 'neural-error') {
          ttsMsg.textContent = 'ERROR RED/MEMORIA (VOZ LOCAL)';
          ttsMsg.parentElement.style.color = '#ef4444';
          const formatNotice = document.getElementById('data-notice');
          if (formatNotice) { formatNotice.style.display = 'inline'; formatNotice.textContent = 'Fallo Motor HD'; formatNotice.style.color = '#ef4444'; }
        } else if (state === 'paused') {
          ttsPlay.style.display = 'flex';
          ttsPause.style.display = 'none';
          ttsMsg.textContent = 'PAUSADO';
        } else {
          ttsPlay.style.display = 'flex';
          ttsPause.style.display = 'none';
          ttsMsg.textContent = 'LECTURA DISPONIBLE';
          ttsMsg.parentElement.style.color = '';
          clearHighlighting();
        }
        
        // --- Floating Bar Sync ---
        const floatBar = document.getElementById('floating-tts-bar');
        const floatPlay = document.getElementById('float-play');
        const floatPause = document.getElementById('float-pause');
        const floatStatus = document.getElementById('float-status');
        
        if (floatBar) {
          if (state === 'playing' || state === 'playing-neural') {
            floatBar.classList.remove('hidden');
            floatPlay.style.display = 'none';
            floatPause.style.display = 'flex';
            floatStatus.textContent = state === 'playing-neural' ? 'VOZ NEURONAL' : 'REPRODUCIENDO';
          } else if (state === 'paused') {
            floatBar.classList.remove('hidden');
            floatPlay.style.display = 'flex';
            floatPause.style.display = 'none';
            floatStatus.textContent = 'PAUSADO';
          } else {
            floatBar.classList.add('hidden');
          }
        }
      };

      tts.onWord = (idx) => {
        if (!highlightToggle.checked || !wordsSpans.length) return;
        
        for (let i = 0; i < wordsSpans.length; i++) {
          wordsSpans[i].classList.remove('word-active');
          if (i < idx) {
            wordsSpans[i].classList.add('word-past');
          } else {
            wordsSpans[i].classList.remove('word-past');
          }
        }
        
        if (wordsSpans[idx]) {
          wordsSpans[idx].classList.remove('word-past');
          wordsSpans[idx].classList.add('word-active');
          wordsSpans[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };

      ttsPlay.addEventListener('click', async () => {
        // Smart Load on Play
        if (!tts.isNeuralActive && !tts.piperLoading) {
          const notice = document.getElementById('data-notice');
          if (notice) notice.style.display = 'none'; // Clear notice on manual start
          await tts.initPiper();
        }

        if (tts.isPaused) tts.resume();
        else tts.speak(readingText);
      });

      // --- Network-Aware Auto-Load ---
      function handleNetwork() {
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const notice = document.getElementById('data-notice');
        
        if (conn) {
          // WiFi/Ethernet/High-Speed -> Silent Auto-Load
          if (conn.type === 'wifi' || conn.type === 'ethernet' || (conn.effectiveType === '4g' && !conn.saveData)) {
            console.log("WiFi/High-Speed detected. Silent loading neural voice...");
            tts.initPiper();
          } else {
            // Cellular/Data-Saving -> Show Notice
            if (notice) notice.style.display = 'inline';
          }
        } else {
          // Fallback for browsers without Connection API (Safari) -> Show notice to be safe
          if (notice) notice.style.display = 'inline';
        }
      }
      
      handleNetwork();

      ttsPause.addEventListener('click', () => tts.pause());
      ttsStop.addEventListener('click', () => tts.stop());

      // --- Floating Handlers ---
      const floatPlay = document.getElementById('float-play');
      const floatPause = document.getElementById('float-pause');
      const floatStop = document.getElementById('float-stop');

      if (floatPlay) floatPlay.addEventListener('click', () => tts.resume());
      if (floatPause) floatPause.addEventListener('click', () => tts.pause());
      if (floatStop) floatStop.addEventListener('click', () => tts.stop());
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
      // Chat payload
      const payload = {
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: history,
        generationConfig: { temperature: 0.85, maxOutputTokens: 300 }
      };

      // Call the Secure Proxy (Cloudflare Worker)
      const res = await fetch('/api/tutor', {
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

    // 5. Track Completion
    const completions = JSON.parse(localStorage.getItem('js_completed_modules') || '[]');
    if (!completions.includes(moduleId)) {
      completions.push(moduleId);
      localStorage.setItem('js_completed_modules', JSON.stringify(completions));
    }
  }

});

/**
 * ── OPEN READER (Dark Mode Overlay) ──
 */
window.openReader = function(module) {
  const overlay = document.createElement('div');
  overlay.id = 'reader-overlay';
  overlay.style = "position:fixed; inset:0; background:#0a0a0f; z-index:20000; overflow-y:auto; padding:60px 20px; color:#e0e0e0; animation: fadeIn 0.3s ease;";
  
  const content = module.fullText || module.content || 'Sin contenido.';
  const formatted = content.split('\n\n').map(p => `<p style="margin-bottom:1.5rem; line-height:1.8; font-size:1.1rem; max-width:700px; margin-left:auto; margin-right:auto;">${p.replace(/\n/g, '<br>')}</p>`).join('');

  overlay.innerHTML = `
    <div style="max-width:800px; margin:0 auto; position:relative;">
      <button onclick="document.getElementById('reader-overlay').remove()" style="position:fixed; top:20px; right:20px; background:rgba(255,255,255,0.1); border:none; color:white; width:44px; height:44px; border-radius:50%; cursor:pointer; font-size:24px;">×</button>
      <div style="text-align:center; margin-bottom:48px;">
        <span style="color:var(--primary); font-weight:800; text-transform:uppercase; letter-spacing:0.1em; font-size:0.8rem;">Modo Lectura Enfocada</span>
        <h1 style="font-family:'Outfit',sans-serif; font-size:2.5rem; margin-top:10px;">${module.title}</h1>
      </div>
      <div class="reader-body" style="font-family:'Inter',serif;">
        ${formatted}
      </div>
      <div style="text-align:center; margin-top:60px; padding-top:40px; border-top:1px solid rgba(255,255,255,0.1);">
         <button onclick="document.getElementById('reader-overlay').remove()" class="btn-primary" style="padding:16px 40px;">Regresar al Tutor</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
};
