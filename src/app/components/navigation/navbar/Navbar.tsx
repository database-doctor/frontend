import PublicNavbar from "./PublicNavbar";
import LoggedInNavbar from "./LoggedInNavbar";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getClient } from "@/lib/client";

export default async function Navbar() {
  const session = await getServerSession(options);

  return (
    <>
      {session && session.user?.userId ? (
        <LoggedInNavbar userId={session.user.userId} />
      ) : (
        <PublicNavbar />
      )}
    </>
  );
}
