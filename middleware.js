import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_ACCESS_SECRET);

export async function middleware(request) {
  const token = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;
  // Rutas públicas
  if (pathname === "/account/login" || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }
  // No existe sesión
  if (!token) {
    const loginUrl = new URL("/account/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }
  try {
    const { payload } = await jwtVerify(token, secret);
    if (payload.type !== "access") {
      throw new Error("Token inválido");
    }
    return NextResponse.next();
  } catch {
    const loginUrl = new URL("/account/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("access_token");
    return response;
  }
}
export const config = {
  matcher: ["/dashboard/:path*"],
};
