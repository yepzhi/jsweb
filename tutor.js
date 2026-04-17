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
Cuando el alumno demuestre una comprensión superior al 80% (calificación inferencial) sobre el tema, DEBES incluir OBLIGATORIAMENTE la etiqueta estricta "[APTO_PARA_AVANZAR]" al final de tu respuesta.
`.trim();

document.addEventListener('DOMContentLoaded', async () => {
  if (!document.getElementById('chat-messages')) return;
  renderNavbar(); // from app.js

  const urlParams = new URLSearchParams(window.location.search);
  const moduleId = urlParams.get('id');
  const titleEl = document.getElementById('module-title');
  const chatEl = document.getElementById('chat-messages');
  const avatar = document.getElementById('bot-avatar');
  
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
    titleEl.textContent = `Módulo: ${currentModule.title}`;
    addMessage('bot', `¡Hola! Vamos a explorar sobre ${currentModule.title}. ¿Qué sabes o te imaginas que es esto?`);
  } else {
    titleEl.textContent = 'Módulo no encontrado';
    addMessage('bot', 'Hubo un problema cargando este módulo.');
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
    
    if (state === 'speaking') avatar.textContent = '🗣';
    else if (state === 'thinking') avatar.textContent = '🤔';
    else if (state === 'celebrating') avatar.textContent = '🎉';
    else avatar.textContent = '🤖';
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
      
      // Check evaluation tag
      if (responseText.includes('[APTO_PARA_AVANZAR]')) {
        responseText = responseText.replace(/\[APTO_PARA_AVANZAR\]/g, '').trim();
        controls.style.display = 'none';
        nextBtn.style.display = 'block';
        setAvatarState('celebrating');
      } else {
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

});
