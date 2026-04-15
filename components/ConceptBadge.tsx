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
        ? { background: 'rgba(2,195,154,0.15)', border: '1px solid rgba(2,195,154,0.5)', color: '#00a896' }
        : { background: '#e8e8e8', border: '1px solid #d0d0d0', color: '#0a0a0a' }
      }
    >
      {detected ? '✅' : '⬜'}
      {concept}
    </button>
  );
}
