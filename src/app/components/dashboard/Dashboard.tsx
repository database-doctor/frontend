"use client";

import React from "react";

import PageTitle from "../reusable/PageTitle";
import DashboardStats from "./DashboardStats";
import DashboardProjects from "./DashboardProjects";
import { Box } from "@chakra-ui/react";

function Dashboard({ userId }: { userId: number }) {
  return (
    <>
      <Box paddingBlock={"1.5em"} paddingInline={"2em"}>
        <PageTitle title={"User Dashboard"} />
        <br />
        <DashboardStats />
        <br />
        <DashboardProjects userId={userId} />
      </Box>
    </>
  );
}

export default Dashboard;
