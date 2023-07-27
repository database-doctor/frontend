import Admin from "./Admin";
import { GetPermissions } from "@/graphql/queries/RBAC.graphql";
import { GetProjectDetails } from "@/graphql/queries/Project.graphql";
import { GetSchemaAlerts } from "@/graphql/queries/Alert.graphql";
import { LatestSchema } from "@/graphql/queries/Schema.graphql";
import PageTitle from "@/components/reusable/PageTitle";
import React from "react";
import { getAuthContext } from "@/utils/auth";
import { getClient } from "@/lib/client";

async function ProjectAdminPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }

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

  const latestSchema = await getClient().query({
    query: LatestSchema,
    variables: {
      pid: Number(searchParams?.projectId) || -1,
    },
    context: authContext,
  });

  console.log(latestSchema);

  const latestSchemaId = latestSchema.data.latestSchema.sid;

  const alerts = (
    await getClient().query({
      query: GetSchemaAlerts,
      variables: {
        sid: latestSchemaId,
      },
      context: authContext,
    })
  ).data.allAlerts;

  return (
    <>
      <PageTitle
        title={"Admin Portal :: " + (projectDetails.data.project.name || "")}
      />
      <br />
      <Admin
        projectDetails={projectDetails.data}
        permissions={permissions.data}
        alertData={alerts}
      />
    </>
  );
}

export default ProjectAdminPage;
