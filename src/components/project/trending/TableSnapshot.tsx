"use client";

import { Table, TableCaption, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { gql, useQuery, useSuspenseQuery } from "@apollo/client";

import React from "react";

const TABLE_SNAPSHOTS = gql`
  query ExampleQuery($table: QueryTableSnapshotInput!) {
    tableSnapshots(table: $table) {
      atTime
      queryCount
      rowCount
      sizeBytes
    }
  }
`;

function TableSnapshots() {
  const { loading, error, data } = useQuery(TABLE_SNAPSHOTS, {
    variables: {
      table: {
        tableId: 1,
        fromTime: "2023-01-01",
        toTime: "2023-12-31",
      },
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <>
      <Table variant="simple">
        <TableCaption>Hourly Table Snapshots</TableCaption>
        <Thead>
          <Tr>
            <Td>
              <b>At Time</b>
            </Td>
            <Td>
              <b>Query Count</b>
            </Td>
            <Td>
              <b>Row Count</b>
            </Td>
            <Td>
              <b>Size in Bytes</b>
            </Td>
          </Tr>
        </Thead>
        <Tbody>
          {data.tableSnapshots?.map((tableSnapshot: any) => (
            <Tr key={tableSnapshot.atTime}>
              <Td>{tableSnapshot.atTime}</Td>
              <Td>{tableSnapshot.queryCount}</Td>
              <Td>{tableSnapshot.rowCount}</Td>
              <Td>{tableSnapshot.sizeBytes}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <br></br>
      <br></br>
    </>
  );
}

export default TableSnapshots;
