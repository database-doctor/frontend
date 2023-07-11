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

const GET_COMMON_QUERIES = (projectId: number) => gql`
query GetCommonQueries {
  commonSqlQueries(projectId: ${projectId}) {
    username
    queryType
    queryStatement
    projectName
    issuedAt
    hasError
    finishedAt
    errorMessage
  }
}
`;

function CommonSqlQueries() {
  const params = useSearchParams();
  const projectId = Number(params.get('projectId'));
  const { data } = useSuspenseQuery(GET_COMMON_QUERIES(projectId)) as any;
  console.log(data);

  return (
    <>
      <Table variant="simple">
        <TableCaption>Most common queries made!</TableCaption>
        <Thead>
          <Tr>
            <Td><b>username</b></Td>
            <Td><b>queryType</b></Td>
            <Td><b>queryStatement</b></Td>
            <Td><b>projectName</b></Td>
            <Td><b>issuedAt</b></Td>
            {/* <Td><b>hasError</b></Td>
            <Td><b>finishedAt</b></Td>
            <Td><b>errorMessage</b></Td> */}
          </Tr>
        </Thead>
        <Tbody>
            {data.commonSqlQueries.map((sqlQuery: any) => (
              <Tr key={sqlQuery.username}>
                <Td>{sqlQuery.username}</Td>
                <Td>{sqlQuery.queryType}</Td>
                <Td>{sqlQuery.queryStatement}</Td>
                <Td>{sqlQuery.projectName}</Td>
                <Td>{sqlQuery.issuedAt}</Td>
                {/* <Td>{sqlQuery.hasError}</Td>
                <Td>{sqlQuery.finishedAt}</Td>
                <Td>{sqlQuery.errorMessage}</Td> */}
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
}

export default CommonSqlQueries;