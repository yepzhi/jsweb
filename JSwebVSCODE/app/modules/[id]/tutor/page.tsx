'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import StemBotAvatar from '@/components/StemBotAvatar';
import MicrophoneButton from '@/components/MicrophoneButton';
import ConceptBadge from '@/components/ConceptBadge';
import { SpeechRecognizer, TextToSpeech } from '@/lib/speech';
import { StemBot } from '@/lib/gemini-tutor';
import modules from '@/public/data/modules.json';

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
  const [avatarState, setAvatarState] = useState<'idle' | 'thinking' | 'speaking' | 'celebrating'>(
    'idle'
  );
  const [detectedConcepts, setDetectedConcepts] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');

  const speechRecognizer = useRef<SpeechRecognizer | null>(null);
  const tts = useRef<TextToSpeech | null>(null);
  const stemBot = useRef<StemBot | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const module = modules.chapters
    .flatMap((ch) => ch.modules)
    .find((m) => m.id === moduleId);

  useEffect(() => {
    // Initialize
    speechRecognizer.current = new SpeechRecognizer();
    tts.current = new TextToSpeech();
    stemBot.current = new StemBot(15, module?.title || '');

    // Setup speech recognizer callbacks
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

    // Setup TTS callbacks
    if (tts.current) {
      tts.current.setOnStart(() => {
        setAvatarState('speaking');
      });

      tts.current.setOnEnd(() => {
        setAvatarState('idle');
      });
    }

    // Initial greeting
    if (messages.length === 0 && stemBot.current) {
      const greeting =
        `Hola, soy StemBot, tu tutor personal. Acabas de estudiar "${module?.title}". ` +
        `Ahora me gustaría entender qué aprendiste. ` +
        `Cuéntame con tus propias palabras qué entendiste sobre este tema.`;

      setMessages([{ role: 'assistant', content: greeting, timestamp: new Date() }]);
      if (tts.current?.isSupported()) {
        tts.current.speak(greeting, 'es-MX');
      }
    }

    return () => {
      speechRecognizer.current?.abort();
      tts.current?.stop();
    };
  }, [module, messages.length]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUserMessage = async (text: string) => {
    if (!text.trim()) return;

    setIsProcessing(true);
    setAvatarState('thinking');

    // Add user message
    const userMsg: Message = {
      role: 'user',
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    try {
      // Get StemBot response
      let response = await stemBot.current?.chat(text) || 'Interesante respuesta.';

      // Detect concepts
      const concepts = stemBot.current?.detectConcepts(text) || [];
      setDetectedConcepts((prev) => [...new Set([...prev, ...concepts])]);

      // Add assistant message
      const assistantMsg: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);

      // Speak response
      if (tts.current?.isSupported()) {
        setAvatarState('speaking');
        await tts.current.speak(response, 'es-MX');
      }
    } catch (error) {
      console.error('Error getting response:', error);
      setAvatarState('idle');
      const errorMsg: Message = {
        role: 'assistant',
        content: 'Disculpa, tuve un problema procesando tu respuesta. Intenta de nuevo.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsProcessing(false);
      setAvatarState('idle');
      setUserInput('');
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
    if (userInput.trim()) {
      handleUserMessage(userInput);
    }
  };

  if (!module) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <Navbar isAuthenticated={true} />
        <p className="text-text-secondary">Módulo no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-8">
      <Navbar isAuthenticated={true} />

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
          <p className="text-text-secondary">Conversación con StemBot</p>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-12">
          <StemBotAvatar state={avatarState} size="medium" />
        </div>

        {/* Chat Messages */}
        <div className="space-y-6 mb-12 h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-secondary text-white rounded-br-none'
                    : 'bg-dark-surface text-text-primary rounded-bl-none border border-text-secondary border-opacity-20'
                }`}
              >
                <p className="text-sm md:text-base">{msg.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {msg.timestamp.toLocaleTimeString('es-MX', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Detected Concepts */}
        {detectedConcepts.length > 0 && (
          <div className="mb-8 p-4 bg-dark-surface rounded-lg border border-secondary border-opacity-30">
            <p className="text-sm text-text-secondary mb-3">✨ Conceptos que mencionaste:</p>
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

        {/* Microphone Button */}
        <div className="flex justify-center mb-8">
          <MicrophoneButton
            isListening={isListening}
            isProcessing={isProcessing}
            onStart={handleMicStart}
            onStop={handleMicStop}
            disabled={isProcessing}
          />
        </div>

        {/* Text Input Alternative */}
        <form onSubmit={handleTextSubmit} className="flex gap-2 mb-8">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="O escribe tu respuesta aquí..."
            className="flex-1"
            disabled={isProcessing}
          />
          <button
            type="submit"
            disabled={isProcessing || !userInput.trim()}
            className="px-6 py-2 bg-secondary text-white rounded-button hover:bg-opacity-90 disabled:opacity-50 transition-all"
          >
            Enviar
          </button>
        </form>

        {/* Help Text */}
        <div className="text-center text-text-secondary text-sm">
          <p>💡 Responde con tus propias palabras. StemBot te guiará haciendo preguntas.</p>
        </div>
      </main>
    </div>
  );
}
