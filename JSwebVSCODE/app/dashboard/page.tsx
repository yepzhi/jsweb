'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ModuleCard from '@/components/ModuleCard';
import modules from '@/public/data/modules.json';

export default function DashboardPage() {
  const [userName] = useState('Estudiante');
  const [streakDays] = useState(7);
  const [modulesProgress, setModulesProgress] = useState<Record<string, number>>({});

  // Demo data - in prod this would come from Supabase
  useEffect(() => {
    setModulesProgress({
      'module-1-1': 75,
      'module-1-2': 30,
    });
  }, []);

  const allModules = modules.chapters.flatMap((ch) =>
    ch.modules.map((m) => ({ ...m, chapterId: ch.id, chapterTitle: ch.title }))
  );

  const continueModule = allModules.find((m) => {
    const progress = modulesProgress[m.id] || 0;
    return progress > 0 && progress < 100;
  }) || allModules[0];

  return (
    <div className="min-h-screen bg-bg-dark pb-20">
      <Navbar isAuthenticated={true} userName={userName} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">¡Hola, {userName}! 👋</h1>
          <p className="text-text-secondary text-lg">Tu viaje por el universo STEM continúa...</p>
        </div>

        {/* Streak & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card-base">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm mb-2">Tu racha actual</p>
                <p className="text-4xl font-bold text-accent">{streakDays} días</p>
              </div>
              <div className="text-6xl">🔥</div>
            </div>
          </div>

          <div className="card-base">
            <div>
              <p className="text-text-secondary text-sm mb-2">Módulos completados</p>
              <p className="text-4xl font-bold text-secondary">{Object.values(modulesProgress).filter((p) => p === 100).length}</p>
            </div>
          </div>

          <div className="card-base">
            <div>
              <p className="text-text-secondary text-sm mb-2">Tiempo de aprendizaje</p>
              <p className="text-4xl font-bold text-primary">12 horas</p>
            </div>
          </div>
        </div>

        {/* Continue Module */}
        {continueModule && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Continúa tu aprendizaje</h2>
            <Link href={`/modules/${continueModule.id}`}>
              <div className="transform hover:scale-105 transition-transform">
                <ModuleCard
                  id={continueModule.id}
                  title={continueModule.title}
                  description={continueModule.description}
                  duration={continueModule.duration}
                  difficulty={continueModule.difficulty as 'beginner' | 'intermediate' | 'advanced'}
                  progress={modulesProgress[continueModule.id] || 0}
                />
              </div>
            </Link>
          </div>
        )}

        {/* Repasos Pendientes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">📝 Repasos pendientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['ADN y Genética', 'Física Cuántica', 'Códigos'].map((topic, i) => (
              <div key={i} className="card-base">
                <p className="font-medium mb-2">{topic}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-amber-400">
                    {i === 0 ? 'HOY' : `en ${2 + i} días`}
                  </span>
                  <button className="text-secondary hover:text-accent font-medium text-sm">
                    Repasar →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa STEM Preview */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">🗺️ Tu Mapa STEM</h2>
            <Link href="/mapa" className="text-secondary hover:text-accent text-sm font-medium">
              Ver completo →
            </Link>
          </div>
          <div className="card-base">
            <p className="text-text-secondary mb-6">
              Cada módulo que completas ilumina tu mapa personal del universo STEM.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {modules.chapters.map((ch) => (
                <div key={ch.id} className="text-center">
                  <div className="text-4xl mb-2">{ch.emoji}</div>
                  <p className="font-medium text-sm">{ch.title}</p>
                  <p className="text-xs text-text-secondary mt-1">
                    {ch.modules.length} módulos
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Modules */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Todos los módulos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allModules.map((module) => (
              <Link key={module.id} href={`/modules/${module.id}`}>
                <ModuleCard
                  id={module.id}
                  title={module.title}
                  description={module.description}
                  duration={module.duration}
                  difficulty={module.difficulty as 'beginner' | 'intermediate' | 'advanced'}
                  progress={modulesProgress[module.id] || 0}
                  completed={modulesProgress[module.id] === 100}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
