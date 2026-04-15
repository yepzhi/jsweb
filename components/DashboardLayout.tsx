'use client';

import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar — fixed left */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pb-28 md:pb-8 bg-background min-w-0">
        {/* Mobile Header */}
        <header className="flex md:hidden items-center justify-between px-4 py-3 sticky top-0 z-40 bg-background border-b border-border">
          <a href="/jsweb" className="flex items-center gap-2 font-bold text-base text-foreground no-underline">
            <img src="/jsweb/images/logo.png" alt="JóvenesSTEM Logo" className="w-6 h-6 object-contain" />
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
