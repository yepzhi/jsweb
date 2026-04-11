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
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
          ¡Hola, {userName}! 👋
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Listo para continuar tu viaje por el universo STEM.
        </p>
      </div>

      {/* Continuar Módulo Card (Hero) */}
      <ModuleHero 
        id={activeModule.id}
        title={activeModule.title}
        chapter={activeModule.chapterTitle}
        progress={modulesProgress[activeModule.id] || 0}
      />

      {/* Repasos Pendientes */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Repasos Pendientes
          </h3>
          <Link 
            href="/repasos" 
            className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
          >
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      <section className="space-y-6">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Tu Mapa STEM
        </h3>
        <div className="glass rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[200px] border border-border group transition-all hover:border-primary/30">
          <div className="flex-1 p-8 flex flex-col justify-center gap-3">
            <h4 className="text-xl md:text-2xl font-bold text-foreground">Tu universo se expande</h4>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg leading-relaxed">
              Has iluminado 4 constelaciones. Sigue explorando para expandir tu universo de conocimiento y dominar nuevas habilidades STEM.
            </p>
            <Link 
              href="/mapa" 
              className="flex items-center gap-2 text-primary text-sm font-bold mt-2 hover:gap-3 transition-all"
            >
              Ver mapa completo
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-[40%] h-48 md:h-auto relative bg-muted grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
            <img 
              src="https://storage.googleapis.com/banani-generated-images/generated-images/0279fc75-0d1f-4460-ac54-c1f804ddfc12.jpg"
              alt="Mapa STEM"
              className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
