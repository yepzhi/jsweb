'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import modules from '@/public/data/modules.json';

export default function ModuleContent() {
  const params = useParams();
  const moduleId = params['id'] as string;
  const [readTime, setReadTime] = useState(0);

  // Find module
  const module = modules.chapters
    .flatMap((ch) => ch.modules)
    .find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Navbar isAuthenticated={true} />
        <div className="flex items-center justify-center h-96">
          <p className="text-text-secondary">Módulo no encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg pb-20">
      <Navbar isAuthenticated={true} />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent mb-4"
          >
            ← Volver
          </Link>
          <h1 className="text-5xl font-bold mb-4">{module.title}</h1>
          <p className="text-xl text-text-secondary">{module.description}</p>
        </div>

        {/* Content with light background for readability */}
        <div className="bg-dark-surface rounded-lg p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            {/* Key Concepts */}
            <div className="mb-8 pb-8 border-b border-text-secondary border-opacity-20">
              <h2 className="text-2xl font-bold mb-4">📌 Conceptos clave</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {module.keyPoints.map((point, i) => (
                  <div
                    key={i}
                    className="p-3 bg-primary/20 border border-primary rounded-lg text-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="mb-8 pb-8 border-b border-text-secondary border-opacity-20">
              <h2 className="text-2xl font-bold mb-4">📚 Contenido</h2>
              <div className="prose-p:mb-4 prose-p:leading-relaxed">
                {module.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-text-primary leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Conceptos */}
            <div>
              <h2 className="text-2xl font-bold mb-4">💡 Conceptos en este módulo</h2>
              <div className="flex flex-wrap gap-2">
                {module.concepts.map((concept, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Tutor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href={`/modules/${moduleId}/tutor`}
            className="block"
          >
            <button className="w-full btn-primary">
              🤖 Hablar con StemBot →
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="w-full btn-secondary">
              ← Volver al Dashboard
            </button>
          </Link>
        </div>

        {/* Info */}
        <div className="mt-8 p-6 bg-dark-surface rounded-lg">
          <div className="flex items-center justify-between text-text-secondary text-sm">
            <span>⏱️ Duración aproximada: {module.duration} minutos</span>
            <span>📊 Dificultad: {module.difficulty}</span>
          </div>
        </div>
      </main>
    </div>
  );
}
