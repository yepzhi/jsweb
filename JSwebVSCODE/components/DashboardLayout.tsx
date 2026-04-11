'use client';

import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import { Atom } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto md:ml-64 pb-24 md:pb-12 bg-background">
        {/* Mobile Header */}
        <header className="flex md:hidden items-center justify-between px-5 py-4 bg-background sticky top-0 z-40 border-b border-border">
          <div className="flex items-center gap-2 font-bold text-lg text-foreground">
            <Atom className="w-6 h-6 text-primary" />
            <span>JóvenesSTEM<span className="text-primary text-sm align-top">®</span></span>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
            <img 
              src="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F18-25%2FHispanic%2F0" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Page Content */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-12 space-y-12">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
