"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

import { gql, useSuspenseQuery } from "@apollo/client";

const GET_COMMON_USERS = (projectId: number) => gql`
query CommonUserQuery {
  commonUserQuery(id: ${projectId}) {
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
  const projectId = Number(params.get('projectId'));
  const { data } = useSuspenseQuery(GET_COMMON_USERS(projectId)) as any;
  console.log(data);

  return (
    <>
      <Table variant="simple">
        <TableCaption>Users who have made the most queries!</TableCaption>
        <Thead>
          <Tr>
            <Td><b>Username</b></Td>
            <Td><b>Name</b></Td>
            <Td><b>Email</b></Td>
            <Td><b>projectName</b></Td>
          </Tr>
        </Thead>
        <Tbody>
            {data.commonUserQuery?.map((userQuery: any) => (
              <Tr key={userQuery.userId}>
                <Td>{userQuery.username}</Td>
                <Td>{userQuery.name}</Td>
                <Td>{userQuery.email}</Td>
                <Td>{userQuery.projectName}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
}

export default CommonUserQueries;