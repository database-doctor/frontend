// Without a defiend matcher, this one line applies next-auth
// to the entire project
// export { default } from "next-auth/middleware";

import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // 'withAuth' augments Request with user's token
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);

    if (
      request.nextUrl.pathname.startsWith("/protected") &&
      request.nextauth.token?.role !== "correct-access-role"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Applies next-auth only to matching routes - can be regex
export const config = { matcher: ["/dashboard"] };
