'use client';

import React from 'react';
import Link from 'next/link';
import { Atom, ArrowRight, Zap, GraduationCap, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-b border-border z-50 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Atom className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-foreground font-sans">
            JóvenesSTEM<span className="text-primary">®</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Características</Link>
          <Link href="#metodologia" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Metodología</Link>
          <Link href="/auth/login" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">Iniciar Sesión</Link>
          <Link 
            href="/auth/register" 
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Registrarse
          </Link>
        </div>

        <Link 
          href="/auth/login" 
          className="md:hidden px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-bold"
        >
          Entrar
        </Link>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
          {/* Network Background Effects */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-40" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}
          />
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-foreground font-sans">
              CONECTANDO CIENCIA <br />
              <span className="text-primary italic">Y FUTURO</span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Explora el universo STEM con ayuda de inteligencia artificial. <br className="hidden md:block" />
              Un tutor personal disponible 24/7 para guiarte en cada paso.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/auth/register"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-md text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center gap-3"
              >
                Iniciar Diagnóstico STEM
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/auth/login"
                className="px-8 py-4 bg-transparent border border-border text-foreground rounded-md text-lg font-bold hover:bg-muted transition-all"
              >
                Tengo cuenta
              </Link>
            </div>
          </div>
        </section>

        {/* Features / Statistics Bar */}
        <section id="features" className="py-24 px-6 bg-secondary/5 border-y border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Aprendizaje Adaptativo</h3>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Respuesta inmediata</p>
              <p className="text-muted-foreground leading-relaxed text-sm">La IA ajusta las explicaciones según tu nivel actual.</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Método Socrático</h3>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Guiado por preguntas</p>
              <p className="text-muted-foreground leading-relaxed text-sm">No te damos las respuestas, te enseñamos a encontrarlas.</p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Disponible 24/7</h3>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">A tu propio ritmo</p>
              <p className="text-muted-foreground leading-relaxed text-sm">Aprende cuando quieras, desde donde quieras.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-border text-center text-muted-foreground text-sm font-medium">
        <p>© 2024 JóvenesSTEM<span className="text-primary">®</span> - Alberto Yépiz | yepzhi.com</p>
      </footer>
    </div>
  );
}
