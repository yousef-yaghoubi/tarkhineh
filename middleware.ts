import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token") || req.cookies.get("__Secure-next-auth.session-token");
  const tokenName = req.cookies.get('branchs')?.value;

  // جلوگیری از دسترسی به /menu بدون انتخاب branch
  if (!tokenName && req.nextUrl.pathname.startsWith("/menu")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // اگه کاربر لاگین کرده باشه و بخواد بره به /login یا /register، بفرستش به /
  if (token && ["/login"].includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/menu/:path*",
  ],
};
