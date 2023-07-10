import React from "react";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

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
  // console.log(data);
  return (
    <>
      <div>{data.user.name}</div>
      <div>{data.user.email}</div>
    </>
  );
}

export default Page;
