"use client";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react"

import { CommonSqlQueriesQuery } from "@/graphql/__generated__/graphql";

function CommonJobs({commonJobs} : {commonJobs: CommonSqlQueriesQuery}) {
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
            {commonJobs.commonSqlQueries.map((sqlQuery: any) => (
              <Tr key={sqlQuery.jid}>
                <Td>{sqlQuery.type}</Td>
                <Td>{sqlQuery.statement}</Td>
                <Td>{sqlQuery.project.name}</Td>
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

export default CommonJobs;
