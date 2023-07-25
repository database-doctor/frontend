"use client";

import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  HStack,
  Input,
  Flex,
  Button,
  InputGroup,
  InputLeftElement,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Stack,
} from "@chakra-ui/react";

function Permissions({
  permissions,
}: {
  permissions: {
    __typename?: "PermissionDetail" | undefined;
    name: string;
    pid: number;
  }[];
}) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Permission ID</Th>
            <Th> Name</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          {permissions.map((permission) => (
            <Tr key={permission.pid}>
              <Td>{permission.pid || ""}</Td>
              <Td>{permission.name || ""}</Td>
              <Td>no description</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Permissions;
