'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { signIn } from '@/lib/supabase';

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
        // Redirect to dashboard on successful login
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesión');
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
            <h1 className="text-3xl font-bold mb-2 text-center">Inicia sesión</h1>
            <p className="text-text-secondary text-center mb-8">Bienvenido de vuelta a JóvenesSTEM</p>

            {error && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  autoComplete="email"
                />
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
                  autoComplete="current-password"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-secondary hover:text-accent transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-text-secondary text-sm mt-6">
              ¿No tienes cuenta?{' '}
              <Link href="/auth/register" className="text-secondary hover:text-accent font-medium">
                Regístrate
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
        </div>
      </main>
    </div>
  );
}
