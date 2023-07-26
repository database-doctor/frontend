import React from "react";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { CommonSqlQueries } from "@/graphql/queries/Trending.graphql";

import CommonJobs from "@/components/project/trending/CommonSqlQueries";

async function TrendingQueriesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }
  const commonJobs = await getClient().query({
    query: CommonSqlQueries,
    variables: {
      pid: Number(searchParams?.projectId),
    },
    context: await getAuthContext(),
  });
  return (
    <div>
      <CommonJobs commonJobs={commonJobs.data} />
    </div>
  );
}

export default TrendingQueriesPage;
