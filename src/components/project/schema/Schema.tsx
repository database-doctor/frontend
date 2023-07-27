"use client";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { GetSchema } from "@/graphql/queries/Schema.graphql";
import { getBearerFromToken } from "@/utils/clientauth";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";

export const SchemaTable = ({
  name,
  columns,
}: {
  name: string;
  columns: any[];
}) => {
  return (
    <>
      <Heading as="h3" size="md" mb="1em">
        {name}
      </Heading>
      <TableContainer bg={"gray.900"} p={0.8} borderRadius={"0.8em"}>
        <Table variant="simple">
          <Thead bg="gray.800">
            <Tr>
              <Td>
                <b>Column Name</b>
              </Td>
              <Td>
                <b>Column Type</b>
              </Td>
            </Tr>
          </Thead>
          <Tbody>
            {columns.map((column: any) => (
              <Tr key={column.name}>
                <Td>{column.name}</Td>
                <Td>{column.type}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export const Schema = ({
  schemaId,
  isLatestSchema,
}: {
  schemaId: number;
  isLatestSchema: boolean;
}) => {
  const { data: session } = useSession();
  const { loading, data } = useQuery(GetSchema, {
    variables: {
      sid: schemaId,
    },
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  const { name: schemaName, tables } = data.schema;

  return (
    <>
      <Box mb="3em" />
      <Heading as="h2" size="md" mb="2em">
        Displaying {schemaName} {isLatestSchema && "(latest schema)"}
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={12}>
        {tables.map((table: any) => (
          <GridItem key={table.name} mb="1em">
            <SchemaTable name={table.name} columns={table.columns} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
