import PublicNavbar from "./PublicNavbar";
import LoggedInNavbar from "./LoggedInNavbar";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Navbar() {
  return <PublicNavbar />;
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
