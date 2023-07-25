import React from "react";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { CommonSqlQueries, CommonColumnQueries, CommonTableQueries, CommonUserQueries } from "@/graphql/queries/Trending.graphql";

import CommonJobs from "@/components/project/trending/CommonSqlQueries";
import CommonColumns from "@/components/project/trending/CommonColumnQueries";
import CommonTables from "@/components/project/trending/CommonTableQueries";
import CommonUsers from "@/components/project/trending/CommonUserQueries";

async function TrendingPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const commonJobs = await getClient().query({
    query: CommonSqlQueries, 
    variables: {
      pid: Number(searchParams?.projectId), 
    }, 
    context: await getAuthContext(),
  });

  const commonColumns = await getClient().query({
    query: CommonColumnQueries,
    variables: {
      pid: Number(searchParams?.projectId), 
    }, 
    context: await getAuthContext(),
  });
  console.log(commonColumns);

  const commonTables = await getClient().query({
    query: CommonTableQueries,
    variables: {
      pid: Number(searchParams?.projectId), 
    }, 
    context: await getAuthContext(),
  });
  console.log(commonTables);

  const commonUsers = await getClient().query({
    query: CommonUserQueries,
    variables: {
      pid: Number(searchParams?.projectId), 
    }, 
    context: await getAuthContext(),
  });
  console.log(commonUsers);

  return (
    <>
      <div>
        <CommonJobs commonJobs={commonJobs.data} />
        <CommonColumns commonColumns={commonColumns.data} />
        <CommonTables commonTables={commonTables.data} />
        <CommonUsers commonUsers={commonUsers.data}/>
        {/* <TableSnapshots /> */}
      </div>
    </>
  );
}

export default TrendingPage;
