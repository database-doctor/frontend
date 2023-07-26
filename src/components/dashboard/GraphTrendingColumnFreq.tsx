import React from "react";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { ColumnFrequency } from "@/graphql/queries/Trending.graphql";
import { ColumnAccessFreq } from "@/graphql/__generated__/graphql";

import TrendingPieChart from "../project/trending/charts/PieChart";

async function GraphTrendingColumFreq({projectId}: {projectId: number}) {
  const columns = await getClient().query({
    query: ColumnFrequency, 
    variables: {
      pid: projectId, 
    }, 
    context: await getAuthContext(), 
  })

  console.log(columns);

  const pieLabels: string[] = []
  const pieData: number[] = []

  columns.data.columnFrequency.map((columnAccess: ColumnAccessFreq) => {
    pieLabels.push(columnAccess.column.name + "::" + columnAccess.column.table.name);
    pieData.push(columnAccess.frequency);
  })

  return (
    <>
      <div>
        <TrendingPieChart pieData={pieData} pieLabels={pieLabels}/>
      </div>
    </>
  )
}

export default GraphTrendingColumFreq;