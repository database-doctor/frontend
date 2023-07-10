"use client";

import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
} from "@chakra-ui/react";

function Users() {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Roles</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Adrian Davila</Td>
            <Td>adriandavila</Td>
            <Td>a4davila@uwaterloo.ca</Td>
            <Td>
              <HStack spacing={4}>
                <Tag>Admin</Tag>
                <Tag>Analytics</Tag>
              </HStack>
            </Td>
          </Tr>
          <Tr>
            <Td>Jason Du</Td>
            <Td>j79du</Td>
            <Td>j79du@uwaterloo.ca</Td>
            <Td>
              {" "}
              <HStack spacing={4}>
                <Tag>Analytics</Tag>
              </HStack>
            </Td>
          </Tr>
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Roles</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}

export default Users;
