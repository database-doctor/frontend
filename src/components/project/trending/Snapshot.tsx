"use client";

import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";

import { Line } from "react-chartjs-2";
import React from "react";
import { TableSnapshots } from "@/graphql/queries/Table.graphql";
import { getBearerFromToken } from "@/utils/clientauth";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";

const SnapshotGraph = ({
  label,
  xAxis,
  yAxis,
}: {
  label: string;
  xAxis: string[];
  yAxis: number[];
}) => {
  Chart.register(...registerables);

  const data = {
    labels: xAxis,
    datasets: [
      {
        label,
        data: yAxis,
        fill: false,
      },
    ],
  };

  const options = {
    color: "#fff",
  };

  return (
    <Box bg="gray.900" borderRadius="0.8em" p={"2.5em"}>
      <Heading as="h3" size="md" mb="1em">
        {label}
        {" Over Time"}
      </Heading>
      <Line data={data} options={options} />
    </Box>
  );
};

export const Snapshot = ({
  tableId,
  fromDate,
  toDate,
}: {
  tableId: number;
  fromDate: string;
  toDate: string;
}) => {
  const { data: session } = useSession();

  const { loading, data } = useQuery(TableSnapshots, {
    variables: {
      table: {
        tid: tableId,
        fromTime: fromDate,
        toTime: toDate,
      },
    },
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  const snapshots = data.tableSnapshots;

  const atTime = snapshots.map((snapshot: any) => {
    const date = new Date(Date.parse(snapshot.atTime));

    return date.toLocaleString("en-us", {
      day: "numeric",
      year: "numeric",
      month: "short",
      hour: "numeric",
    });
  });

  const queryCount = snapshots.map((snapshot: any) => snapshot.queryCount);
  const rowCount = snapshots.map((snapshot: any) => snapshot.rowCount);
  const sizeBytes = snapshots.map((snapshot: any) => snapshot.sizeBytes);

  const graphs = [
    {
      label: "Query Count",
      yAxis: queryCount,
    },
    {
      label: "Row Count",
      yAxis: rowCount,
    },
    {
      label: "Size (Bytes)",
      yAxis: sizeBytes,
    },
  ];

  return (
    <>
      <Box mb="2.5em" />
      <Grid templateColumns="repeat(2, 1fr)" gap={12}>
        {graphs.map((graph) => (
          <GridItem key={graph.label}>
            <SnapshotGraph
              xAxis={atTime}
              yAxis={graph.yAxis}
              label={graph.label}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
