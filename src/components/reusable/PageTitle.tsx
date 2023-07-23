"use client";

import React from "react";
import { Heading } from "@chakra-ui/react";

function PageTitle({ title }: { title: string }) {
  return <Heading fontSize="4xl">{title}</Heading>;
}

export default PageTitle;
