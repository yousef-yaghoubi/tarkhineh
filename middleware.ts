import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOption } from "./app/api/auth/[...nextauth]/routeTesti";
export async function middleware(req: NextRequest ) {
  // const session = await getServerSession(authOption)
  
  const isPrivateRoute = req.nextUrl.pathname.startsWith("/login");
  const token = req.cookies.get("next-auth.session-token"); // Check the session token

  if (token && isPrivateRoute) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
