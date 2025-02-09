import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest ) {
  // const session = await getServerSession(authOption)
  
  const isPrivateRoute = req.nextUrl.pathname.startsWith("/login");
  const token = await req.cookies.get("next-auth.session-token"); // Check the session token
  const Menu = req.nextUrl.pathname.startsWith("/menu")
  const tokenName = req.cookies.get('branchs')?.value

  if(!tokenName && Menu){
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  if (token && isPrivateRoute) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
