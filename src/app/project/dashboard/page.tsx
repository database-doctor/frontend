import React from "react";

import PageTitle from "@/components/reusable/PageTitle";

import DashboardCard from "./DashboardCard";
import Flexed from "./Flexed";
import GraphTrendingColumFreq from "@/components/dashboard/GraphTrendingColumnFreq";
import GraphTrendingTableFreq from "@/components/dashboard/GraphTrendingTableFreq";
import { Dashboard } from "@/graphql/queries/Dashboard.graphql";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";

async function ProjectDashboardPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }
  const projectId = Number(searchParams.projectId);

  const dashboardData = await getClient().query({
    query: Dashboard,
    context: await getAuthContext(),
    variables: {
      pid: projectId,
    },
  });

  return (
    <>
      <PageTitle
        title={`Dashboard: ${dashboardData.data.project.name || ""}`}
      />
      <br />
      <div></div>
      <Flexed>
        <DashboardCard
          title={"Frequently Queried Columns"}
          styles={{ width: "50%", marginRight: 5 }}
        >
          {/* @ts-ignore */}
          <GraphTrendingColumFreq projectId={projectId} />
        </DashboardCard>
        <DashboardCard
          title={"Trending Tables"}
          styles={{ width: "50%", marginRight: 5 }}
        >
          {/* @ts-ignore */}
          <GraphTrendingTableFreq projectId={projectId} />
        </DashboardCard>
      </Flexed>
    </>
  );
}

export default ProjectDashboardPage;
