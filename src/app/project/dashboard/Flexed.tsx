"use client";

import { Flex } from "@chakra-ui/react";
import React from "react";

function Flexed({ children }: { children: React.ReactNode }) {
  return <Flex justifyContent={"space-between"}>{children}</Flex>;
}

export default Flexed;
