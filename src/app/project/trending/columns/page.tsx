import React from "react";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { CommonColumnQueries } from "@/graphql/queries/Trending.graphql";

import CommonColumns from "@/components/project/trending/CommonColumnQueries";

async function TrendingColumnsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }
  const commonColumns = await getClient().query({
    query: CommonColumnQueries,
    variables: {
      pid: Number(searchParams?.projectId),
    },
    context: await getAuthContext(),
  });

  return (
    <div>
      <CommonColumns commonColumns={commonColumns.data} />{" "}
    </div>
  );
}

export default TrendingColumnsPage;
