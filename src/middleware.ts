import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    // Always allow the login page
    if (pathname === '/admin/login' || pathname.startsWith('/admin/login')) {
      return NextResponse.next();
    }

    // Check for the frontend-set auth marker cookie ('rwd_auth').
    // NOTE: The 'jwt' cookie is set by the backend (rankforce-backend.onrender.com),
    // so the browser never sends it to www.rankforce.in — the middleware cannot read it.
    // Instead, after successful OTP verification the login page sets 'rwd_auth=1' itself,
    // and clears it on logout. The actual JWT validation still happens server-side on
    // every API request via the backend's protect middleware.
    const authMarker = request.cookies.get('rwd_auth')?.value;

    if (!authMarker || authMarker !== '1') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
