'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Microscope, 
  Bot, 
  ScrollText, 
  School, 
  Zap, 
  GraduationCap 
} from 'lucide-react';

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
              className="font-head font-extrabold text-foreground mb-8 leading-[1.1] tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              }}
            >
              Conectando <span className="text-gradient">Ciencia</span> <br className="hidden md:block" /> y Futuro Estudiantil.
            </h1>

            <p className="text-muted-foreground font-medium mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
              Descubre tu potencial con diagnóstico STEM y aprendizaje adaptativo
              impulsado por Inteligencia Artificial. En español, diseñado para México.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-4">
              <a href="https://yepzhi.com/entrytest" className="btn-primary flex items-center justify-center gap-2" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
                Iniciar Diagnóstico STEM
                <ArrowRight className="w-5 h-5" />
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
        <section id="proceso" className="py-20 md:py-28 px-6 bg-white border-b border-border reveal">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-head font-extrabold text-3xl md:text-5xl text-foreground mb-5 tracking-tight">
                El Ecosistema JóvenesSTEM<span className="text-primary">®</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Una ruta de aprendizaje diseñada para los desafíos del mañana. SIIP NextGen Methodology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
              {[
                {
                  icon: Microscope,
                  title: 'SIIP NextGen',
                  desc: 'Metodología divulgativa basada en competencias. Alineada a NGSS de USA y RENAC de México.',
                },
                {
                  icon: Bot,
                  title: 'IA Adaptativa',
                  desc: 'Aprendizaje personalizado que conecta física, biología y código en tiempo real.',
                },
                {
                  icon: ScrollText,
                  title: 'Certificación Oficial',
                  desc: 'Validación SEP CONOCER EC009. Reconocimiento tangible de habilidades científicas.',
                },
              ].map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={title}
                  className={`p-8 md:p-10 bg-white/50 backdrop-blur-sm border border-blue-100 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_50px_rgba(39,126,255,0.1)] hover:-translate-y-1 group reveal delay-${idx + 1}`}
                >
                  <div className="w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center mb-8 text-primary transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-head font-extrabold text-xl md:text-2xl mb-4 tracking-tight text-foreground">{title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 md:py-28 px-6 bg-background reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-head font-extrabold text-3xl md:text-5xl text-foreground mb-5 tracking-tight">
                Inversión <span className="text-gradient">Accesible</span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto">
                Diseñado para democratizar la educación STEM en México y LATAM.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
              {/* Card 1: Public */}
              <div className="p-8 md:p-10 bg-white/40 backdrop-blur-md border border-blue-100 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm relative overflow-hidden group reveal delay-1">
                <div className="absolute top-0 right-0 p-5">
                  <span className="bg-blue-100/50 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-200/30">Públicas</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center mb-8 text-primary">
                  <School className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-head font-extrabold text-2xl mb-2 text-foreground">Escuelas Públicas</h3>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-head font-extrabold text-foreground tracking-tighter">$0</span>
                  <span className="text-muted-foreground font-bold text-sm">MXN / alum</span>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-muted-foreground mb-12 flex-1 w-full">
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896] flex-shrink-0" /> Licencia completa</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896] flex-shrink-0" /> BlueBook v1 digital</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896] flex-shrink-0" /> Manual Docente</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-[#00a896] flex-shrink-0" /> Certificación Oficial</li>
                </ul>
                <a href="#contacto" className="btn-secondary w-full py-4 text-base font-bold rounded-2xl">Solicitar Plan</a>
              </div>

              {/* Card 2: Fast Track */}
              <div className="p-8 md:p-10 bg-blue-50/30 backdrop-blur-xl border-[3px] border-primary/50 rounded-[3rem] flex flex-col items-center text-center shadow-2xl shadow-primary/5 relative lg:-translate-y-4 z-10 reveal delay-2">
                <div className="absolute top-0 right-0 p-5">
                  <span className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Popular</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center mb-8 text-primary">
                  <Zap className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-head font-extrabold text-2xl mb-2 text-foreground">Fast Track</h3>
                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-5xl font-head font-extrabold text-foreground tracking-tighter">$19</span>
                  <span className="text-muted-foreground font-bold text-sm">MXN / alum</span>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-muted-foreground mb-12 flex-1 w-full">
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> 20 Horas Intensivas</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> BlueBook v1 Físico</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Asesoría Directa</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Certificación RENAC</li>
                </ul>
                <a href="#contacto" className="btn-primary w-full py-5 text-lg font-bold shadow-xl shadow-primary/20 rounded-2xl hover:scale-[1.02]">Agenda Demo</a>
              </div>

              {/* Card 3: Curricular */}
              <div className="p-8 md:p-10 bg-white/40 backdrop-blur-md border border-blue-100 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm relative group overflow-hidden reveal delay-3">
                <div className="absolute top-0 right-0 p-5">
                  <span className="bg-blue-100/50 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">90 Horas</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-100/50 flex items-center justify-center mb-8 text-primary">
                  <GraduationCap className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-head font-extrabold text-2xl mb-2 text-foreground">Curricular</h3>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-head font-extrabold text-foreground tracking-tighter">$39</span>
                  <span className="text-muted-foreground font-bold text-sm">MXN / alum</span>
                </div>
                <ul className="space-y-4 text-sm font-semibold text-muted-foreground mb-12 flex-1 w-full">
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" /> Plan Educativo Anual</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" /> BlueBook v1 Completo</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" /> Formación Docente</li>
                  <li className="flex items-center gap-3 justify-center"><CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" /> Certificación Int.</li>
                </ul>
                <a href="#contacto" className="btn-secondary w-full py-4 text-base font-bold rounded-2xl">Explorar Más</a>
              </div>
            </div>
            <p className="text-center mt-12 text-muted-foreground font-bold text-sm opacity-60">* No incluye costo de material impreso (~$70 MXN)</p>
          </div>
        </section>

        {/* ── Portal del Estudiante ─────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 bg-card">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-head font-extrabold text-3xl md:text-5xl text-foreground mb-6 tracking-tight">
                Tu Portal del <span className="text-gradient">Estudiante</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium mb-10 leading-relaxed">
                Accede a tus repasos, logros y constelaciones de conocimiento desde cualquier dispositivo.
              </p>
              <Link href="/auth/login" className="btn-primary flex items-center justify-center gap-2" style={{ padding: '18px 40px' }}>
                Ir al Portal Personalizado
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Demo mode CTA card */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '3rem',
                  padding: '40px',
                  textAlign: 'center',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto flex items-center justify-center mb-6 text-primary">
                  <Zap className="w-8 h-8 fill-primary" />
                </div>
                <h3 className="font-head font-extrabold text-2xl mb-2 text-foreground">Pruébalo ahora</h3>
                <p className="text-muted-foreground text-sm font-medium mb-8">
                  Entra sin registrarte — explora el dashboard completo y el universo STEM.
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
