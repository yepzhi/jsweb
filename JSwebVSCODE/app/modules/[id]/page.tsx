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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className="sticky top-0 z-40 glass flex items-center gap-4 px-5 py-4"
        style={{ borderBottom: '1px solid rgba(138,143,173,0.15)' }}
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Dashboard
        </Link>
        <ChevronRight className="w-3 h-3 text-muted-foreground" />
        <span className="text-sm font-medium text-white truncate">{module.title}</span>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-6 py-8 pb-16 space-y-8">
        {/* Module meta */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span
              className="px-3 py-1 rounded-full font-bold uppercase tracking-widest"
              style={{ background: 'rgba(0,168,150,0.1)', border: '1px solid rgba(0,168,150,0.2)', color: '#00A896' }}
            >
              Capítulo 1
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {module.duration} min
            </span>
            <span className="flex items-center gap-1">
              <BarChart2 className="w-3.5 h-3.5" />
              {module.difficulty}
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {module.title}
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">{module.description}</p>
        </div>

        {/* Key concepts chips */}
        <div
          className="p-6 rounded-2xl space-y-4"
          style={{ background: '#1C1F2E', border: '1px solid rgba(138,143,173,0.1)' }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            📌 Conceptos clave
          </h2>
          <div className="flex flex-wrap gap-2">
            {module.keyPoints.map((point, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm font-medium rounded-lg"
                style={{ background: 'rgba(0,168,150,0.08)', border: '1px solid rgba(0,168,150,0.2)', color: '#00A896' }}
              >
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Main content — light surface for readability */}
        <div
          className="p-6 md:p-8 rounded-2xl space-y-4"
          style={{ background: '#1C1F2E', border: '1px solid rgba(138,143,173,0.1)' }}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            📚 Contenido
          </h2>
          <div className="space-y-4">
            {module.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* All concepts */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            💡 Todos los conceptos del módulo
          </h2>
          <div className="flex flex-wrap gap-2">
            {module.concepts.map((concept, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium rounded-full"
                style={{ background: 'rgba(26,31,110,0.4)', border: '1px solid rgba(26,31,110,0.6)', color: '#8A8FAD' }}
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* CTA — fixed on mobile, inline on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <Link
            href={`/modules/${moduleId}/tutor`}
            className="btn-primary flex items-center justify-center gap-2 py-4 text-base"
            style={{ borderRadius: '16px' }}
          >
            <MessageCircle className="w-5 h-5" />
            Hablar con StemBot
          </Link>
          <Link
            href="/dashboard"
            className="btn-secondary flex items-center justify-center gap-2 py-4 text-base"
            style={{ borderRadius: '16px' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
