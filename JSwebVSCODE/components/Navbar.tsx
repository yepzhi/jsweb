'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  isAuthenticated: boolean;
  userName?: string;
  onLogout?: () => void;
}

export default function Navbar({
  isAuthenticated,
  userName,
  onLogout,
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  const navItems = isAuthenticated
    ? [
        { href: '/dashboard', label: 'Dashboard', icon: '🏠' },
        { href: '/modules', label: 'Módulos', icon: '📚' },
        { href: '/repasos', label: 'Repasos', icon: '📝' },
        { href: '/profile', label: 'Perfil', icon: '👤' },
      ]
    : [];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-dark-surface border-b border-text-secondary border-opacity-10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gradient">
            <span className="text-2xl">🚀</span>
            <span>JóvenesSTEM</span>
          </Link>

          {/* Nav Items */}
          {isAuthenticated && (
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    transition-colors pb-2 border-b-2
                    ${
                      isActive(item.href)
                        ? 'border-secondary text-secondary'
                        : 'border-transparent text-text-secondary hover:text-text-primary'
                    }
                  `}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {isAuthenticated && (
              <>
                <span className="text-text-secondary text-sm">
                  Hola, {userName || 'Estudiante'}
                </span>
                <button
                  onClick={onLogout}
                  className="px-4 py-2 bg-red-600/20 text-red-400 rounded-button hover:bg-red-600/30 transition-colors text-sm"
                >
                  Salir
                </button>
              </>
            )}
            {!isAuthenticated && (
              <Link
                href="/auth/login"
                className="px-6 py-2 bg-secondary text-white rounded-button hover:bg-opacity-90 transition-all"
              >
                Inicia sesión
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      {isAuthenticated && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-surface border-t border-text-secondary border-opacity-10 z-40">
          <div className="flex items-center justify-around px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center gap-1 py-3 px-4 text-xs transition-colors
                  ${
                    isActive(item.href)
                      ? 'text-secondary'
                      : 'text-text-secondary hover:text-text-primary'
                  }
                `}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Mobile top navbar for non-authenticated pages */}
      {!isAuthenticated && (
        <nav className="md:hidden fixed top-0 left-0 right-0 bg-dark-surface border-b border-text-secondary border-opacity-10 z-40">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="text-xl font-bold text-gradient flex items-center gap-2">
              <span>🚀</span>
              <span>JóvenesSTEM</span>
            </Link>
            <Link
              href="/auth/login"
              className="text-sm text-secondary hover:text-accent transition-colors"
            >
              Iniciar
            </Link>
          </div>
        </nav>
      )}

      {/* Spacer for mobile */}
      {isAuthenticated && <div className="h-20 md:h-0" />}
    </>
  );
}
