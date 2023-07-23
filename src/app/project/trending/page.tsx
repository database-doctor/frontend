import React from "react";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

import CommonSqlQueries from "@/components/project/trending/CommonSqlQueries";
import CommonUserQueries from "@/components/project/trending/CommonUserQueries";
import CommonColumnQueries from "@/components/project/trending/CommonColumnQueries";
import CommonTableQueries from "@/components/project/trending/CommonTableQueries";
import TableSnapshots from "@/components/project/trending/TableSnapshot";

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

  // if (!session || !session.user || !session.user.userId) return;

  // const { data } = await getClient().query({
  //   query: query(session.user.userId),
  // });

  return (
    <>
      <div>
        <CommonSqlQueries />
        <CommonColumnQueries />
        <CommonTableQueries />
        <CommonUserQueries />
        <TableSnapshots />
      </div>
    </>
  );
}

export default Page;
