import { type NextRequest, NextResponse } from 'next/server';

// Routes that require authentication
const protectedRoutes = ['/dashboard', '/modules', '/repasos', '/profile', '/mapa'];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if path requires authentication
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    // In a real app, we'd check auth tokens from Supabase
    // For now, we'll allow access (demo mode)
    // In production, check: const token = request.cookies.get('auth_token')
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};
