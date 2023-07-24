import React from "react";

import { getClient } from "@/lib/client";

import PageTitle from "@/components/reusable/PageTitle";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardProjects from "@/components/dashboard/DashboardProjects";

import { GetUserProjects } from "@/graphql/queries/Project.graphql";

import { getAuthContext } from "@/utils/auth";

async function Page() {
  const res = await getClient().query({
    query: GetUserProjects,
    context: await getAuthContext(),
  });

  return (
    <>
      <div className="padded">
        <PageTitle title={"User Dashboard"} />
        <br />
        <DashboardStats />
        <br />
        <DashboardProjects data={res.data} />
      </div>
    </>
  );
}

export default Page;
