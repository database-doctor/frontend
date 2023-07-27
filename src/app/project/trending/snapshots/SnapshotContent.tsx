"use client";

import React, { useState } from "react";

import { Snapshot } from "@/components/project/trending/Snapshot";
import { SnapshotControl } from "@/components/project/trending/SnapshotControl";

export const SnapshotContent = ({ tables }: { tables: any }) => {
  const [tableId, setTableId] = useState<number>(0);
  const [fromDate, setFromDate] = useState<string>("2023-01-01");
  const [toDate, setToDate] = useState<string>("2023-12-31");

  return (
    <>
      <SnapshotControl
        tableId={tableId}
        setTableId={setTableId}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        tables={tables}
      />
      {tables.length > 0 && (
        <Snapshot
          tableId={tables[tableId].tid}
          fromDate={fromDate}
          toDate={toDate}
        />
      )}
    </>
  );
};
