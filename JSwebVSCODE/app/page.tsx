import React from 'react';
import Link from 'next/link';
import { Atom, ArrowRight, Zap, GraduationCap, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-border z-50 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <Atom className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-black tracking-tighter text-foreground font-sans">
            JóvenesSTEM<span className="text-primary">®</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Características</Link>
          <Link href="#metodologia" className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Metodología</Link>
          <Link href="/auth/login" className="text-sm font-bold text-foreground hover:text-primary transition-colors">Iniciar Sesión</Link>
          <Link 
            href="/auth/register" 
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95"
          >
            Registrarse
          </Link>
        </div>

        <Link 
          href="/auth/login" 
          className="md:hidden px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-bold"
        >
          Entrar
        </Link>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
          {/* Network Background Effects */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.05]" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
            }}
          />
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground font-sans">
              CONECTANDO CIENCIA <br />
              <span className="text-primary uppercase">y futuro</span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold tracking-tight">
              Explora el universo STEM con ayuda de inteligencia artificial. <br className="hidden md:block" />
              Un tutor personal disponible 24/7 para guiarte en cada paso.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-6">
              <Link 
                href="/auth/register"
                className="group px-10 py-4.5 bg-primary text-primary-foreground rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-primary/30 flex items-center gap-3 active:scale-95"
              >
                Iniciar Diagnóstico STEM
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/auth/login"
                className="px-10 py-4.5 bg-white border border-border text-foreground rounded-2xl text-xl font-black hover:bg-muted transition-all active:scale-95 shadow-sm"
              >
                Tengo cuenta
              </Link>
            </div>
          </div>
        </section>

        {/* Features / Statistics Bar */}
        <section id="features" className="py-24 px-6 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Aprendizaje Adaptativo</h3>
              <p className="text-primary text-[10px] uppercase tracking-widest font-black bg-primary/5 px-3 py-1 rounded-full">Respuesta inmediata</p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">La IA ajusta las explicaciones según tu nivel actual.</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Método Socrático</h3>
              <p className="text-primary text-[10px] uppercase tracking-widest font-black bg-primary/5 px-3 py-1 rounded-full">Guiado por preguntas</p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">No te damos las respuestas, te enseñamos a encontrarlas.</p>
            </div>

            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Disponible 24/7</h3>
              <p className="text-primary text-[10px] uppercase tracking-widest font-black bg-primary/5 px-3 py-1 rounded-full">A tu propio ritmo</p>
              <p className="text-muted-foreground leading-relaxed text-base font-medium">Aprende cuando quieras, desde donde quieras.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-border text-center text-muted-foreground text-sm font-bold uppercase tracking-widest opacity-80">
        <p>© 2024 JóvenesSTEM<span className="text-primary">®</span> - Alberto Yépiz | yepzhi.com</p>
      </footer>
    </div>
  );
}
