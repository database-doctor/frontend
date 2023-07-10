import React from "react";

import PageTitle from "../reusable/PageTitle";
import DashboardStats from "./DashboardStats";
import DashboardProjects from "./DashboardProjects";

function Dashboard({ userId }: { userId: number }) {
  return (
    <>
      <PageTitle title={"User Dashboard"} />
      <br />
      <DashboardStats />
      <br />
      <DashboardProjects userId={userId} />
    </>
  );
}

export default Dashboard;
