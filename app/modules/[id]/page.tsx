'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import modules from '@/public/data/modules.json';
import { ArrowLeft, Clock, BarChart2, MessageCircle, ChevronRight } from 'lucide-react';

export default function ModuleContent() {
  const params = useParams();
  const moduleId = params['id'] as string;

  const module = modules.chapters
    .flatMap((ch) => ch.modules)
    .find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Módulo no encontrado</p>
          <Link href="/dashboard" className="btn-primary px-6 py-3 text-sm inline-flex">
            ← Volver al Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md flex items-center gap-4 px-6 py-4 border-b border-border shadow-sm">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Dashboard
        </Link>
        <ChevronRight className="w-4 h-4 text-border" />
        <span className="text-sm font-bold text-foreground truncate">{module.title}</span>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 py-10 pb-20 space-y-12">
        {/* Module meta */}
        <div className="flex flex-col items-center text-center space-y-5">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-muted-foreground">
            <span className="px-3 py-1 rounded-full font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20">
              Capítulo 1
            </span>
            <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 text-primary" />
              {module.duration} min
            </span>
            <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full">
              <BarChart2 className="w-4 h-4 text-primary" />
              {module.difficulty}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground font-['Outfit',sans-serif] leading-tight">
            {module.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {module.description}
          </p>
        </div>

        {/* Key concepts chips */}
        <div className="p-8 rounded-3xl space-y-5 bg-card border border-border mt-8 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#00A896]">
            📌 Conceptos clave
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {module.keyPoints.map((point, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-semibold rounded-xl bg-[#00A896]/10 text-[#00A896] border border-[#00A896]/20"
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Main content — light surface for readability */}
        <div className="p-8 md:p-10 rounded-3xl space-y-6 bg-white border border-border shadow-[0_8px_30px_rgba(39,126,255,0.06)]">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
            📚 Contenido Formativo
          </h2>
          <div className="space-y-6">
            {module.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-[1.1rem] leading-[1.85] text-foreground/90 font-medium whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* All concepts */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            💡 Glosario del Módulo
          </h2>
          <div className="flex flex-wrap gap-2">
            {module.concepts.map((concept, i) => (
              <span
                key={i}
                className="px-4 py-2 text-xs font-bold rounded-full bg-muted/50 text-muted-foreground border border-border"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* CTA — fixed on mobile, inline on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
          <Link
            href={`/modules/${moduleId}/tutor`}
            className="btn-primary flex items-center justify-center gap-2 py-4 text-[1.05rem] font-bold rounded-2xl shadow-lg shadow-primary/20"
          >
            <MessageCircle className="w-5 h-5 fill-white/20" />
            Entrar a Tutoría IA →
          </Link>
          <Link
            href="/dashboard"
            className="btn-secondary flex items-center justify-center gap-2 py-4 text-[1.05rem] font-bold rounded-2xl bg-card hover:bg-muted/30"
          >
            ← Volver al Menú
          </Link>
        </div>
      </main>
    </div>
  );
}
