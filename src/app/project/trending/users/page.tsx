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
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }
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
