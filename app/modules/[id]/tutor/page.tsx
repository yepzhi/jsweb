'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import StemBotAvatar from '@/components/StemBotAvatar';
import MicrophoneButton from '@/components/MicrophoneButton';
import ConceptBadge from '@/components/ConceptBadge';
import { SpeechRecognizer, TextToSpeech } from '@/lib/speech';
import modules from '@/public/data/modules.json';
import { ArrowLeft, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function TutorPage() {
  const params = useParams();
  const moduleId = params['id'] as string;
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [avatarState, setAvatarState] = useState<'idle' | 'thinking' | 'speaking' | 'celebrating'>('idle');
  const [detectedConcepts, setDetectedConcepts] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  const speechRecognizer = useRef<SpeechRecognizer | null>(null);
  const tts = useRef<TextToSpeech | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const conversationHistory = useRef<Array<{ role: 'user' | 'model'; parts: [{ text: string }] }>>([]);

  const module = modules.chapters
    .flatMap((ch) => ch.modules)
    .find((m) => m.id === moduleId);

  useEffect(() => {
    // Initialize speech
    speechRecognizer.current = new SpeechRecognizer();
    tts.current = new TextToSpeech();

    if (speechRecognizer.current) {
      speechRecognizer.current.setOnStart(() => {
        setIsListening(true);
        setAvatarState('thinking');
      });
      speechRecognizer.current.setOnResult((transcript) => {
        handleUserMessage(transcript);
      });
      speechRecognizer.current.setOnEnd(() => {
        setIsListening(false);
      });
      speechRecognizer.current.setOnError((error) => {
        console.error('Speech error:', error);
        setIsListening(false);
        setAvatarState('idle');
      });
    }

    if (tts.current) {
      tts.current.setOnStart(() => setAvatarState('speaking'));
      tts.current.setOnEnd(() => setAvatarState('idle'));
    }

    // Initial greeting
    const greeting =
      `Hola, soy StemBot 👋 Acabas de estudiar "${module?.title || 'este módulo'}". ` +
      `Cuéntame con tus propias palabras: ¿qué entendiste sobre este tema?`;

    setMessages([{ role: 'assistant', content: greeting, timestamp: new Date() }]);
    tts.current?.speak(greeting, 'es-MX');

    return () => {
      speechRecognizer.current?.abort();
      tts.current?.stop();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUserMessage = async (text: string) => {
    if (!text.trim() || isProcessing) return;

    setIsProcessing(true);
    setAvatarState('thinking');
    setUserInput('');

    const userMsg: Message = { role: 'user', content: text, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    // Update local history for API
    conversationHistory.current.push({ role: 'user', parts: [{ text }] });

    try {
      // Call server-side API route (key is safe, server-only)
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: conversationHistory.current.slice(0, -1), // exclude current message
          topic: module?.title || 'STEM',
          level: '11-14 años',
          step: 'socratic',
        }),
      });

      const data = await res.json();
      const response: string = data.text || 'Interesante. ¿Puedes contarme más?';

      // Update history with assistant response
      conversationHistory.current.push({ role: 'model', parts: [{ text: response }] });

      // Detect concepts from user message
      const conceptKeywords: Record<string, string[]> = {
        'universo': ['universo', 'cosmos', 'big bang', 'galaxia', 'estrella'],
        'átomo': ['átomo', 'núcleo', 'electrón', 'protón', 'neutrón'],
        'energía': ['energía', 'fuerza', 'potencia', 'cinética', 'potencial'],
        'dna': ['adn', 'dna', 'gen', 'cromosoma', 'nucleótido', 'hélice'],
        'código': ['código', 'programa', 'algoritmo', 'función', 'variable'],
        'luz': ['luz', 'onda', 'fotón', 'rayo', 'espectro'],
      };

      const lower = text.toLowerCase();
      const found: string[] = [];
      for (const [concept, keywords] of Object.entries(conceptKeywords)) {
        if (keywords.some((kw) => lower.includes(kw))) found.push(concept);
      }
      if (found.length) setDetectedConcepts((prev) => [...new Set([...prev, ...found])]);

      setMessages((prev) => [...prev, { role: 'assistant', content: response, timestamp: new Date() }]);
      tts.current?.speak(response, 'es-MX');
    } catch (error) {
      console.error('Tutor error:', error);
      const errMsg = 'Disculpa, tuve un problemita. Intenta de nuevo.';
      setMessages((prev) => [...prev, { role: 'assistant', content: errMsg, timestamp: new Date() }]);
    } finally {
      setIsProcessing(false);
      if (!tts.current?.isPlaying_()) setAvatarState('idle');
    }
  };

  const handleMicStart = () => {
    if (speechRecognizer.current?.isSupported()) {
      setUserInput('');
      speechRecognizer.current.start();
    }
  };

  const handleMicStop = () => {
    speechRecognizer.current?.stop();
    setIsListening(false);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUserMessage(userInput);
  };

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Módulo no encontrado</p>
          <Link href="/dashboard" className="btn-primary px-6 py-3 text-sm">
            Volver al Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-4 md:px-6 py-4 glass"
        style={{ borderBottom: '1px solid rgba(138,143,173,0.15)' }}
      >
        <Link
          href={`/modules/${moduleId}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{module.title}</span>
          <span className="sm:hidden">Volver</span>
        </Link>
        <div className="flex items-center gap-2 text-sm font-bold text-primary">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          StemBot activo
        </div>
      </header>

      {/* Main chat area */}
      <main className="flex-1 flex flex-col w-full px-4 md:px-8 py-6 md:py-10 gap-6 md:gap-8 overflow-hidden">
        
        {/* Container for better centering on desktop */}
        <div className="flex flex-col gap-6 md:gap-8 mx-auto w-full max-w-2xl">

          {/* Avatar */}
          <div className="flex justify-center">
            <StemBotAvatar state={avatarState} size="medium" />
          </div>

          {/* Concept badges */}
          {detectedConcepts.length > 0 && (
            <div
              className="p-4 md:p-6 rounded-xl md:rounded-2xl"
              style={{ background: 'rgba(0,168,150,0.05)', border: '1px solid rgba(0,168,150,0.2)' }}
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-4 uppercase tracking-widest font-bold">
                ✨ Conceptos que mencionaste:
              </p>
              <div className="flex flex-wrap gap-2">
                {module.concepts.map((concept) => (
                  <ConceptBadge
                    key={concept}
                    concept={concept}
                    detected={detectedConcepts.includes(concept)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages — scrollable */}
          <div className="flex-1 space-y-4 overflow-y-auto min-h-[200px] md:min-h-[300px] px-2 md:px-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-xs md:max-w-sm px-4 md:px-5 py-3 md:py-4 text-sm md:text-base leading-relaxed"
                  style={{
                    borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    ...(msg.role === 'user'
                      ? { background: '#277eff', color: '#ffffff', fontWeight: 500 }
                      : { background: '#fbfaf9', border: '1px solid #e8e8e8', color: '#0a0a0a' }),
                  }}
                >
                  <p>{msg.content}</p>
                  <p className="text-[11px] md:text-xs opacity-50 mt-2">
                    {msg.timestamp.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isProcessing && (
              <div className="flex justify-start">
                <div
                  className="px-4 md:px-5 py-3 md:py-4 flex items-center gap-2"
                  style={{ background: '#fbfaf9', border: '1px solid #e8e8e8', borderRadius: '18px 18px 18px 4px' }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Mic Button */}
          <div className="flex justify-center">
            <MicrophoneButton
              isListening={isListening}
              isProcessing={isProcessing}
              onStart={handleMicStart}
              onStop={handleMicStop}
              disabled={isProcessing}
            />
          </div>

          {/* Text fallback */}
          <form onSubmit={handleTextSubmit} className="flex gap-2 md:gap-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="O escribe tu respuesta aquí..."
              disabled={isProcessing}
              className="flex-1 px-4 md:px-5 py-2 md:py-3 text-sm md:text-base"
              style={{
                borderRadius: '12px',
                border: '1px solid #e8e8e8',
                background: '#ffffff',
                color: '#0a0a0a',
              }}
            />
            <button
              type="submit"
              disabled={isProcessing || !userInput.trim()}
              className="btn-primary px-4 md:px-5 py-2 md:py-3 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center"
              style={{ borderRadius: '12px', minWidth: '48px', background: '#277eff', color: '#ffffff' }}
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </form>

          <p className="text-center text-xs md:text-sm text-muted-foreground pb-2">
            💡 Responde con tus propias palabras. StemBot te guiará con preguntas.
          </p>

        </div>

      </main>
    </div>
  );
}
