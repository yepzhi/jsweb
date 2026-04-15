// Web Speech API Utilities
// Supports speech-to-text and text-to-speech

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  isFinal: boolean;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
  length: number;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export class SpeechRecognizer {
  private recognition: any;
  private isListening: boolean = false;
  private transcript: string = '';
  private onResult: ((text: string) => void) | null = null;
  private onError: ((error: string) => void) | null = null;
  private onStart: (() => void) | null = null;
  private onEnd: (() => void) | null = null;

  constructor() {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition API not supported in this browser');
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.lang = 'es-MX';

    this.recognition.onstart = () => {
      this.isListening = true;
      this.onStart?.();
    };

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      this.transcript = '';
      for (let i = event.results.length - 1; i >= 0; i--) {
        const result = event.results[i];
        if (result && result[0]) {
          const transcript = result[0].transcript;
          if (result.isFinal) {
            this.transcript += transcript + ' ';
          }
        }
      }
      if (event.isFinal) {
        this.onResult?.(this.transcript.trim());
      }
    };

    this.recognition.onerror = (event: any) => {
      this.onError?.(event.error);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.onEnd?.();
    };
  }

  start() {
    if (!this.recognition) {
      this.onError?.('Speech Recognition not available');
      return;
    }
    this.transcript = '';
    this.recognition.start();
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  abort() {
    if (this.recognition) {
      this.recognition.abort();
    }
  }

  setOnResult(callback: (text: string) => void) {
    this.onResult = callback;
  }

  setOnError(callback: (error: string) => void) {
    this.onError = callback;
  }

  setOnStart(callback: () => void) {
    this.onStart = callback;
  }

  setOnEnd(callback: () => void) {
    this.onEnd = callback;
  }

  isSupported(): boolean {
    return !!this.recognition;
  }
}

export class TextToSpeech {
  private synthesis: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isPlaying: boolean = false;
  private onStart: (() => void) | null = null;
  private onEnd: (() => void) | null = null;
  private onError: ((error: string) => void) | null = null;

  constructor() {
    if (typeof window === 'undefined') return;

    this.synthesis = window.speechSynthesis;
  }

  async speak(text: string, lang: string = 'es-MX') {
    if (!this.synthesis) {
      this.onError?.('Text-to-Speech not available');
      return;
    }

    // Cancel any ongoing speech
    this.synthesis.cancel();

    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      this.isPlaying = true;
      this.onStart?.();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.onEnd?.();
    };

    utterance.onerror = (event: any) => {
      this.isPlaying = false;
      this.onError?.(event.error);
    };

    this.currentUtterance = utterance;
    this.synthesis.speak(utterance);
  }

  stop() {
    if (this.synthesis) {
      this.synthesis.cancel();
      this.isPlaying = false;
    }
  }

  pause() {
    if (this.synthesis && this.isPlaying) {
      this.synthesis.pause();
    }
  }

  resume() {
    if (this.synthesis) {
      this.synthesis.resume();
    }
  }

  setOnStart(callback: () => void) {
    this.onStart = callback;
  }

  setOnEnd(callback: () => void) {
    this.onEnd = callback;
  }

  setOnError(callback: (error: string) => void) {
    this.onError = callback;
  }

  isPlaying_(): boolean {
    return this.isPlaying;
  }

  isSupported(): boolean {
    return !!this.synthesis;
  }
}
