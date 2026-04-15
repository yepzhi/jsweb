'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MapaPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center flex-1 w-full max-w-5xl mx-auto py-8">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-6 self-start md:self-center"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Menú
        </Link>

        <div className="flex flex-col items-center text-center animate-fade-in mb-10 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-secondary/30 flex items-center justify-center mb-2">
            <span className="text-3xl">🗺️</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tighter">
            Tu Mapa STEM
          </h1>
          <p className="text-muted-foreground text-base max-w-lg font-bold opacity-90 mx-auto">
            El universo gráfico de tu conocimiento. Desbloquea constelaciones al completar capítulos y dominar nuevos temas.
          </p>
        </div>

        <div className="w-full bg-card rounded-2xl border border-border shadow-md overflow-hidden relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-background to-background"></div>
          <img 
            src="/jsweb/images/logo.png"
            alt="Mapa STEM En Desarrollo"
            className="absolute inset-0 w-full h-full object-contain p-12 opacity-80"
          />
          <div className="absolute bottom-6 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-border/50 text-sm font-bold text-foreground shadow-sm">
            Exploración Constelar Bloqueada - Nivel 4 Requerido
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
