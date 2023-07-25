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
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { User } from "@/graphql/__generated__/graphql";

function Users({
  users,
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
}) {
  console.log(users);
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
                  <HStack spacing={4}>
                    {user.userRoles.map((role) => (
                      <Tag key={role.rid}>{role.name}</Tag>
                    ))}
                  </HStack>
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
                            <Button>
                              <Icon
                                as={EditIcon}
                                cursor={"pointer"}
                                marginRight={2}
                              />
                              Edit User
                            </Button>
                            <Button>
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
    </>
  );
}

export default Users;
