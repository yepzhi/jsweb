'use client';

import React from 'react';
import Link from 'next/link';

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progress?: number;
  completed?: boolean;
  locked?: boolean;
}

export default function ModuleCard({
  id,
  title,
  description,
  duration,
  difficulty,
  progress = 0,
  completed = false,
  locked = false,
}: ModuleCardProps) {
  const difficultyColors = {
    beginner: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    intermediate: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
    advanced: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
  };

  const difficultyLabels = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
  };

  return (
    <div className="group">
      <Link
        href={locked ? '#' : `/modules/${id}`}
        className={`
          block card-base hover:shadow-xl transition-all duration-300
          ${locked ? 'opacity-60 cursor-not-allowed' : 'hover:-translate-y-2 cursor-pointer'}
          ${completed ? 'border-secondary border-opacity-50' : ''}
        `}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1 group-hover:text-secondary transition-colors">
              {title}
            </h3>
            <p className="text-text-secondary text-sm line-clamp-2">{description}</p>
          </div>
          {completed && (
            <div className="ml-4 text-3xl animate-pulse">✅</div>
          )}
          {locked && (
            <div className="ml-4 text-3xl">🔒</div>
          )}
        </div>

        {/* Difficulty Badge */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[difficulty]}`}
          >
            {difficultyLabels[difficulty]}
          </span>
        </div>

        {/* Progress Bar */}
        {progress > 0 && !completed && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-text-secondary">Progreso</span>
              <span className="text-xs font-medium text-secondary">{progress}%</span>
            </div>
            <div className="h-2 bg-text-secondary bg-opacity-20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Meta Info */}
        <div className="flex items-center justify-between text-text-secondary text-sm">
          <span>⏱️ {duration} min</span>
          <span className="text-xs">
            {locked ? 'Bloqueado' : 'Accesible'}
          </span>
        </div>

        {/* CTA Button */}
        {!locked && (
          <div className="mt-4 pt-4 border-t border-text-secondary border-opacity-10">
            <button
              className={`w-full py-2 rounded-button font-medium transition-all ${
                completed
                  ? 'bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/40'
                  : 'bg-secondary/20 text-secondary hover:bg-secondary hover:text-white'
              }`}
            >
              {completed ? '✅ Completado' : '▶️ Comenzar'}
            </button>
          </div>
        )}
      </Link>
    </div>
  );
}
