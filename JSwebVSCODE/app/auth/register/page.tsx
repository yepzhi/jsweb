'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/supabase';
import { Atom, User, Mail, Lock, Calendar, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setIsLoading(false);
      return;
    }

    try {
      const { data, error } = await signUp(
        formData.email,
        formData.password,
        formData.name,
        parseInt(formData.age)
      );

      if (error) {
        setError(error.message);
      } else {
        router.push('/dashboard?signup=success');
      }
    } catch (err: any) {
      setError(err.message || 'Error al registrarse');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
      {/* Cosmos background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(138,143,173,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      
      <div className="w-full max-w-md relative z-10 animate-fade-in py-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
              style={{ boxShadow: '0 0 20px rgba(0,168,150,0.4)' }}
            >
              <Atom className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              JóvenesSTEM<span className="text-primary">®</span>
            </span>
          </Link>
          <h1 className="text-3xl font-black tracking-tight text-center">Crea tu cuenta</h1>
          <p className="text-muted-foreground font-bold text-sm uppercase tracking-widest mt-1">Únete hoy</p>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-xl shadow-black/[0.03]">
          {error && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm font-bold flex items-center gap-3">
              <span className="w-2 h-2 bg-destructive rounded-full" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Nombre Completo
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-bold placeholder:font-medium"
                />
              </div>
            </div>

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
                  className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-bold placeholder:font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="age" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Edad
              </label>
              <div className="relative group">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-10 py-3.5 bg-background border border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-bold appearance-none"
                >
                  <option value="">Selecciona tu edad</option>
                  <option value="6">6-10 años</option>
                  <option value="11">11-14 años</option>
                  <option value="15">15-18 años</option>
                  <option value="18">18+ años</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                   <ArrowRight className="w-4 h-4 rotate-90" />
                </div>
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
                  className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-bold placeholder:font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Confirmar Contraseña
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-bold placeholder:font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-4 text-base mt-4"
              style={{ borderRadius: '16px' }}
            >
              {isLoading ? 'Creando cuenta...' : 'Registrarme'}
              {!isLoading && <ArrowRight className="w-5 h-5 ml-2" />}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-border text-center">
            <p className="text-sm font-bold text-muted-foreground">
              ¿Ya tienes cuenta?{' '}
              <Link href="/auth/login" className="text-primary hover:underline font-black">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-[10px] font-bold uppercase tracking-widest mt-8 opacity-60">
          Al registrarte, aceptas nuestros términos de servicio
        </p>
      </div>
    </div>
  );
}
