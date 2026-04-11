'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  RotateCw, 
  User 
} from 'lucide-react';

const navItems = [
  { name: 'Inicio', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Capítulos', icon: BookOpen, href: '/modules' },
  { name: 'Repasos', icon: RotateCw, href: '/repasos', badge: 3 },
  { name: 'Perfil', icon: User, href: '/profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[72px] bg-background border-t border-border flex justify-around items-center px-4 pb-6 z-50 md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-colors relative ${
              isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <item.icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
            </div>
            <span className={`text-[11px] font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
              {item.name}
            </span>
            
            {item.badge && (
              <div className="absolute -top-1 right-0 bg-destructive text-destructive-foreground text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                {item.badge}
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
