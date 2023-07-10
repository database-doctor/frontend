"use client";
import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import ProjectSidebar from "@/app/components/project/ProjectSidebar";
function ProjectDashboardPage() {
  return (
    <>
      <Box flexGrow={1} height={"100%"}>
        <Flex height={"100%"}>
          <ProjectSidebar />
          <Box width={"100%"}>
            <div>Adrian</div>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default ProjectDashboardPage;
