import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JóvenesSTEM - Tutor IA de STEM',
  description: 'Aprende STEM con inteligencia artificial personal. Disponible 24/7.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased dark">
        {children}
      </body>
    </html>
  );
}
