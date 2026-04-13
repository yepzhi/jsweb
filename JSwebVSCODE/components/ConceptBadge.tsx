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
      className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2"
      style={detected
        ? { background: 'rgba(2,195,154,0.15)', border: '1px solid rgba(2,195,154,0.5)', color: '#02C39A' }
        : { background: 'rgba(28,31,46,0.8)', border: '1px solid rgba(138,143,173,0.25)', color: '#8A8FAD' }
      }
    >
      {detected ? '✅' : '⬜'}
      {concept}
    </button>
  );
}
