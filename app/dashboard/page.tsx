'use client';

import React, { useState, useEffect } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ModuleCard, { ModuleHero } from '@/components/ModuleCard';
import modules from '@/public/data/modules.json';
import { Microscope, Zap, Code2, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [userName] = useState('Alejandro');
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

  const activeModule = allModules.find((m) => (modulesProgress[m.id] || 0) > 0 && (modulesProgress[m.id] || 0) < 100) || allModules[0];

  if (!activeModule) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-muted-foreground">No hay módulos disponibles en este momento.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-center mb-8">
        <div className="animate-fade-in text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-head font-extrabold mb-3 text-foreground tracking-tight max-w-2xl">
            ¡Hola, {userName}!
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base font-medium tracking-tight opacity-90 max-w-lg mx-auto">
            Listo para continuar tu viaje por el universo STEM.
          </p>
        </div>
      </div>

      {/* Continuar Módulo Card (Hero) */}
      <div className="flex justify-center w-full mb-12">
        <div className="w-full max-w-4xl mx-auto">
          <ModuleHero 
            id={activeModule.id}
            title={activeModule.title}
            chapter={activeModule.chapterTitle}
            progress={modulesProgress[activeModule.id] || 0}
          />
        </div>
      </div>

      {/* Repasos Pendientes */}
      <section className="space-y-6 w-full max-w-5xl mx-auto mb-12">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <h3 className="text-2xl md:text-3xl font-head font-extrabold text-foreground tracking-tight">
            Repasos Pendientes
          </h3>
          <Link 
            href="/repasos" 
            className="flex items-center gap-1 text-primary text-sm font-bold hover:underline w-fit mx-auto uppercase tracking-wider"
          >
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <ModuleCard 
            id="module-1-1"
            title="Cosmos y Átomos"
            subtitle="~3 min de repaso"
            icon={Microscope}
            badge="HOY"
            badgeType="urgent"
          />
          <ModuleCard 
            id="module-1-2"
            title="Física del Movimiento"
            subtitle="~5 min de repaso"
            icon={Zap}
            badge="EN 2 DÍAS"
            badgeType="soon"
          />
          <ModuleCard 
            id="module-1-3"
            title="Lógica de Código"
            subtitle="~4 min de repaso"
            icon={Code2}
            badge="EN 5 DÍAS"
            badgeType="later"
          />
        </div>
      </section>

      {/* Mapa STEM Preview */}
      <section className="space-y-6 w-full max-w-5xl mx-auto pb-20">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-head font-extrabold text-foreground tracking-tight">
            Tu Mapa STEM
          </h3>
        </div>
        <div className="bg-card rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[300px] border border-border group transition-all shadow-md mx-auto hover:border-primary/30">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center items-center text-center gap-4">
            <h4 className="text-2xl md:text-3xl font-head font-extrabold text-foreground tracking-tight">Tu universo se expande</h4>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed font-medium">
              Has iluminado 4 constelaciones. Sigue explorando para expandir tu universo de conocimiento y dominar nuevas habilidades STEM.
            </p>
            <Link 
              href="/mapa" 
              className="flex items-center justify-center gap-2 text-primary font-black mt-4 hover:gap-3 transition-all uppercase tracking-widest w-fit"
            >
              Ver mapa completo
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-[40%] min-h-[250px] relative bg-secondary/20 transition-all duration-500 overflow-hidden border-t md:border-t-0 md:border-l border-border">
            <img 
              src="/jsweb/images/logo.png"
              alt="Mapa STEM"
              className="absolute inset-0 w-full h-full object-contain p-8 opacity-90 scale-100 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
