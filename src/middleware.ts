import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    // Allow public access to login page
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Check for JWT cookie
    const token = request.cookies.get('jwt')?.value;

    if (!token || token === 'none') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
