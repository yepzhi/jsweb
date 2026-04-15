'use client';

import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { LogOut, Award, Star, Settings } from 'lucide-react';

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center flex-1 w-full max-w-3xl mx-auto py-8">
        <div className="w-full bg-card rounded-3xl border border-border overflow-hidden p-8 md:p-12 text-center shadow-[0_8px_30px_rgba(39,126,255,0.06)] relative mb-8">
          <Link href="/dashboard" className="absolute top-6 right-6 text-muted-foreground hover:text-foreground">
            <Settings className="w-6 h-6" />
          </Link>
          
          {/* Avatar Area */}
          <div className="w-32 h-32 mx-auto rounded-full bg-[linear-gradient(135deg,_#277eff,_#00a896)] flex items-center justify-center text-5xl text-white font-head font-extrabold shadow-lg shadow-primary/30 mb-6">
            A
          </div>
          
          <h1 className="text-3xl md:text-4xl font-head font-extrabold text-foreground mb-2 tracking-tight">Alex C.</h1>
          <p className="text-muted-foreground font-semibold uppercase tracking-widest text-sm mb-6">
            Estudiante de Preparatoria
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <div className="flex flex-col items-center px-4 py-3 bg-muted/30 rounded-2xl border border-border">
              <Award className="w-6 h-6 text-primary mb-1" />
              <span className="font-head font-extrabold text-xl text-foreground">Lvl 4</span>
              <span className="text-xs text-muted-foreground font-medium">Rango Actual</span>
            </div>
            <div className="flex flex-col items-center px-4 py-3 bg-muted/30 rounded-2xl border border-border">
              <Star className="w-6 h-6 text-[#00a896] mb-1" />
              <span className="font-head font-extrabold text-xl text-foreground">7 Días</span>
              <span className="text-xs text-muted-foreground font-medium">Racha Fuego</span>
            </div>
          </div>

          <button className="btn-secondary px-8 py-3 w-fit mx-auto flex items-center justify-center gap-2 rounded-xl text-red-500 font-bold hover:bg-red-500/10 border-red-500/20">
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </button>
        </div>
        
        {/* Progress Section */}
        <div className="w-full text-center space-y-4">
          <h3 className="font-bold text-lg text-foreground tracking-tight">Estadísticas de Exploración</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Continúa participando activamente en los módulos STEM para desbloquear más detalles avanzados sobre tus talentos.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
