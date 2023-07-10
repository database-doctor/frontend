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

function ProjectCard() {
  return (
    <Card variant={"elevated"}>
      <CardHeader paddingBottom={1}>
        <Heading size="md"> Project Title</Heading>
      </CardHeader>
      <CardBody paddingTop={2}>
        <Text>Owner: Adrian Davila</Text>
        <Text>Created: 11/30/2023</Text>
      </CardBody>
      <CardFooter paddingTop={0}>
        <Button>Open</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
