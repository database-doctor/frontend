import ClientComponentExample from "./client-component-example";
import { GetUserProjects } from "@/graphql/queries/Project.graphql";
import React from "react";
import { getAuthContext } from "@/utils/auth";
import { getClient } from "@/lib/client";

async function ServerComponentTemplate({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log("Search params: ", searchParams);

  // * REQUEST THAT DOES NOT REQUIRE AUTHORIZATION HEADER
  // * (commented out because this specific query requires authorization)
  // const res = await getClient().query({
  //   query: GetUserProjects,
  // });

  // * REQUEST THAT REQUIRES AUTHORIZATION HEADER
  const res2 = await getClient().query({
    query: GetUserProjects,
    context: await getAuthContext(),
  });

  return (
    <>
      <div>ServerComponentTemplate</div>
      <div>{JSON.stringify(res2)}</div>
      <div>
        The project id is: {searchParams?.projectId}. This was retrieved by
        adding the searchParams prop to the server component. You can use this
        to make your gql queries.
      </div>
      <br />
      <ClientComponentExample />
    </>
  );
}

export default ServerComponentTemplate;
