'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  RotateCw, 
  Trophy, 
  Flame, 
  Atom 
} from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Capítulos', icon: BookOpen, href: '/modules' },
  { name: 'Mis Repasos', icon: RotateCw, href: '/repasos' },
  { name: 'Logros', icon: Trophy, href: '/logros' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col bg-background border-r border-border p-6 fixed inset-y-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 mb-12">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
          <Atom className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="text-lg font-bold tracking-tight text-foreground">
          JóvenesSTEM<span className="text-primary">®</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md font-bold transition-colors ${
                isActive 
                  ? 'bg-secondary text-secondary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Streak Widget */}
      <div className="mt-auto pt-8">
        <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-primary/20 transition-colors">
          <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
            <Flame className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
              Racha actual
            </div>
            <div className="text-base font-bold text-foreground">
              7 días 🔥
            </div>
          </div>
        </div>
      </div>

      {/* Profile Bar */}
      <div className="mt-8 pt-4 border-t border-border flex items-center gap-3 px-4 cursor-pointer">
        <div className="w-9 h-9 rounded-full overflow-hidden border border-border">
          <img 
            src="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F13-17%2FHispanic%2F1" 
            alt="Alex C." 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-bold text-foreground">Alex C.</div>
          <div className="text-[11px] text-muted-foreground whitespace-nowrap">
            Nivel 4 • Explorador
          </div>
        </div>
      </div>
    </aside>
  );
}
