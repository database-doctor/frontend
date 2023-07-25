import React from "react";

import Admin from "./Admin";
import PageTitle from "@/components/reusable/PageTitle";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { GetProjectDetails } from "@/graphql/queries/Project.graphql";
import { GetPermissions } from "@/graphql/queries/Permission.graphql";

async function ProjectAdminPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log("Project id is: ", searchParams?.projectId);
  const authContext = await getAuthContext();

  const projectDetails = await getClient().query({
    query: GetProjectDetails,
    variables: {
      pid: Number(searchParams?.projectId) || -1,
    },
    context: authContext,
  });

  const permissions = await getClient().query({
    query: GetPermissions,
    context: authContext,
  });

  return (
    <>
      <PageTitle
        title={"Admin Portal: " + (projectDetails.data.project.name || "")}
      />
      <br />
      <Admin
        projectDetails={projectDetails.data}
        permissions={permissions.data}
      />
    </>
  );
}

export default ProjectAdminPage;
