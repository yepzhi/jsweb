'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar isAuthenticated={false} />

      <main className="pt-20 md:pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Tu tutor personal de{' '}
              <span className="text-gradient">STEM</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Aprende ciencia, tecnología y programación con inteligencia artificial.
              <br />
              <span className="text-secondary font-medium">Disponible 24/7, en español, a tu ritmo.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Link
                href="/auth/register"
                className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white font-bold rounded-button text-lg hover:shadow-2xl hover:shadow-secondary/50 transition-all transform hover:scale-105"
              >
                Comenzar Gratis
              </Link>
              <Link
                href="/auth/login"
                className="px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-button text-lg hover:bg-secondary hover:text-white transition-all"
              >
                Tengo cuenta
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  icon: '🤖',
                  title: 'Tutor IA Inteligente',
                  description: 'Aprende con StemBot, un tutor personal que usa el método socrático',
                },
                {
                  icon: '🎓',
                  title: 'Contenido Certificado',
                  description: 'Alineado con NGSS y normas educativas mexicanas (RENAC)',
                },
                {
                  icon: '🚀',
                  title: 'A Tu Ritmo',
                  description: 'Aprende a tu propio ritmo con adaptación inteligente',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="card-base hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-dark-surface">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">¿Cómo funciona?</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Lee el contenido', description: 'Aprende con videos y textos del BlueBook' },
                { step: '2', title: 'Habla con StemBot', description: 'Conversa naturalmente (voz) o escribe' },
                { step: '3', title: 'Descubre la respuesta', description: 'StemBot te guía con preguntas (método socrático)' },
                { step: '4', title: 'Repasa inteligentemente', description: 'Sistema adaptativo te recuerda qué estudiar' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para empezar tu viaje por STEM?
          </h2>
          <Link
            href="/auth/register"
            className="inline-block px-10 py-4 bg-secondary text-white font-bold rounded-button text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Crear Cuenta Gratis
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-text-secondary border-opacity-10 py-8 text-center text-text-secondary text-sm">
        <p>© 2024 JóvenesSTEM® - Alberto Yépiz | yepzhi.com</p>
      </footer>
    </div>
  );
}
