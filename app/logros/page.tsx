'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Trophy, Star, Medal, Lock } from 'lucide-react';

export default function LogrosPage() {
  const achievements = [
    {
      id: 1,
      title: 'Primeros Pasos',
      description: 'Completaste tu primer módulo STEM y abriste la puerta al conocimiento.',
      icon: Star,
      unlocked: true,
      color: 'bg-primary/20 text-primary border-primary/30',
    },
    {
      id: 2,
      title: 'Explorador Constante',
      description: 'Mantuviste una racha de repasos por 7 días seguidos.',
      icon: Trophy,
      unlocked: true,
      color: 'bg-[#00a896]/20 text-[#00a896] border-[#00a896]/30',
    },
    {
      id: 3,
      title: 'Mente Analítica',
      description: 'Superaste el módulo avanzado de Pensamiento Lógico Computacional sin errores.',
      icon: Medal,
      unlocked: false,
      color: 'bg-muted text-muted-foreground border-border',
    },
    {
      id: 4,
      title: 'Maestro del Cosmos',
      description: 'Finaliza el capítulo de Cosmología y Física Cuántica Aplicada.',
      icon: Lock,
      unlocked: false,
      color: 'bg-muted text-muted-foreground border-border',
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center text-center animate-fade-in py-8 mb-8 space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-2 text-[#00a896]">
          <Trophy className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-head font-extrabold text-foreground tracking-tight">
          Tus Logros
        </h1>
        <p className="text-muted-foreground text-base max-w-lg font-medium opacity-90 mx-auto leading-relaxed">
          Cada meta superada te otorga una insignia. Colecciónalas todas para desbloquear accesos especiales en la plataforma.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col text-center items-center justify-center p-8 rounded-3xl border transition-all duration-300 ${item.unlocked ? 'bg-card shadow-sm hover:border-primary/50' : 'bg-muted/10 opacity-70'} ${item.unlocked ? 'border-border' : 'border-dashed border-border'}`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border ${item.color}`}>
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className={`text-xl font-head font-extrabold tracking-tight mb-2 ${item.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
              {item.title}
            </h3>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground max-w-[250px]">
              {item.description}
            </p>
            {!item.unlocked && (
              <span className="mt-4 px-3 py-1 bg-muted rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Bloqueado
              </span>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
