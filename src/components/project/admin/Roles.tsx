"use client";

import React, { useState } from "react";

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
  PopoverBody,
  PopoverArrow,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  FormControl,
  ModalBody,
  ModalFooter,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Select from "react-select";

import { useSearchParams } from "next/navigation";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { getBearerFromToken } from "@/utils/clientauth";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";

import { CreateRole, ModifyRole } from "@/graphql/mutations/RBAC.graphql";

function Roles({
  roles,
  permissions,
}: {
  roles:
    | {
        __typename?: "Role" | undefined;
        name: string;
        rid: number;
        permissions: {
          __typename?: "Permission" | undefined;
          name: string;
          pid: number;
        }[];
      }[]
    | undefined;
  permissions: {
    __typename?: "PermissionDetail" | undefined;
    name: string;
    pid: number;
  }[];
}) {
  const params = useSearchParams();
  const { data: session, status } = useSession();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [roleName, setRoleName] = useState("");
  const [rolePermissions, setRolePermissions] =
    useState<{ label: string; value: Number }[]>();

  const [isModification, setIsModification] = useState(false);
  const [roleBeingModified, setRoleBeingModified] = useState(-1);
  const [defaultRoleName, setDefaultRoleName] = useState("");
  const [defaultRolePermissions, setDefaultRolePermissions] =
    useState<{ label: string; value: Number }[]>();

  const [createRole] = useMutation(CreateRole, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  const [modifyRole] = useMutation(ModifyRole, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  const opts = permissions.map((p) => {
    return { value: p.pid, label: p.name };
  });

  const setDefaults = (role: {
    __typename?: "Role" | undefined;
    name: string;
    rid: number;
    permissions: {
      __typename?: "Permission" | undefined;
      name: string;
      pid: number;
    }[];
  }) => {
    setIsModification(true);
    setRoleBeingModified(role.rid);
    setDefaultRoleName(role.name);
    setDefaultRolePermissions(
      role.permissions.map((p) => ({ value: p.pid, label: p.name }))
    );
    onOpen();
  };

  async function onSubmitRole() {
    if (isModification) {
      console.log(roleName);
      console.log(rolePermissions);

      const updatedRole: { rid: Number; name: string; permissions: Number[] } =
        {
          name: roleName,
          permissions: rolePermissions
            ? rolePermissions.map((p) => p.value)
            : [],
          rid: roleBeingModified,
        };

      modifyRole({
        variables: { modifiedRole: updatedRole },
      }).then(() => {
        setIsModification(false);
        onClose();
      });
    } else {
      console.log(roleName);
      console.log(rolePermissions);

      const newRole: { name: string; permissions: Number[]; pid: Number } = {
        name: roleName,
        permissions: rolePermissions ? rolePermissions.map((p) => p.value) : [],
        pid: Number(params.get("projectId")),
      };

      createRole({
        variables: { newRole },
      }).then(() => {
        onClose();
      });
    }
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
        <Button
          color={"pink.400"}
          outline={"2px solid"}
          outlineColor={"pink.400"}
          marginRight={6}
          onClick={onOpen}
        >
          <Icon as={AddIcon} marginRight={2} />
          Create New Role
        </Button>
      </Flex>
      <br />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Role ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Permissions</Th>
              <Th justifyContent={"right"}></Th>
            </Tr>
          </Thead>
          {roles && (
            <Tbody>
              {roles.map((role) => (
                <Tr key={role.rid}>
                  <Td>{role.rid || ""}</Td>
                  <Td>{role.name || ""}</Td>
                  <Td>no descrption</Td>
                  <Td>
                    <Wrap spacing={"10px"}>
                      {role.permissions.map((permission) => (
                        <WrapItem key={permission.pid}>
                          <Tag>{permission.name}</Tag>
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
                              <Button onClick={() => setDefaults(role)}>
                                <Icon
                                  as={EditIcon}
                                  cursor={"pointer"}
                                  marginRight={2}
                                />
                                Edit Role
                              </Button>
                              <Button>
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
          <ModalHeader>Create/Modify Role</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="Role Name">
                <Input
                  placeholder="Role Name"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  defaultValue={defaultRoleName}
                  onChange={(e) => setRoleName(e.target.value)}
                />
              </FormControl>
              <FormControl id="Permissions">
                <Text fontWeight={700}>Select Permissions:</Text>
                <Select
                  defaultValue={defaultRolePermissions}
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
                  onChange={(newValue) => setRolePermissions(newValue)}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={onSubmitRole}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Roles;
