"use client";

import React from "react";

import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import PeopleIcon from "@mui/icons-material/People";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

import {
  Stat,
  StatLabel,
  StatNumber,
  Card,
  CardBody,
  Flex,
  Icon,
} from "@chakra-ui/react";

function DashboardStats() {
  return (
    <Flex justifyContent={"space-between"}>
      <Card width={"24%"}>
        <CardBody>
          <Flex sx={{ alignItems: "center" }}>
            <Icon as={StorageIcon} boxSize={12} marginRight={3} />
            <Stat>
              <StatLabel># Tables</StatLabel>
              <StatNumber>12</StatNumber>
            </Stat>
          </Flex>
        </CardBody>
      </Card>
      <Card width={"24%"}>
        <CardBody>
          <Flex sx={{ alignItems: "center" }}>
            <Icon as={ViewColumnIcon} boxSize={12} marginRight={3} />
            <Stat>
              <StatLabel># Columns</StatLabel>
              <StatNumber>87</StatNumber>
            </Stat>
          </Flex>
        </CardBody>
      </Card>
      <Card width={"24%"}>
        <CardBody>
          <Flex sx={{ alignItems: "center" }}>
            <Icon as={PeopleIcon} boxSize={12} marginRight={3} />
            <Stat>
              <StatLabel># Users</StatLabel>
              <StatNumber>13,250</StatNumber>
            </Stat>
          </Flex>
        </CardBody>
      </Card>
      <Card width={"24%"}>
        <CardBody>
          <Flex sx={{ alignItems: "center" }}>
            <Icon as={QueryStatsIcon} boxSize={12} marginRight={3} />
            <Stat>
              <StatLabel># Queries</StatLabel>
              <StatNumber>105,267</StatNumber>
            </Stat>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default DashboardStats;
