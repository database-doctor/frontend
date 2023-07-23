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
import { M_PLUS_1 } from "next/font/google";

const GET_COMMON_COLUMNS = (projectId: number) => gql`
query CommonColumnQueries {
  commonColumnQueries(projectId: ${projectId}) {
    schemaName
    tableName
    columnTypeName
    columnName
    columnId
  }
}
`;

function CommonColumnQueries() {
  const params = useSearchParams();
  const projectId = 1;// Number(params.get('projectId'));
  const { data } = useSuspenseQuery(GET_COMMON_COLUMNS(projectId)) as any;
  console.log(data);

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
            {data.commonColumnQueries?.map((columnQuery: any) => (
              <Tr key={columnQuery.columnId}>
                <Td>{columnQuery.columnId}</Td>
                <Td>{columnQuery.columnTypeName}</Td>
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

export default CommonColumnQueries;
