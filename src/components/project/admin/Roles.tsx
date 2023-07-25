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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Roles({
  roles,
}: {
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
          <Tbody>
            {roles.map((role) => (
              <Tr key={role.rid}>
                <Td>{role.rid || ""}</Td>
                <Td>{role.name || ""}</Td>
                <Td>no descrption</Td>
                <Td>
                  <HStack spacing={4}>
                    <Tag>TODO</Tag>
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

export default Roles;
