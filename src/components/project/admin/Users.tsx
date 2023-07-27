"use client";

import {
  AddUserToProject,
  RemoveUserFromProject,
} from "@/graphql/mutations/Project.graphql";
import {
  AddUserToProjectInput,
  RemoveUserFromProjectInput,
} from "@/graphql/__generated__/graphql";
import {
  Button,
  Flex,
  FormControl,
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
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
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
import React, { useState } from "react";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import SearchIcon from "@mui/icons-material/Search";
import Select from "react-select";
import { getBearerFromToken } from "@/utils/clientauth";
import { useMutation } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

function Users({
  users,
  roles,
}: {
  users: {
    __typename?: "User" | undefined;
    createdAt: any;
    email: string;
    name: string;
    uid: number;
    username: string;
    userRoles: {
      __typename?: "Role" | undefined;
      name: string;
      rid: number;
    }[];
  }[];
  roles: Array<{
    __typename?: "Role";
    name: string;
    rid: number;
    permissions: Array<{
      __typename?: "Permission";
      name: string;
      pid: number;
    }>;
  }>;
}) {
  const params = useSearchParams();
  const { data: session, status } = useSession();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");

  const [addUserToProject] = useMutation(AddUserToProject, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });
  const [removeUserFromProject] = useMutation(RemoveUserFromProject, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  const [userRoles, setUserRoles] =
    useState<{ label: string; value: number }[]>();

  const opts = roles.map((r) => ({ value: r.rid, label: r.name }));

  async function inviteUserToProject() {
    const addUserInput: AddUserToProjectInput = {
      email,
      pid: Number(params.get("projectId")),
      roles: userRoles?.map((r) => r.value) || [],
    };

    addUserToProject({
      variables: { addUserInput },
    })
      .then(() => onClose())
      .catch((err) => {
        alert(err);
        onClose();
      });
  }

  async function removeUserProjectAccess(uid: number) {
    const removeUserFromProjectInput: RemoveUserFromProjectInput = {
      uid,
      pid: Number(params.get("projectId")),
    };

    removeUserFromProject({
      variables: { removeUserFromProjectInput },
    })
      .then((res) => {
        alert(
          `Successfully removed user ${res.data.removeUserFromProject.uid} from project ${res.data.removeUserFromProject.pid}`
        );
      })
      .catch((err) => {
        alert(err);
      });
  }

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
        <Flex>
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
          <Button
            color={"pink.400"}
            outline={"2px solid"}
            outlineColor={"pink.400"}
          >
            <Icon as={AssignmentIndIcon} marginRight={2} />
            New Service Account
          </Button>
        </Flex>
      </Flex>
      <br />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Roles</Th>
              <Th justifyContent={"right"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => (
              <Tr key={user.uid}>
                <Td>{user.name || ""}</Td>
                <Td>{user.username || ""}</Td>
                <Td>{user.email || ""}</Td>
                <Td>
                  <Wrap spacing="10px">
                    {user.userRoles.map((role) => (
                      <WrapItem key={role.rid}>
                        <Tag>{role.name}</Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Td>
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
                            {/* <Button>
                              <Icon
                                as={EditIcon}
                                cursor={"pointer"}
                                marginRight={2}
                              />
                              Edit User
                            </Button> */}
                            <Button
                              onClick={() => removeUserProjectAccess(user.uid)}
                            >
                              <Icon
                                as={PersonRemoveIcon}
                                cursor={"pointer"}
                                marginRight={2}
                              />
                              Remove User
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
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite User To Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="Email">
                <Text fontWeight={700}>User Email:</Text>
                <Input
                  placeholder="email-to-invite@test.com"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="Roles">
                <Text fontWeight={700}>Select Roles:</Text>
                <Select
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
                  onChange={(newValue) => setUserRoles(newValue)}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={inviteUserToProject}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Users;
