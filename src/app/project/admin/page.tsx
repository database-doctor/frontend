"use client";
import React from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import PageTitle from "@/app/components/reusable/PageTitle";
function ProjectAdminPage() {
  return (
    <>
      <PageTitle title={"Admin: Project Name"} />
      <br />
      <Tabs>
        <TabList>
          <Tab>Users</Tab>
          <Tab>Roles</Tab>
          <Tab>Permissions</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>users!</p>
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
