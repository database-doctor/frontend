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
import NextLink from "next/link";

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
        <NextLink
          href={"/project/dashboard" + "?projectId=" + projectId}
          passHref
        >
          <Button>Open</Button>
        </NextLink>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
