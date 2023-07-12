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

const GET_COMMON_QUERIES = (projectId: number) => gql`
query GetCommonQueries {
  commonSqlQueries(projectId: ${projectId}) {
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
  const projectId = 1;// Number(params.get('projectId'));
  const { data } = useSuspenseQuery(GET_COMMON_QUERIES(projectId)) as any;
  console.log(data);

  return (
    <>
      <Table variant="simple">
        <TableCaption>Most common queries made!</TableCaption>
        <Thead>
          <Tr>
            <Td><b>Query Type</b></Td>
            <Td><b>Query Statement</b></Td>
            <Td><b>Project Name</b></Td>
            <Td><b>Issued At</b></Td>
            <Td><b>Error Message</b></Td>
          </Tr>
        </Thead>
        <Tbody>
            {data.commonSqlQueries.map((sqlQuery: any) => (
              <Tr key={sqlQuery.username}>
                <Td>{sqlQuery.queryType}</Td>
                <Td>{sqlQuery.queryStatement}</Td>
                <Td>{sqlQuery.projectName}</Td>
                <Td>{sqlQuery.issuedAt}</Td>
                <Td>{sqlQuery.errorMessage}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <br></br><br></br>
    </>
  );
}

export default CommonSqlQueries;
