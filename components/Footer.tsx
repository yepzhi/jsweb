'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-10 bg-background border-t border-border mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <a href="/jsweb" className="flex items-center gap-2 no-underline">
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
