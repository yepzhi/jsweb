/**
 * tts.js - JóvenesSTEM Hybrid TTS Manager (System + Neural Piper)
 */

export class TTSManager {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.currentUtterance = null;
    this.onStateChange = null; 
    this.onWord = null; // Callback for highlighting: (wordIndex) => {}
    this.isPlaying = false;
    this.isPaused = false;
    this.highlightTimer = null;
    
    // Piper State
    this.piper = null;
    this.piperLoading = false;
    this.voiceModel = 'es_MX-ald-medium'; 
    this.isNeuralActive = false;

    if (this.synth) {
      this.synth.onvoiceschanged = () => {
        this.voices = this.synth.getVoices();
      };
      this.voices = this.synth.getVoices();
    }
  }

  async initPiper() {
    if (this.piper || this.piperLoading) return;
    this.piperLoading = true;
    try {
      if (this.onStateChange) this.onStateChange('loading-neural');
      
      // We rely on the global 'ort' loaded in tutor.html to avoid version conflicts and 404s
      // If it's not there, we try to load it, but the script tag is the most reliable way.
      if (!window.ort) {
        await import('https://cdn.jsdelivr.net/npm/onnxruntime-web@1.19.0/dist/ort.min.js');
      }
      
      // Pinning dependency via esm.sh to ensure compatibility with our global ORT 1.19.0
      const { TtsSession } = await import('https://esm.sh/@mintplex-labs/piper-tts-web@1.0.4?deps=onnxruntime-web@1.19.0');
      
      this.piper = await TtsSession.create({ 
        voiceId: this.voiceModel
      });
      this.isNeuralActive = true;
      this.piperLoading = false;
      if (this.onStateChange) this.onStateChange('neural-ready');
    } catch (err) {
      console.error("DEBUG: Piper Init Failure Details:", {
        message: err.message,
        stack: err.stack,
        ortEnvironment: window.ort ? window.ort.env : 'Not Global'
      });
      if (this.onStateChange) this.onStateChange('neural-error');
      this.piperLoading = false;
      this.isNeuralActive = false;
    }
  }

  getBestSpanishVoice() {
    const esVoices = this.voices.filter(v => v.lang.startsWith('es'));
    const preferred = ['Google Spanish', 'Microsoft Sabina', 'Paulina', 'Monica', 'Jorge'];
    for (const pref of preferred) {
      const found = esVoices.find(v => v.name.includes(pref));
      if (found) return found;
    }
    return esVoices.find(v => v.lang === 'es-MX') || esVoices[0] || null;
  }

  async speak(text, onComplete = null) {
    this.stop();
    // Clean text for speech but keep word count accurate
    const cleanText = text.replace(/\[\w+\]/g, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/<[^>]*>?/gm, '').trim();
    if (!cleanText) return;

    const words = cleanText.split(/\s+/);

    // --- PIPER NEURAL PATH ---
    if (this.isNeuralActive && this.piper) {
      try {
        if (this.onStateChange) this.onStateChange('playing-neural');
        this.isPlaying = true;
        
        const audioBlob = await this.piper.predict(cleanText);
        const audioUrl = URL.createObjectURL(audioBlob);
        this.audio = new Audio(audioUrl);
        
        this.audio.onplay = () => {
          if (this.onWord) {
            this.highlightTimer = setInterval(() => {
              if (this.isPaused) return;
              
              let duration = this.audio.duration;
              // Handle Chrome blob Infinity duration bug
              if (!duration || duration === Infinity) {
                duration = (words.length / 130) * 60; // Fallback: 130 WPM estimate
              }
              
              let progress = this.audio.currentTime / duration;
              if (progress > 1) progress = 1;
              
              let currentWordIdx = Math.floor(progress * words.length);
              if (currentWordIdx >= words.length) currentWordIdx = words.length - 1;
              
              this.onWord(currentWordIdx);
            }, 100);
          }
        };

        this.audio.onended = () => {
          this.isPlaying = false;
          clearInterval(this.highlightTimer);
          if (this.onWord) this.onWord(words.length - 1); // Ensure last word is marked
          if (this.onStateChange) this.onStateChange('stopped');
          if (onComplete) onComplete();
          URL.revokeObjectURL(audioUrl);
        };

        this.audio.play();
        return;
      } catch (err) {
        console.warn("Neural playback failed, falling back:", err);
      }
    }

    // --- SYSTEM FALLBACK PATH ---
    if (!this.synth) return;
    this.currentUtterance = new SpeechSynthesisUtterance(cleanText);
    this.currentUtterance.voice = this.getBestSpanishVoice();
    this.currentUtterance.lang = this.currentUtterance.voice ? this.currentUtterance.voice.lang : 'es-MX';
    
    this.currentUtterance.onboundary = (event) => {
      if (event.name === 'word' && this.onWord) {
        // We find the index of the word by counting spaces up to charIndex
        const textUpTo = cleanText.substring(0, event.charIndex);
        const wordIndex = textUpTo.split(/\s+/).filter(x => x.length > 0).length;
        this.onWord(wordIndex);
      }
    };

    this.currentUtterance.onstart = () => {
      this.isPlaying = true;
      if (this.onStateChange) this.onStateChange('playing');
    };

    this.currentUtterance.onend = () => {
      this.isPlaying = false;
      if (this.onStateChange) this.onStateChange('stopped');
      if (onComplete) onComplete();
    };

    this.synth.speak(this.currentUtterance);
  }

  seekToWord(index, fullText) {
    if (index < 0) return;
    
    // Ensure we have the words array
    const cleanText = fullText.replace(/\[\w+\]/g, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/<[^>]*>?/gm, '').trim();
    const words = cleanText.split(/\s+/);
    
    if (this.isNeuralActive && this.audio) {
      const duration = (this.audio.duration && this.audio.duration !== Infinity) 
        ? this.audio.duration 
        : (words.length / 130) * 60;
      
      const targetTime = (index / words.length) * duration;
      this.audio.currentTime = targetTime;
      if (this.isPaused) this.resume();
    } else {
      // Fallback: Restart speech from the clicked word
      const remainingText = words.slice(index).join(' ');
      this.stop();
      this.speak(remainingText);
    }
  }

  pause() {
    if (this.audio) { this.audio.pause(); }
    else if (this.synth) { this.synth.pause(); }
    this.isPaused = true;
    if (this.onStateChange) this.onStateChange('paused');
  }

  resume() {
    if (this.audio) { this.audio.play(); }
    else if (this.synth) { this.synth.resume(); }
    this.isPaused = false;
    if (this.onStateChange) this.onStateChange('playing');
  }

  stop() {
    clearInterval(this.highlightTimer);
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
    if (this.synth) this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    if (this.onStateChange) this.onStateChange('stopped');
  }
}
