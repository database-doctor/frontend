"use client";
import React from "react";
import { CommonColumnQueriesQuery } from "@/graphql/__generated__/graphql";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react"

function CommonColumns({commonColumns} : {commonColumns: CommonColumnQueriesQuery}) {
  return (
    <>
      <Table variant="simple">
        <TableCaption>Most commonly queried columns!</TableCaption>
        <Thead>
          <Tr>
            <Td><b>Column Id</b></Td>
            <Td><b>Column Type</b></Td>
            <Td><b>Column Name</b></Td>
            <Td><b>Table Name</b></Td>
            <Td><b>Schema Name</b></Td>
          </Tr>
        </Thead>
        <Tbody>
            {commonColumns.commonColumnQueries?.map((columnQuery: any) => (
              <Tr key={columnQuery.cid}>
                <Td>{columnQuery.cid}</Td>
                <Td>{columnQuery.columnType}</Td>
                <Td>{columnQuery.columnName}</Td>
                <Td>{columnQuery.tableName}</Td>
                <Td>{columnQuery.schemaName}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <br></br><br></br>
    </>
  );
}

export default CommonColumns;
