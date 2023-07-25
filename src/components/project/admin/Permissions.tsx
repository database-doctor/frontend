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

import SearchIcon from "@mui/icons-material/Search";

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
    <>
      <Flex justifyContent={"space-between"}>
        <div>
          <InputGroup borderRadius={"full"}>
            <InputLeftElement pointerEvents="none">
              <Icon as={SearchIcon} />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search..."
              outline={"1px solid"}
              outlineColor={"pink.800"}
              _focus={{ outlineColor: "pink.500", borderColor: "pink.500" }}
            />
          </InputGroup>
        </div>
      </Flex>
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
    </>
  );
}

export default Permissions;
