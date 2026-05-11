/**
 * tts.js - JóvenesSTEM TTS Manager (System Voice Only)
 * Uses the browser's built-in speechSynthesis API for text-to-speech.
 * v6.0 — Removed Piper Neural engine (unreliable, 25MB download).
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

    if (this.synth) {
      this.synth.onvoiceschanged = () => {
        this.voices = this.synth.getVoices();
      };
      this.voices = this.synth.getVoices();
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

  speak(text, onComplete = null) {
    this.stop();
    // Clean text for speech but keep word count accurate
    const cleanText = text.replace(/\[\w+\]/g, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/<[^>]*>?/gm, '').trim();
    if (!cleanText) return;
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
    const cleanText = fullText.replace(/\[\w+\]/g, '').replace(/\*\*(.*?)\*\*/g, '$1').replace(/<[^>]*>?/gm, '').trim();
    const words = cleanText.split(/\s+/);
    // Restart speech from the clicked word
    const remainingText = words.slice(index).join(' ');
    this.stop();
    this.speak(remainingText);
  }

  pause() {
    if (this.synth) { this.synth.pause(); }
    this.isPaused = true;
    if (this.onStateChange) this.onStateChange('paused');
  }

  resume() {
    if (this.synth) { this.synth.resume(); }
    this.isPaused = false;
    if (this.onStateChange) this.onStateChange('playing');
  }

  stop() {
    if (this.synth) this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    if (this.onStateChange) this.onStateChange('stopped');
  }
}
