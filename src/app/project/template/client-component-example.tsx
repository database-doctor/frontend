"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

function ClientComponentExample() {
  const params = useSearchParams();
  console.log(params.get("projectId"));
  return (
    <>
      <div>ClientComponentExample</div>
      <div>The project id is: {params.get("projectId")}</div>
    </>
  );
}

export default ClientComponentExample;
