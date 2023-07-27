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

import { AddIcon } from "@chakra-ui/icons";
import { CreateSchema } from "@/graphql/mutations/Schema.graphql";
import { getBearerFromToken } from "@/utils/clientauth";
import { useMutation } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const sampleJsonSchema = JSON.stringify(
  [
    {
      name: "table1",
      columns: [
        {
          name: "column1",
          type: "STRING",
        },
      ],
    },
    {
      name: "table2",
      columns: [
        {
          name: "column1",
          type: "INTEGER",
        },
      ],
    },
  ],
  null,
  2
);

export const SchemaControl = ({
  schemaId,
  setSchemaId,
  schemas,
}: {
  schemaId: number;
  setSchemaId: any;
  schemas: any[];
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [schemaJson, setSchemaJson] = useState("");

  const { data: session } = useSession();

  const params = useSearchParams();
  const projectId = params.get("projectId");

  const [createSchemaMutation] = useMutation(CreateSchema, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  const createSchema = () => {
    const newSchema = {
      name,
      pid: Number(projectId),
      tables: JSON.parse(schemaJson),
    };
    console.log(newSchema);
    createSchemaMutation({
      variables: {
        newSchema,
      },
    })
      .catch((err) => alert(err))
      .finally(() => {
        onClose();
        setName("");
        setSchemaJson("");
      });
  };

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
          onClick={onOpen}
        >
          <Icon as={AddIcon} marginRight={2} />
          Add New Schema
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Schema</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="schema-name">
                <Text fontWeight={700} mb={2}>
                  Schema Name
                </Text>
                <Input
                  placeholder="my-schema"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="actual-schema">
                <Text fontWeight={700} mb={2}>
                  Schema (paste as JSON)
                </Text>
                <Textarea
                  placeholder={sampleJsonSchema}
                  resize="vertical"
                  value={schemaJson}
                  onChange={(e) => setSchemaJson(e.target.value)}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={createSchema}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
