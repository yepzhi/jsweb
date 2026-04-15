'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, RotateCw, User } from 'lucide-react';

const navItems = [
  { name: 'Inicio', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Capítulos', icon: BookOpen, href: '/modules' },
  { name: 'Repasos', icon: RotateCw, href: '/repasos', badge: 3 },
  { name: 'Perfil', icon: User, href: '/profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex justify-around items-center px-4 z-50 md:hidden"
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e8e8e8',
        paddingTop: '12px',
        paddingBottom: '24px',
        height: '72px',
      }}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 relative"
            style={{ color: isActive ? '#277eff' : '#949494', textDecoration: 'none' }}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span style={{ fontSize: '11px', fontWeight: 500 }}>{item.name}</span>
            {item.badge && (
              <div
                className="absolute -top-1 right-0 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                style={{ background: '#ff0000', color: '#fff' }}
              >
                {item.badge}
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
