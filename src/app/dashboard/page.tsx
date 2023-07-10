import React from "react";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

import Dashboard from "../components/dashboard/Dashboard";

const query = (userId: number) => {
  return gql`
  query GetUser {
    user(id: ${userId}) {
      email
      name
    }
  }
`;
};

async function Page() {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.userId) return;

  const { data } = await getClient().query({
    query: query(session.user.userId),
  });

  return (
    <>
      <div>
        {/* @ts-ignore */}
        <Dashboard userId={session.user.userId} />
      </div>
    </>
  );
}

export default Page;
