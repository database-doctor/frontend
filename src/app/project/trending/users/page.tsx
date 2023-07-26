import React from "react";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { CommonUserQueries } from "@/graphql/queries/Trending.graphql";

import CommonUsers from "@/components/project/trending/CommonUserQueries";

async function TrendingUsersPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const commonUsers = await getClient().query({
    query: CommonUserQueries,
    variables: {
      pid: Number(searchParams?.projectId),
    },
    context: await getAuthContext(),
  });
  return (
    <div>
      {" "}
      <CommonUsers commonUsers={commonUsers.data} />
    </div>
  );
}

export default TrendingUsersPage;
