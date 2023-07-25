"use client";
import React from "react";
import { CommonTableQueriesQuery } from "@/graphql/__generated__/graphql";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react"

function CommonTables({commonTables}: {commonTables: CommonTableQueriesQuery}) {
  return (
    <>
      <Table variant="simple">
        <TableCaption>Most commonly queried tables!</TableCaption>
        <Thead>
          <Tr>
            <Td><b>Table Id</b></Td>
            <Td><b>Table Name</b></Td>
            <Td><b>Schema Name</b></Td>
          </Tr>
        </Thead>
        <Tbody>
            {commonTables.commonTableQueries?.map((tableQuery: any) => (
              <Tr key={tableQuery.tid}>
                <Td>{tableQuery.tid}</Td>
                <Td>{tableQuery.tableName}</Td>
                <Td>{tableQuery.schemaName}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <br></br><br></br>
    </>
  );
}

export default CommonTables;
