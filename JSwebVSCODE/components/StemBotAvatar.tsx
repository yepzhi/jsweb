'use client';

import React, { useState, useEffect } from 'react';

interface StemBotAvatarProps {
  state?: 'idle' | 'thinking' | 'speaking' | 'celebrating';
  size?: 'small' | 'medium' | 'large';
}

export default function StemBotAvatar({
  state = 'idle',
  size = 'medium',
}: StemBotAvatarProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (state === 'celebrating') {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-40 h-40',
    large: 'w-56 h-56',
  };

  const getStateClass = () => {
    switch (state) {
      case 'thinking':
        return 'animate-pulse';
      case 'speaking':
        return 'animate-bounce';
      case 'celebrating':
        return isAnimating ? 'scale-110' : 'scale-100';
      default:
        return '';
    }
  };

  return (
    <div className={`flex flex-col items-center gap-4 transition-all duration-300 ${getStateClass()}`}>
      {/* Avatar Container */}
      <div
        className={`${sizeClasses[size]} relative flex items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent shadow-2xl`}
      >
        {/* Robot Face */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Head */}
          <svg
            viewBox="0 0 200 200"
            className="w-4/5 h-4/5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Head shape - rounded rectangle */}
            <rect x="30" y="40" width="140" height="120" rx="20" fill="#0D0F1A" />

            {/* Eyes */}
            <circle cx="70" cy="80" r="15" fill="#FFFFFF" />
            <circle cx="130" cy="80" r="15" fill="#FFFFFF" />

            {/* Pupils */}
            <circle cx="70" cy="85" r="8" fill="#00A896" />
            <circle cx="130" cy="85" r="8" fill="#00A896" />

            {/* Mouth */}
            {state === 'speaking' ? (
              <>
                <line
                  x1="80"
                  y1="130"
                  x2="120"
                  y2="130"
                  stroke="#F5A623"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                <line
                  x1="80"
                  y1="130"
                  x2="85"
                  y2="140"
                  stroke="#F5A623"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="120"
                  y1="130"
                  x2="115"
                  y2="140"
                  stroke="#F5A623"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            ) : state === 'celebrating' ? (
              <path
                d="M 80 130 Q 100 145 120 130"
                stroke="#F5A623"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M 80 130 Q 100 135 120 130"
                stroke="#F5A623"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            )}
          </svg>

          {/* Audio waves when speaking */}
          {state === 'speaking' && (
            <div className="absolute inset-0 flex items-center justify-center opacity-75">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1 bg-accent rounded-full animate-pulse"
                    style={{
                      height: ['20px', '32px', '20px'][i],
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Thinking indicator */}
          {state === 'thinking' && (
            <div className="absolute top-2 right-2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-accent rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* State Label */}
      <div className="text-center">
        {state === 'thinking' && (
          <p className="text-sm text-text-secondary animate-pulse">StemBot está pensando...</p>
        )}
        {state === 'speaking' && (
          <p className="text-sm text-secondary font-medium">Escuchando...</p>
        )}
        {state === 'celebrating' && (
          <p className="text-sm text-accent font-bold">¡Excelente trabajo! 🚀</p>
        )}
      </div>
    </div>
  );
}
