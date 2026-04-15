'use client';

import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar — fixed left */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="md:pl-64 pb-28 md:pb-8 min-w-0">
        {/* Mobile Header */}
        <header className="flex md:hidden items-center justify-between px-4 py-3 sticky top-0 z-40 bg-background border-b border-border">
          <a href="/jsweb" className="flex items-center gap-2 font-bold text-base text-foreground no-underline">
            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-primary">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.53-4.53-9.86-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.53 4.53 9.86 6.54 11.9 4.5z"/>
                <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/>
              </svg>
            </div>
            <span className="text-sm">JóvenesSTEM<span className="text-primary">®</span></span>
          </a>
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 bg-[linear-gradient(135deg,_#277eff,_#00a896)]">
            A
          </div>
        </header>

        {/* Page Content */}
        <div className="w-full px-4 md:px-10 py-6 md:py-10 space-y-8 md:space-y-10">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
