"use client";

import {
  GetPermissionsQuery,
  GetProjectDetailsQuery,
} from "@/graphql/__generated__/graphql";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import { Alerts } from "@/components/project/admin/Alerts";
import Permissions from "@/components/project/admin/Permissions";
import React from "react";
import Roles from "@/components/project/admin/Roles";
import Users from "@/components/project/admin/Users";

function Admin({
  projectDetails,
  permissions,
  alertData,
}: {
  projectDetails: GetProjectDetailsQuery;
  permissions: GetPermissionsQuery;
  alertData: any[];
}) {
  return (
    <Tabs isLazy>
      <TabList>
        <Tab>Users</Tab>
        <Tab>Roles</Tab>
        <Tab>Permissions</Tab>
        <Tab>Alerts</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Users
            users={projectDetails.project?.users || []}
            roles={projectDetails.project?.roles || []}
          />
        </TabPanel>
        <TabPanel>
          <Roles
            roles={projectDetails.project?.roles}
            permissions={permissions.allPermissions}
          />
        </TabPanel>
        <TabPanel>
          <Permissions permissions={permissions.allPermissions || []} />
        </TabPanel>
        <TabPanel>
          <Alerts
            alerts={alertData}
            roles={projectDetails.project?.roles || []}
            users={projectDetails.project?.users || []}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Admin;
