import React from "react";

import { getClient } from "@/lib/client";

import Dashboard from "@/components/dashboard/Dashboard";

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
        {/* @ts-ignore */}
        <PageTitle title={"User Dashboard"} />
        <br />
        <DashboardStats />
        <br />
        {/* <DashboardProjects /> */}
      </div>
    </>
  );
}

export default Page;
