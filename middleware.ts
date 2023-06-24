import { NextResponse } from "next/server";
import { NextRequest } from "next/server";



export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const response = NextResponse.next()
  response.cookies.set({
    name: 'user_id',
    value: 'NULL',
  })
  
  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
