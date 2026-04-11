'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/supabase';
import { Atom, Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
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
      const { data, error } = await signIn(formData.email, formData.password);

      if (error) {
        setError(error.message);
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
      {/* Network Background Dots */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      <div className="w-full max-w-md relative z-10 animate-fade-in">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Atom className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-foreground">
              JóvenesSTEM<span className="text-primary">®</span>
            </span>
          </Link>
          <h1 className="text-3xl font-black tracking-tight text-foreground">Bienvenido de vuelta</h1>
          <p className="text-muted-foreground font-bold text-sm uppercase tracking-widest mt-1">Panel de Control</p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-xl shadow-black/[0.03]">
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm font-bold flex items-center gap-3">
              <span className="w-2 h-2 bg-destructive rounded-full" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Correo Electrónico
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-bold"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Contraseña
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-bold"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                href="/auth/forgot-password"
                className="text-xs font-black text-primary uppercase tracking-widest hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-primary text-primary-foreground rounded-2xl text-lg font-black shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              {isLoading ? 'Verificando...' : 'Iniciar Sesión'}
              {!isLoading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-border text-center">
            <p className="text-sm font-bold text-muted-foreground">
              ¿No tienes cuenta?{' '}
              <Link href="/auth/register" className="text-primary hover:underline font-black">
                Regístrate ahora
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
