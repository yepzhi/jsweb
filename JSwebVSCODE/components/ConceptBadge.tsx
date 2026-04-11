'use client';

import React from 'react';

interface ConceptBadgeProps {
  concept: string;
  detected: boolean;
  onClick?: () => void;
}

export default function ConceptBadge({
  concept,
  detected = false,
  onClick,
}: ConceptBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200 transform hover:scale-105
        ${
          detected
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500 shadow-lg shadow-emerald-500/30'
            : 'bg-gray-700/40 text-text-secondary border border-text-secondary border-opacity-30'
        }
      `}
    >
      <span className="flex items-center gap-2">
        {detected ? (
          <span className="text-lg">✅</span>
        ) : (
          <span className="text-lg">⬜</span>
        )}
        {concept}
      </span>
    </button>
  );
}
