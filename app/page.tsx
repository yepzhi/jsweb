'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">

      {/* ── Navbar ─────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
        style={{
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e8e8e8',
        }}
      >
        <a href="/jsweb" className="flex items-center gap-2 no-underline">
          <span className="font-sans font-black text-[1.4rem] text-[#0a0a0a] tracking-tighter">
            JóvenesSTEM<span className="text-primary">®</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#949494] hover:text-[#0a0a0a] font-medium text-[0.95rem] transition-colors cursor-pointer border-0 bg-transparent">
              Platform
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-180">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-4 w-64 bg-white border border-[#e8e8e8] rounded-xl shadow-[0_12px_40px_rgba(39,126,255,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
              <a href="https://yepzhi.com/jovenesstem" className="block px-4 py-2 hover:bg-[#f8f8f7] rounded-lg text-[0.9rem] text-[#0a0a0a] no-underline">JóvenesSTEM Analytics Data</a>
              <a href="#proceso" className="block px-4 py-2 hover:bg-[#f8f8f7] rounded-lg text-[0.9rem] text-[#0a0a0a] no-underline">Methodology</a>
              <a href="#info" className="block px-4 py-2 hover:bg-[#f8f8f7] rounded-lg text-[0.9rem] text-[#0a0a0a] no-underline">More info+</a>
              <a href="#author" className="block px-4 py-2 hover:bg-[#f8f8f7] rounded-lg text-[0.9rem] text-[#0a0a0a] no-underline">Author</a>
              <a href="https://yepzhi.com/jovenesstem" className="block px-4 py-2 hover:bg-[#f8f8f7] rounded-lg text-[0.9rem] text-[#277eff] font-medium no-underline">Explore JóvenesSTEM Site →</a>
            </div>
          </div>
          <a href="https://yepzhi.com/entrytest" className="text-[#949494] hover:text-[#0a0a0a] font-medium text-[0.95rem] no-underline transition-colors">
            Get Tested
          </a>
          <a href="#pricing" className="text-[#949494] hover:text-[#0a0a0a] font-medium text-[0.95rem] no-underline transition-colors">
            Pricing
          </a>
          <Link href="/auth/login" className="btn-primary px-5 py-2.5 text-[0.9rem]">
            Book a Demo
          </Link>
        </div>



        <Link href="/auth/login" className="md:hidden btn-primary" style={{ padding: '10px 18px', fontSize: '0.875rem' }}>
          Entrar
        </Link>
      </nav>

      <main>
        {/* ── Hero Section ──────────────────────────────────────────── */}
        <section
          className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 overflow-hidden"
          style={{
            background: '#ffffff',
          }}
        >
          {/* Network dot background — subtle on white */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(39,126,255,0.08) 1px, transparent 0)',
              backgroundSize: '40px 40px',
              opacity: 0.5,
            }}
          />

          {/* SVG path decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <path d="M100,200 Q400,100 800,350" stroke="rgba(39,126,255,0.08)" strokeWidth="2" fill="none"/>
              <path d="M900,100 Q600,400 200,500" stroke="rgba(0,168,150,0.06)" strokeWidth="2" fill="none"/>
              <circle cx="100" cy="200" r="4" fill="#277eff" opacity="0.2"/>
              <circle cx="800" cy="350" r="5" fill="#277eff" opacity="0.15"/>
              <circle cx="200" cy="500" r="3" fill="#00a896" opacity="0.15"/>
            </svg>
          </div>

          {/* Hero content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto animate-slide-up">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['NGSS Certified', 'RENAC SEP Validated', 'BlueBook v1'].map((badge) => (
                <span
                  key={badge}
                  className="bg-primary/5 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-[0.65rem] font-black uppercase tracking-widest"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1
              className="font-sans font-black text-foreground mb-8 leading-[1.05] tracking-[-0.04em]"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
              }}
            >
              Conectando <span className="text-gradient">Ciencia</span> <br className="hidden md:block" /> y Futuro Estudiantil.
            </h1>

            <p className="text-muted-foreground font-medium mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
              Descubre tu potencial con diagnóstico STEM y aprendizaje adaptativo
              impulsado por Inteligencia Artificial. En español, diseñado para México.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-4">
              <a href="https://yepzhi.com/entrytest" className="btn-primary" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
                Iniciar Diagnóstico STEM ✦
              </a>
              <Link
                href="#proceso"
                className="btn-secondary"
                style={{ padding: '20px 48px', fontSize: '1.1rem' }}
              >
                ¿Cómo funciona?
              </Link>
            </div>
          </div>
        </section>

        {/* ── El Ecosistema JóvenesSTEM ────────────────────────────── */}
        <section id="proceso" className="py-24 md:py-32 px-6 bg-white border-b border-border reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-sans font-black text-4xl md:text-6xl text-foreground mb-6 tracking-tight">
                El Ecosistema JóvenesSTEM<span className="text-primary">®</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto">
                Una ruta de aprendizaje diseñada para los desafíos del mañana. SIIP NextGen Methodology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  icon: '🧪',
                  title: 'SIIP NextGen',
                  desc: 'Metodología divulgativa basada en competencias. Alineada a NGSS de USA y RENAC de México.',
                },
                {
                  icon: '🤖',
                  title: 'IA Adaptativa',
                  desc: 'Aprendizaje personalizado que conecta física, biología y código en tiempo real.',
                },
                {
                  icon: '📜',
                  title: 'Certificación Oficial',
                  desc: 'Validación SEP CONOCER EC009. Reconocimiento tangible de habilidades científicas.',
                },
              ].map(({ icon, title, desc }, idx) => (
                <div
                  key={title}
                  className={`p-10 bg-card border border-border rounded-3xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 group reveal delay-${idx + 1}`}
                >
                  <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
                  <h3 className="font-black text-xl mb-4 tracking-tight">{title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing Section ────────────────────────────────────────── */}
        <section id="pricing" className="py-24 md:py-32 px-6 bg-background reveal">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-sans font-black text-4xl md:text-6xl text-foreground mb-6 tracking-tight">
                Inversión <span className="text-gradient">Accesible</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto">
                Diseñado para democratizar la educación STEM en México y LATAM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Public */}
              <div className="p-10 bg-white border border-border rounded-[2.5rem] flex flex-col items-center text-center shadow-sm relative overflow-hidden group reveal delay-1">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-[#00a896]/10 text-[#00a896] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Públicas</span>
                </div>
                <div className="text-5xl mb-6">🏫</div>
                <h3 className="font-black text-2xl mb-2">Escuelas Públicas</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-foreground">$0</span>
                  <span className="text-muted-foreground font-bold text-sm">MXN / alum</span>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-muted-foreground mb-10 flex-1">
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896]" /> Licencia de uso completa</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896]" /> BlueBook v1 digital</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896]" /> Manual del Docente</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896]" /> Certificación Oficial</li>
                </ul>
                <a href="#contacto" className="btn-secondary w-full py-4 text-base font-bold">Solicitar Plan</a>
              </div>

              {/* Card 2: Fast Track */}
              <div className="p-10 bg-white border-[3px] border-primary rounded-[2.5rem] flex flex-col items-center text-center shadow-2xl shadow-primary/10 relative scale-105 z-10 reveal delay-2">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Popular</span>
                </div>
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="font-black text-2xl mb-2">Fast Track</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black text-foreground">$19</span>
                  <span className="text-muted-foreground font-bold text-sm">MXN / alum</span>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-muted-foreground mb-10 flex-1">
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-primary" /> 20 Horas Intensivas</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-primary" /> BlueBook v1 Físico</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-primary" /> Asesoría Directa</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-primary" /> Certificación RENAC</li>
                </ul>
                <a href="#contacto" className="btn-primary w-full py-4 text-base font-bold">Agenda Demo</a>
              </div>

              {/* Card 3: Curricular */}
              <div className="p-10 bg-white border border-border rounded-[2.5rem] flex flex-col items-center text-center shadow-sm relative group overflow-hidden reveal delay-3">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-muted text-muted-foreground text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">90 Horas</span>
                </div>
                <div className="text-5xl mb-6">🎓</div>
                <h3 className="font-black text-2xl mb-2">Curricular</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-foreground">$39</span>
                  <span className="text-muted-foreground font-bold text-sm">MXN / alum</span>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-muted-foreground mb-10 flex-1">
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground" /> Plan Educativo Anual</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground" /> BlueBook v1 Completo</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground" /> Formación Docente</li>
                  <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground" /> Certificación Int.</li>
                </ul>
                <a href="#contacto" className="btn-secondary w-full py-4 text-base font-bold">Explorar Más</a>
              </div>
            </div>
            <p className="text-center mt-12 text-muted-foreground font-bold text-sm opacity-60">* No incluye costo de material impreso (~$70 MXN)</p>
          </div>
        </section>

        {/* ── Portal del Estudiante ─────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 bg-card">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-sans font-black text-4xl md:text-6xl text-foreground mb-8 tracking-tight">
                Tu Portal del <span className="text-gradient">Estudiante</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium mb-12 leading-relaxed">
                Accede a tus repasos, logros y constelaciones de conocimiento desde cualquier dispositivo.
              </p>
              <Link href="/auth/login" className="btn-primary" style={{ padding: '18px 40px' }}>
                Ir al Portal Personalizado →
              </Link>
            </div>

            {/* Demo mode CTA card */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '20px',
                  padding: '32px',
                  textAlign: 'center',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                }}
              >
                <p style={{ fontSize: '3rem', marginBottom: '16px' }}>🚀</p>
                <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>Pruébalo ahora</h3>
                <p style={{ color: '#949494', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Entra sin registrarte — explora el dashboard completo.
                </p>
                <Link
                  href="/dashboard"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
                    background: 'rgba(39,126,255,0.08)',
                    border: '1px dashed rgba(39,126,255,0.4)',
                    borderRadius: '8px',
                    color: '#277eff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                  }}
                >
                  Modo Demo — sin datos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="py-20 px-6 bg-white border-t border-border text-center">
        <div className="flex justify-center mb-8">
          <a href="/jsweb" className="font-sans font-black text-2xl text-[#0a0a0a] no-underline tracking-tighter">
            JóvenesSTEM<span className="text-primary">®</span>
          </a>
        </div>
        <p style={{ color: '#949494', fontSize: '0.875rem' }}>
          © 2026 SIIP Technology. Conectando la próxima generación de líderes STEM. v1.4
        </p>
      </footer>
    </div>
  );
}
