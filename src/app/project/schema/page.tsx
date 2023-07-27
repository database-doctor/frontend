import { GetProjectName } from "@/graphql/queries/Project.graphql";
import PageTitle from "@/components/reusable/PageTitle";
import React from "react";
import { SchemaContent } from "./SchemaContent";
import { getAuthContext } from "@/utils/auth";
import { getClient } from "@/lib/client";

const SchemaPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const project = await getClient().query({
    query: GetProjectName,
    variables: {
      pid: Number(searchParams?.projectId),
    },
    context: await getAuthContext(),
  });

  return (
    <>
      <PageTitle title={`${project.data.project.name} :: Schemas`} />
      <SchemaContent />
    </>
  );
};

export default SchemaPage;
