"use client";

import React from "react";

import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AlarmIcon from "@mui/icons-material/Alarm";
import MessageIcon from "@mui/icons-material/Message";

import {
  Stat,
  StatLabel,
  StatNumber,
  Card,
  CardBody,
  Flex,
  Icon,
  Heading,
} from "@chakra-ui/react";
import PageTitle from "../reusable/PageTitle";

function Dashboard() {
  return (
    <>
      <PageTitle title={"User Dashboard"} />
      <br />
      <Flex justifyContent={"space-between"}>
        <Card width={"23%"}>
          <CardBody>
            <Flex sx={{ alignItems: "center" }}>
              <Icon as={FolderSpecialIcon} boxSize={12} marginRight={3} />
              <Stat>
                <StatLabel>Total Projects</StatLabel>
                <StatNumber>12</StatNumber>
              </Stat>
            </Flex>
          </CardBody>
        </Card>
        <Card width={"23%"}>
          <CardBody>
            <Flex sx={{ alignItems: "center" }}>
              <Icon as={AdminPanelSettingsIcon} boxSize={12} marginRight={3} />
              <Stat>
                <StatLabel>Owned Projects</StatLabel>
                <StatNumber>3</StatNumber>
              </Stat>
            </Flex>
          </CardBody>
        </Card>
        <Card width={"23%"}>
          <CardBody>
            <Flex sx={{ alignItems: "center" }}>
              <Icon as={MessageIcon} boxSize={12} marginRight={3} />
              <Stat>
                <StatLabel>Messages</StatLabel>
                <StatNumber>112</StatNumber>
              </Stat>
            </Flex>
          </CardBody>
        </Card>
        <Card width={"23%"}>
          <CardBody>
            <Flex sx={{ alignItems: "center" }}>
              <Icon as={AlarmIcon} boxSize={12} marginRight={3} />
              <Stat>
                <StatLabel>Time Until Next Billing</StatLabel>
                <StatNumber>5 days</StatNumber>
              </Stat>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
      <br />
      <Heading size={"lg"}>Projects</Heading>
    </>
  );
}

export default Dashboard;
