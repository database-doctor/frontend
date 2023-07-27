import { ColumnAccessFreq } from "@/graphql/__generated__/graphql";
import { ColumnFrequency } from "@/graphql/queries/Trending.graphql";
import React from "react";
import TrendingPieChart from "../project/trending/charts/PieChart";
import { getAuthContext } from "@/utils/auth";
import { getClient } from "@/lib/client";

async function GraphTrendingColumFreq({ projectId }: { projectId: number }) {
  const columns = await getClient().query({
    query: ColumnFrequency,
    variables: {
      pid: projectId,
    },
    context: await getAuthContext(),
  });

  const pieLabels: string[] = [];
  const pieData: number[] = [];

  columns.data.columnFrequency.map((columnAccess: ColumnAccessFreq) => {
    pieLabels.push(
      String(columnAccess.column.table.name + "::" + columnAccess.column.name)
    );
    pieData.push(columnAccess.frequency);
  });

  return (
    <>
      <div>
        <TrendingPieChart pieData={pieData} pieLabels={pieLabels} />
      </div>
    </>
  );
}

export default GraphTrendingColumFreq;
