"use client";

import { Box, Button, Flex, Icon, Select } from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import React from "react";

/*
<Button
  color={"pink.400"}
  outline={"2px solid"}
  outlineColor={"pink.400"}
  marginRight={6}
  onClick={() => onOpen()}
>
  <Icon as={PersonAddIcon} marginRight={2} />
  Add User
</Button>
*/

export const SchemaControl = ({
  schemaId,
  setSchemaId,
  schemas,
}: {
  schemaId: number;
  setSchemaId: any;
  schemas: any[];
}) => {
  return (
    <>
      <Box mb="3em" />
      <Flex w="600px">
        <Select
          color={"pink.400"}
          outline={"2px solid"}
          outlineColor={"pink.400"}
          marginRight={6}
          onChange={(e) => {
            setSchemaId(e.target.value);
          }}
        >
          {schemas.map(({ sid, name }, index) => (
            <option key={sid} value={index}>
              {name}
            </option>
          ))}
        </Select>
        <Button
          color={"pink.400"}
          outline={"2px solid"}
          outlineColor={"pink.400"}
          w={"300px"}
        >
          <Icon as={AddIcon} marginRight={2} />
          Add New Schema
        </Button>
      </Flex>
    </>
  );
};
