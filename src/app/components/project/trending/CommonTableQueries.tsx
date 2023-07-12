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

const GET_COMMON_TABLES = (projectId: number) => gql`
query CommonTableQueries {
  commonTableQueries(projectId: ${projectId}) {
    tableName
    tableId
    schemaName
  }
}
`;

function CommonTableQueries() {
  const params = useSearchParams();
  const projectId = 1;// Number(params.get('projectId'));
  const { data } = useSuspenseQuery(GET_COMMON_TABLES(projectId)) as any;
  console.log(data);

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
            {data.commonTableQueries?.map((tableQuery: any) => (
              <Tr key={tableQuery.tableId}>
                <Td>{tableQuery.tableId}</Td>
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

export default CommonTableQueries;
