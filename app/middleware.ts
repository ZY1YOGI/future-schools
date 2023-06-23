import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  return console.log("Testing The middleware");
}

export const config = {
  // matcher solution for public, api, assets and _next exclusion
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};