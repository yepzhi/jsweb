import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">

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
          <span className="font-['Outfit',sans-serif] font-extrabold text-[1.4rem] text-[#0a0a0a]">
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
          <div className="relative z-10 text-center max-w-4xl mx-auto animate-slide-up">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['NGSS ✓', 'RENAC SEP ✓', 'BlueBook v1 ✓'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    background: '#dbe7fb',
                    border: '1px solid rgba(39,126,255,0.2)',
                    color: '#277eff',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1
              style={{
                fontFamily: '"Outfit", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.8rem, 8vw, 5rem)',
                lineHeight: 1.1,
                letterSpacing: '-2px',
                color: '#0a0a0a',
                marginBottom: '24px',
              }}
            >
              Conectando{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #277eff, #00a896)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Ciencia
              </span>{' '}
              y Futuro.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                color: '#949494',
                maxWidth: '680px',
                margin: '0 auto 40px',
                lineHeight: 1.7,
              }}
            >
              Descubre tu potencial con diagnóstico STEM y aprendizaje adaptativo
              impulsado por Inteligencia Artificial. En español, a tu ritmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://yepzhi.com/entrytest" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                Iniciar Diagnóstico STEM ✦
              </a>
              <Link
                href="#proceso"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#277eff',
                  border: '1px solid #277eff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'background 200ms',
                  background: 'transparent',
                }}
              >
                ¿Cómo funciona?
              </Link>
            </div>
          </div>
        </section>

        {/* ── El Ecosistema STEM ────────────────────────────────────── */}
        <section id="proceso" style={{ padding: '100px 20px', background: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
                El Ecosistema STEM
              </h2>
              <p style={{ color: '#949494', fontSize: '1.1rem' }}>
                Una ruta de aprendizaje diseñada para los desafíos del mañana.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {[
                {
                  icon: '🧪',
                  title: 'Diagnóstico PISA 2025',
                  desc: 'Evaluación integral de habilidades científicas basada en estándares internacionales.',
                },
                {
                  icon: '🤖',
                  title: 'IA Adaptativa',
                  desc: 'Contenido personalizado que evoluciona según tu progreso y áreas de interés.',
                },
                {
                  icon: '🗺️',
                  title: 'Mapas de Conocimiento',
                  desc: 'Visualiza tu universo STEM y descubre las conexiones entre física, código y biología.',
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(39,126,255,0.1)]"
                  style={{
                    background: '#fbfaf9',
                    border: '1px solid #e8e8e8',
                    borderRadius: '16px',
                    padding: '32px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', color: '#277eff', marginBottom: '20px' }}>{icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '12px' }}>{title}</h3>
                  <p style={{ color: '#949494', lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portal del Estudiante ─────────────────────────────────── */}
        <section
          style={{
            background: '#ffffff',
            borderTop: '1px solid #e8e8e8',
            borderBottom: '1px solid #e8e8e8',
            padding: '100px 20px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '40px',
            }}
          >
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px' }}>
                Tu Portal del{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #277eff, #00a896)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Estudiante
                </span>
              </h2>
              <p style={{ color: '#949494', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Accede a tus repasos, logros y constelaciones de conocimiento desde cualquier dispositivo.
              </p>
              <Link href="/auth/login" className="btn-primary" style={{ padding: '14px 28px' }}>
                Ir al Portal →
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
      <footer style={{ padding: '60px 20px', borderTop: '1px solid #e8e8e8', textAlign: 'center' }}>
        <div className="flex justify-center mb-4">
          <a href="/jsweb" className="font-['Outfit',sans-serif] font-extrabold text-[1.2rem] text-[#0a0a0a] no-underline">
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
