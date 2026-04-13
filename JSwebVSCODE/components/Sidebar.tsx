'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, RotateCw, Trophy, Flame } from 'lucide-react';

const navItems = [
  { name: 'Capítulos', icon: BookOpen, href: '/dashboard' },
  { name: 'Mis Repasos', icon: RotateCw, href: '/repasos', badge: 3 },
  { name: 'Logros', icon: Trophy, href: '/logros' },
  { name: 'Mi Perfil', icon: LayoutDashboard, href: '/profile' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden md:flex w-64 flex-col fixed inset-y-0 p-6"
      style={{
        background: '#ffffff',
        borderRight: '1px solid #e8e8e8',
      }}
    >
      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
              style={
                isActive
                  ? { background: '#e8e8e8', color: '#0a0a0a' }
                  : { color: '#4a4a4a' }
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
              {item.badge && (
                <span
                  className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: '#ff0000', color: '#fff' }}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Streak Widget */}
      <div className="mt-auto pt-6">
        <div
          className="flex items-center gap-4 p-4 rounded-xl cursor-pointer"
          style={{ background: '#fbfaf9', border: '1px solid #e8e8e8' }}
        >
          <div style={{ fontSize: '32px', lineHeight: 1 }}>🔥</div>
          <div>
            <div style={{ color: '#949494', fontSize: '13px', fontWeight: 500, marginBottom: '2px' }}>
              Racha actual
            </div>
            <div style={{ color: '#277eff', fontSize: '20px', fontWeight: 700 }}>
              7 días
            </div>
          </div>
        </div>
      </div>

      {/* Profile Bar */}
      <div
        className="mt-6 pt-5 flex items-center gap-3 cursor-pointer"
        style={{ borderTop: '1px solid #e8e8e8' }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #277eff, #00a896)' }}
        >
          A
        </div>
        <div className="flex flex-col min-w-0">
          <div className="text-sm font-bold text-foreground">Alex C.</div>
          <div className="text-[11px] truncate" style={{ color: '#949494' }}>
            Nivel 4 • Explorador
          </div>
        </div>
      </div>
    </aside>
  );
}
