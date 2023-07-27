"use client";

import {
  Button,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { CreateAlert, DeleteAlert } from "@/graphql/mutations/Alert.graphql";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteRoleMutation } from "@/graphql/__generated__/graphql";
import EditIcon from "@mui/icons-material/Edit";
import { LatestSchema } from "@/graphql/queries/Schema.graphql";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Select from "react-select";
import { getBearerFromToken } from "@/utils/clientauth";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

export const Alerts = ({
  alerts,
  roles,
  users,
}: {
  alerts: any[];
  roles: any[];
  users: any[];
}) => {
  const params = useSearchParams();
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [condExpr, setCondExpr] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);

  const { loading, data: latestSchema } = useQuery(LatestSchema, {
    variables: { pid: Number(params.get("projectId")) },
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  const [createAlert] = useMutation(CreateAlert, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  const [deleteAlert] = useMutation(DeleteAlert, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  const onCreateAlert = (sid: number) => {
    const newAlert = {
      condExpr,
      frequency: 1,
      message: "empty",
      returnExpr: "empty",
      roles: selectedRoles.map((role) => role.label),
      users: selectedUsers.map((user) => user.label),
      sid,
    };
    createAlert({
      variables: { newAlert },
    })
      .catch((err) => alert(err))
      .finally(() => onClose());
  };

  const opts = roles.map((role) => {
    ({ value: role.rid, label: role.name });
  });

  const onDeleteAlert = (aid: number) => {
    deleteAlert({
      variables: { aid },
    }).catch((err) => alert(err));
  };

  if (loading) return <>Loading...</>;
  if (!latestSchema) return <>No Schema</>;

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Button
          color={"pink.400"}
          outline={"2px solid"}
          outlineColor={"pink.400"}
          marginRight={6}
          onClick={onOpen}
        >
          <Icon as={AddIcon} marginRight={2} />
          Create New Alert
        </Button>
      </Flex>
      <br />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Alert ID</Th>
              <Th>Condition</Th>
              <Th justifyContent={"right"}></Th>
            </Tr>
          </Thead>
          {alerts && (
            <Tbody>
              {alerts.map((curAlert) => (
                <Tr key={curAlert.aid}>
                  <Td>{curAlert.aid || ""}</Td>
                  <Td>{curAlert.condExpr || ""}</Td>
                  <Td>
                    <Flex justifyContent={"right"}>
                      <Popover placement={"bottom-end"}>
                        <PopoverTrigger>
                          <Icon as={MoreVertIcon} cursor={"pointer"} />
                        </PopoverTrigger>
                        <PopoverContent maxWidth={200}>
                          <PopoverArrow />
                          <PopoverBody>
                            <Stack>
                              <Button
                                onClick={() => onDeleteAlert(curAlert.aid)}
                              >
                                <Icon
                                  as={DeleteIcon}
                                  cursor={"pointer"}
                                  marginRight={2}
                                />
                                Delete Role
                              </Button>
                            </Stack>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Alert</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="Condition">
                <Input
                  placeholder="(> user.count 2)"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  value={condExpr}
                  onChange={(e) => setCondExpr(e.target.value)}
                />
              </FormControl>
              <FormControl id="Roles">
                <Text fontWeight={700}>Select Roles</Text>
                <Select
                  defaultValue={selectedRoles}
                  isMulti
                  name="colors"
                  // @ts-ignore
                  options={opts}
                  styles={{
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                  }}
                  // @ts-ignore
                  onChange={(newValue) => setSelectedRoles(newValue)}
                />
              </FormControl>
              <FormControl id="Users">
                <Text fontWeight={700}>Select Users</Text>
                <Select
                  defaultValue={selectedUsers}
                  isMulti
                  name="colors"
                  // @ts-ignore
                  options={users.map((user) => ({
                    value: user.email,
                    label: user.email,
                  }))}
                  styles={{
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                  }}
                  // @ts-ignore
                  onChange={(newValue) => setSelectedUsers(newValue)}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="pink"
              mr={3}
              onClick={() => onCreateAlert(latestSchema.latestSchema.sid)}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
