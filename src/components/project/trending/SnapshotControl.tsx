"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const SnapshotControl = ({
  tableId,
  setTableId,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  tables,
}: {
  tableId: number;
  setTableId: any;
  fromDate: string;
  setFromDate: any;
  toDate: string;
  setToDate: any;
  tables: any[];
}) => {
  return (
    <>
      <Box mb="3em" />
      <Flex w="800px">
        <FormControl id="table" mr={6}>
          <Text fontWeight={700} mb={2}>
            Table
          </Text>
          <Select
            color={"pink.400"}
            outline={"2px solid"}
            outlineColor={"pink.400"}
            onChange={(e) => {
              setTableId(e.target.value);
            }}
          >
            {tables.map(({ tid, name }, index) => (
              <option key={tid} value={index}>
                {name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="from-date" mr={6}>
          <Text fontWeight={700} mb={2}>
            From Date
          </Text>
          <Input
            placeholder="2023-01-01"
            color={"pink.400"}
            outline={"2px solid"}
            outlineColor={"pink.400"}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </FormControl>
        <FormControl id="to-date">
          <Text fontWeight={700} mb={2}>
            To Date
          </Text>
          <Input
            placeholder="2023-12-31"
            color={"pink.400"}
            outline={"2px solid"}
            outlineColor={"pink.400"}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </FormControl>
      </Flex>
    </>
  );
};
