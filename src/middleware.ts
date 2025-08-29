import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userSession = req.cookies.get("user_session");

  // Protected paths
  const protectedPaths = ["/news/manage"];
  const url = req.nextUrl.pathname;

  // If user tries to access protected path without cookie → redirect to login
  if (protectedPaths.some((path) => url.startsWith(path)) && !userSession) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Configure matcher to run middleware only on certain routes
export const config = {
  matcher: ["/news/manage/:path*"],
};
