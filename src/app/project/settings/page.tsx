"use client";
import React from "react";

import PageTitle from "@/components/reusable/PageTitle";
function ProjectSettingsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams?.projectId) {
    return <div>Must have project id specified in URL</div>;
  }
  return (
    <>
      <PageTitle title={"Settings: Project Name"} />
    </>
  );
}

export default ProjectSettingsPage;
