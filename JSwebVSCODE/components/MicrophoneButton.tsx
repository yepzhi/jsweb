'use client';

import React, { useState, useEffect } from 'react';

interface MicrophoneButtonProps {
  isListening: boolean;
  isProcessing?: boolean;
  onStart?: () => void;
  onStop?: () => void;
  disabled?: boolean;
}

export default function MicrophoneButton({
  isListening,
  isProcessing = false,
  onStart,
  onStop,
  disabled = false,
}: MicrophoneButtonProps) {
  const [isHolding, setIsHolding] = useState(false);

  const handleMouseDown = () => {
    if (disabled || isProcessing) return;
    setIsHolding(true);
    onStart?.();
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    onStop?.();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (disabled || isProcessing) return;
    e.preventDefault();
    setIsHolding(true);
    onStart?.();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsHolding(false);
    onStop?.();
  };

  useEffect(() => {
    if (!isListening) {
      setIsHolding(false);
    }
  }, [isListening]);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Main Microphone Button */}
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        disabled={disabled || isProcessing}
        className={`
          relative w-24 h-24 rounded-full transition-all duration-200
          flex items-center justify-center group
          ${isListening || isHolding
            ? 'bg-red-500 scale-110 shadow-lg shadow-red-500/50'
            : 'bg-secondary hover:bg-secondary'
          }
          ${disabled || isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent
        `}
        title={isListening ? 'Grabando...' : 'Presiona para hablar'}
      >
        {/* Microphone Icon */}
        <svg
          className={`w-12 h-12 text-white transition-transform ${isListening ? 'scale-125' : ''}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
          <path d="M17 16.91c-1.48 1.46-3.51 2.36-5.77 2.36-2.26 0-4.29-.9-5.77-2.36l-1.1 1.1c1.86 1.86 4.41 3 7.07 3s5.21-1.14 7.07-3l-1.1-1.1zM19 12h-1.5c0 .58-.08 1.14-.23 1.67h1.73c.14-.53.23-1.09.23-1.67z" />
        </svg>

        {/* Pulse Animation Ring */}
        {isListening && (
          <>
            <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse opacity-75" />
            <div
              className="absolute inset-0 rounded-full border-2 border-red-500 opacity-50"
              style={{
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
          </>
        )}

        {/* Processing Spinner */}
        {isProcessing && (
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin" />
        )}
      </button>

      {/* Status Text */}
      <div className="text-center h-12 flex flex-col items-center justify-center">
        {isProcessing && (
          <p className="text-sm text-muted-foreground font-medium animate-pulse">
            Procesando...
          </p>
        )}
        {isListening && !isProcessing && (
          <p className="text-sm font-bold animate-pulse" style={{ color: '#E24B4A' }}>
            🔴 Grabando...
          </p>
        )}
        {!isListening && !isProcessing && (
          <p className="text-xs text-muted-foreground">
            Presiona y mantén para hablar
          </p>
        )}
      </div>
    </div>
  );
}
