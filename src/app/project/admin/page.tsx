import React from "react";

import Admin from "./Admin";
import PageTitle from "@/components/reusable/PageTitle";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { GetProjectDetails } from "@/graphql/queries/Project.graphql";

async function ProjectAdminPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log("Project id is: ", searchParams?.projectId);

  const res = await getClient().query({
    query: GetProjectDetails,
    variables: {
      pid: Number(searchParams?.projectId) || -1,
    },
    context: await getAuthContext(),
  });

  console.log(res);

  return (
    <>
      <PageTitle title={"Admin Portal: " + (res.data.project.name || "")} />
      <br />
      <Admin />
    </>
  );
}

export default ProjectAdminPage;
