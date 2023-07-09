import React from "react";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
  query GetUser {
    user(id: 3) {
      email
      name
    }
  }
`;

async function Page() {
  const { data } = await getClient().query({ query });
  console.log(data);
  return <div>{data.user.name}</div>;
}

export default Page;
