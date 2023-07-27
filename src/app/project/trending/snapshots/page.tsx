import { GetProjectName } from "@/graphql/queries/Project.graphql";
import { GetTables } from "@/graphql/queries/Table.graphql";
import PageTitle from "@/components/reusable/PageTitle";
import React from "react";
import { SnapshotContent } from "./SnapshotContent";
import { getAuthContext } from "@/utils/auth";
import { getClient } from "@/lib/client";

const SnapshotsPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }

  const project = await getClient().query({
    query: GetProjectName,
    variables: {
      pid: Number(searchParams?.projectId),
    },
    context: await getAuthContext(),
  });

  const tables = await getClient().query({
    query: GetTables,
    variables: {
      pid: Number(searchParams?.projectId),
    },
    context: await getAuthContext(),
  });

  return (
    <>
      <PageTitle title={`${project.data.project.name} :: Table Snapshots`} />
      <SnapshotContent tables={tables.data.latestSchema.tables} />
    </>
  );
};

export default SnapshotsPage;
