import PublicNavbar from "./PublicNavbar";
import LoggedInNavbar from "./LoggedInNavbar";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

import { GetUserProfile } from "@/graphql/queries/User.graphql";
import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { GetUserProfileQuery } from "@/graphql/__generated__/graphql";

export default async function Navbar() {
  const session = await getServerSession(options);

  if (!session) return <PublicNavbar />;

  const res = await getClient().query({
    query: GetUserProfile,
    context: await getAuthContext(),
  });

  return <LoggedInNavbar data={res.data} />;
}
