import React from "react";

import ClientComponentExample from "./client-component-example";

import { getClient } from "@/lib/client";
import { getAuthContext } from "@/utils/auth";
import { GetUserProjects } from "@/graphql/queries/Project.graphql";

async function ServerComponentTemplate() {
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
      <br />
      <ClientComponentExample />
    </>
  );
}

export default ServerComponentTemplate;
