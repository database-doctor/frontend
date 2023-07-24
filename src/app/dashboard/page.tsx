import React from "react";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

import Dashboard from "@/components/dashboard/Dashboard";

import PageTitle from "@/components/reusable/PageTitle";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardProjects from "@/components/dashboard/DashboardProjects";

import { GetUserProjects } from "@/graphql/queries/Project.graphql";

async function Page() {
  const session = await getServerSession(options);

  if (!session?.user?.token) return;

  const res = await getClient().query({
    query: GetUserProjects,
    context: {
      headers: {
        authorization: `Bearer ${session.user.token}`,
      },
    },
  }); // TODO : Document this example

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
