import { CommonTableQueries } from "@/graphql/queries/Trending.graphql";
import CommonTables from "@/components/project/trending/CommonTableQueries";
import React from "react";
import { getAuthContext } from "@/utils/auth";
import { getClient } from "@/lib/client";

async function TrendingTablesPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }
  const commonTables = await getClient().query({
    query: CommonTableQueries,
    variables: {
      pid: Number(searchParams?.projectId),
    },
    context: await getAuthContext(),
  });
  return (
    <div>
      {" "}
      <CommonTables commonTables={commonTables.data} />
    </div>
  );
}

export default TrendingTablesPage;
