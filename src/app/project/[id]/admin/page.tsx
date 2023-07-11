"use client";
import React from "react";
import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import Users from "@/app/components/project/admin/Users";

import PageTitle from "@/app/components/reusable/PageTitle";
function ProjectAdminPage() {
  const router = useRouter();
  const projectId = router.query.id;

  return (
    <>
      <PageTitle title={"Admin Portal: Project Name"} />
      <br />
      <Tabs>
        <TabList>
          <Tab>Users</Tab>
          <Tab>Roles</Tab>
          <Tab>Permissions</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Users />
          </TabPanel>
          <TabPanel>
            <p>roles!</p>
          </TabPanel>
          <TabPanel>
            <p>permissions!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ProjectAdminPage;
