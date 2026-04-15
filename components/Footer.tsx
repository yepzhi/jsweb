'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer
      className="w-full py-8 px-6 md:px-10"
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e8e8e8',
        marginTop: '40px',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ background: '#277eff' }}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.53-4.53-9.86-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.53 4.53 9.86 6.54 11.9 4.5z" />
              <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: '#0a0a0a',
            }}
          >
            JóvenesSTEM<span style={{ color: '#277eff' }}>®</span>
          </span>
        </div>

        {/* Version */}
        <div
          style={{
            fontSize: '0.85rem',
            color: '#949494',
            fontWeight: 500,
          }}
        >
          v1.1
        </div>

        {/* Copyright / Links */}
        <div
          style={{
            fontSize: '0.8rem',
            color: '#949494',
            textAlign: 'center',
          }}
        >
          © 2026 JóvenesSTEM. Conectando el Futuro.
        </div>
      </div>
    </footer>
  );
}
