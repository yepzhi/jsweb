'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-10 bg-background border-t border-border mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <a href="/jsweb" className="flex items-center gap-2 no-underline">
          <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-primary">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1" />
              <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.53-4.53-9.86-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.53 4.53 9.86 6.54 11.9 4.5z" />
              <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z" />
            </svg>
          </div>
          <span className="font-['Outfit',sans-serif] font-bold text-[0.95rem] text-foreground">
            JóvenesSTEM<span className="text-primary">®</span>
          </span>
        </a>

        {/* Version */}
        <div className="text-[0.85rem] text-muted-foreground font-medium">
          v1.4
        </div>

        {/* Copyright / Links */}
        <div className="text-[0.8rem] text-muted-foreground text-center">
          © 2026 JóvenesSTEM. Conectando el Futuro.
        </div>
      </div>
    </footer>
  );
}
