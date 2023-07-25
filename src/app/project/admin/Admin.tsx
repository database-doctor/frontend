"use client";
import React from "react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Users from "@/components/project/admin/Users";

function Admin() {
  return (
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
  );
}

export default Admin;
