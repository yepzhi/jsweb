import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'JóvenesSTEM — Conectando el Futuro',
  description: 'Descubre tu potencial con diagnóstico STEM y aprendizaje adaptativo con IA. Para jóvenes de 6 a 18 años.',
  keywords: ['STEM', 'inteligencia artificial', 'educación', 'ciencia', 'tecnología', 'México'],
  authors: [{ name: 'SIIP Technology' }],
  openGraph: {
    title: 'JóvenesSTEM — Conectando el Futuro',
    description: 'Diagnóstico STEM personalizado + tutor de IA en español. Para jóvenes mexicanos.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Fonts: Outfit (headlines) + Inter (body) — matching the HTML prototypes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
