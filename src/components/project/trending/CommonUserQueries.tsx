"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react"

import { gql, useSuspenseQuery } from "@apollo/client";

const GET_COMMON_USERS = (projectId: number) => gql`
query CommonUserQuery {
  commonUserQueries(id: ${projectId}) {
    username
    userId
    name
    email
    createdAt
  }
}
`;

function CommonUserQueries() {
  const params = useSearchParams();
  const projectId = 1;// Number(params.get('projectId'));
  const { data } = useSuspenseQuery(GET_COMMON_USERS(projectId)) as any;
  console.log(data);

  return (
    <>
      <Table variant="simple">
        <TableCaption>Users who have made the most queries!</TableCaption>
        <Thead>
          <Tr>
            <Td><b>User Id</b></Td>
            <Td><b>Username</b></Td>
            <Td><b>Name</b></Td>
            <Td><b>Email</b></Td>
          </Tr>
        </Thead>
        <Tbody>
            {data.commonUserQueries?.map((userQuery: any) => (
              <Tr key={userQuery.userId}>
                <Td>{userQuery.userId}</Td>
                <Td>{userQuery.username}</Td>
                <Td>{userQuery.name}</Td>
                <Td>{userQuery.email}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <br></br><br></br>
    </>
  );
}

export default CommonUserQueries;
