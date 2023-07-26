import React from "react";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { TableFrequency } from "@/graphql/queries/Trending.graphql";
import { TableAccessFreq } from "@/graphql/__generated__/graphql";

import TrendingPieChart from "../project/trending/charts/PieChart";

async function GraphTrendingTableFreq({projectId}: {projectId: number}) {
  const tables = await getClient().query({
    query: TableFrequency, 
    variables: {
      pid: projectId, 
    }, 
    context: await getAuthContext(), 
  })

  console.log(tables);

  const pieLabels: string[] = []
  const pieData: number[] = []

  tables.data.tableFrequency.map((tableAccess: TableAccessFreq) => {
    pieLabels.push(tableAccess.table.name);
    pieData.push(tableAccess.frequency);
  })

  return (
    <>
      <div>
        <TrendingPieChart pieData={pieData} pieLabels={pieLabels}/>
      </div>
    </>
  )
}

export default GraphTrendingTableFreq;