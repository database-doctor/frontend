"use client";

import React from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";

function ProjectCard({
  title,
  owner,
  createdDate,
  projectId,
}: {
  title: string;
  owner: string;
  createdDate: string;
  projectId: number;
}) {
  return (
    <Card variant={"elevated"}>
      <CardHeader paddingBottom={1}>
        <Heading size="md"> {title}</Heading>
      </CardHeader>
      <CardBody paddingTop={2}>
        <Text>Owner: {owner}</Text>
        <Text>Created: {createdDate}</Text>
        <Text>ID: {projectId}</Text>
      </CardBody>
      <CardFooter paddingTop={0}>
        <Button>Open</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
