'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      const { error } = await signIn(formData.email, formData.password);
      if (error) setError(error.message);
      else router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-5 relative overflow-hidden"
      style={{ background: '#f8f8f7' }}
    >
      {/* Light dot background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(39,126,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-3 mb-5" style={{ textDecoration: 'none' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#277eff' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.53-4.53-9.86-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.53 4.53 9.86 6.54 11.9 4.5z"/>
                <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/>
              </svg>
            </div>
            <span style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: '1.4rem', color: '#0a0a0a' }}>
              JóvenesSTEM<span style={{ color: '#277eff' }}>®</span>
            </span>
          </Link>
          <h1 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.5px', color: '#0a0a0a' }}>
            Bienvenido de vuelta
          </h1>
          <p style={{ color: '#949494', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, marginTop: '4px' }}>
            Panel de Control
          </p>
        </div>

        {/* ── DEMO MODE ────────────────────────────────────────────── */}
        <button
          onClick={() => router.push('/dashboard')}
          className="w-full mb-5 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
          style={{
            background: 'rgba(39,126,255,0.06)',
            border: '1.5px dashed rgba(39,126,255,0.4)',
            color: '#277eff',
          }}
        >
          🚀 Entrar sin cuenta — Modo Demo
          <span style={{ color: '#949494', fontSize: '0.75rem' }}>(sin datos)</span>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: '#e8e8e8' }} />
          <span style={{ color: '#949494', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>o con cuenta</span>
          <div className="flex-1 h-px" style={{ background: '#e8e8e8' }} />
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{ background: '#ffffff', border: '1px solid #e8e8e8', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
        >
          {error && (
            <div
              className="mb-5 p-4 rounded-xl text-sm font-medium flex items-center gap-3"
              style={{ background: 'rgba(255,0,0,0.06)', border: '1px solid rgba(255,0,0,0.2)', color: '#c00' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#c00' }} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a4a4a' }}>
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                disabled={isLoading}
                style={{ borderRadius: '8px', padding: '12px 14px' }}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a4a4a' }}>
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                disabled={isLoading}
                style={{ borderRadius: '8px', padding: '12px 14px' }}
              />
            </div>

            <div className="flex justify-end">
              <Link href="/auth/forgot-password" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#277eff', textDecoration: 'none' }}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full"
              style={{ padding: '14px', fontSize: '1rem', borderRadius: '8px' }}
            >
              {isLoading ? 'Verificando...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="mt-6 pt-5 text-center" style={{ borderTop: '1px solid #e8e8e8' }}>
            <p style={{ fontSize: '0.9rem', color: '#949494' }}>
              ¿No tienes cuenta?{' '}
              <Link href="/auth/register" style={{ color: '#277eff', fontWeight: 700, textDecoration: 'none' }}>
                Regístrate gratis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
