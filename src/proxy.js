import { NextResponse } from "next/server";

export function proxy(request) {
  const auth = request.cookies.get("auth"); // server-side cookie

  if (auth.value === "true") {
    return NextResponse.next(); // allow access
  }

  // Not authenticated → redirect
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/addItem",
};
