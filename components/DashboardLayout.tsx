'use client';

import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen" style={{ background: '#ffffff' }}>
      {/* Desktop Sidebar — fixed left */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pb-28 md:pb-8 w-full" style={{ background: '#ffffff' }}>
        {/* Mobile Header */}
        <header
          className="flex md:hidden items-center justify-between px-4 py-3 sticky top-0 z-40"
          style={{ background: '#ffffff', borderBottom: '1px solid #e8e8e8' }}
        >
          <div className="flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1rem', color: '#0a0a0a' }}>
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
              style={{ background: '#277eff' }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.53-4.53-9.86-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.53 4.53 9.86 6.54 11.9 4.5z"/>
                <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z"/>
              </svg>
            </div>
            <span style={{ fontSize: '0.9rem' }}>JóvenesSTEM<span style={{ color: '#277eff' }}>®</span></span>
          </div>
          {/* Avatar */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #277eff, #00a896)' }}
          >
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
