"use client";

import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Center,
} from "@chakra-ui/react";

function DashboardCard({
  title,
  children,
  styles,
}: {
  title: string;
  children: React.ReactNode;
  styles: {
    width?: string;
    marginRight?: string | number;
  };
}) {
  return (
    <Card width={styles.width || "100%"} marginRight={styles.marginRight || 0}>
      <CardHeader>
        <Heading size="md"> {title}</Heading>
      </CardHeader>
      <CardBody>
        <Center>{children}</Center>
      </CardBody>
    </Card>
  );
}

export default DashboardCard;
