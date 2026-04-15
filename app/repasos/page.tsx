'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import ModuleCard from '@/components/ModuleCard';
import { Microscope, Zap, Code2, ClipboardList } from 'lucide-react';

export default function RepasosPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center text-center animate-fade-in py-8 mb-8 space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 text-primary">
          <ClipboardList className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tighter">
          Mis Repasos
        </h1>
        <p className="text-muted-foreground text-base max-w-lg font-bold opacity-90 mx-auto">
          Mantén tu conocimiento fresco. Tienes 3 módulos listos para repaso inteligente mediante repetición espaciada.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </DashboardLayout>
  );
}
