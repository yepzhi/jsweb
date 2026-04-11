'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { signUp } from '@/lib/supabase';

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
        // Redirect to dashboard after successful signup
        router.push('/dashboard?signup=success');
      }
    } catch (err: any) {
      setError(err.message || 'Error al registrarse');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar isAuthenticated={false} />

      <main className="min-h-screen flex items-center justify-center px-4 pt-20 md:pt-0">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="card-base">
            <h1 className="text-3xl font-bold mb-2 text-center">Únete a JóvenesSTEM</h1>
            <p className="text-text-secondary text-center mb-8">Crea tu cuenta para empezar</p>

            {error && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  disabled={isLoading}
                  className="w-full"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
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
                  className="w-full"
                />
              </div>

              {/* Age Select */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium mb-2">
                  Edad
                </label>
                <select
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full"
                >
                  <option value="">Selecciona tu edad</option>
                  <option value="6">6-10 años</option>
                  <option value="11">11-14 años</option>
                  <option value="15">15-18 años</option>
                  <option value="18">18+ años</option>
                </select>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
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
                  className="w-full"
                />
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                  Confirma contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  className="w-full"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creando cuenta...' : 'Crear mi cuenta'}
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-text-secondary text-sm mt-6">
              ¿Ya tienes cuenta?{' '}
              <Link href="/auth/login" className="text-secondary hover:text-accent font-medium">
                Inicia sesión
              </Link>
            </p>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-text-secondary border-opacity-20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-dark-surface text-text-secondary">O continúa con</span>
              </div>
            </div>

            {/* OAuth Buttons */}
            <button
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-text-secondary border-opacity-20 rounded-button hover:bg-text-secondary hover:bg-opacity-5 transition-colors disabled:opacity-50"
            >
              <span>🔵</span>
              Google
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-text-secondary text-xs mt-6">
            Al registrarte, aceptas nuestros términos de servicio y política de privacidad
          </p>
        </div>
      </main>
    </div>
  );
}
