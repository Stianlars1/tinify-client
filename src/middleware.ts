import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/compress")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}
