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
    <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 p-6 bg-background border-r border-border">
      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-colors ${
                isActive ? 'bg-muted text-foreground' : 'text-sidebar-foreground hover:bg-muted/50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Streak Widget */}
      <div className="mt-auto pt-6">
        <div className="flex items-center gap-4 p-4 rounded-xl cursor-pointer bg-card border border-border transition-colors hover:border-primary/30">
          <div className="text-[32px] leading-none">🔥</div>
          <div>
            <div className="text-muted-foreground text-[13px] font-medium mb-0.5">
              Racha actual
            </div>
            <div className="text-primary text-xl font-bold">
              7 días
            </div>
          </div>
        </div>
      </div>

      {/* Profile Bar */}
      <div className="mt-6 pt-5 flex items-center gap-3 cursor-pointer border-t border-border group">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0 bg-[linear-gradient(135deg,_#277eff,_#00a896)] group-hover:opacity-90 transition-opacity">
          A
        </div>
        <div className="flex flex-col min-w-0">
          <div className="text-sm font-bold text-foreground">Alex C.</div>
          <div className="text-[11px] truncate text-muted-foreground">
            Nivel 4 • Explorador
          </div>
        </div>
      </div>
    </aside>
  );
}
