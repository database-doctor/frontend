"use client";
import React from "react";
import { CommonUserQueriesQuery } from "@/graphql/__generated__/graphql";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react"

function CommonUsers({commonUsers}: {commonUsers: CommonUserQueriesQuery}) {
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
            {commonUsers.commonUserQueries?.map((userQuery: any) => (
              <Tr key={userQuery.uid}>
                <Td>{userQuery.uid}</Td>
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

export default CommonUsers;
