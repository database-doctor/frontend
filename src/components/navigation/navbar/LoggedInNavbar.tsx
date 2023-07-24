"use client";
import React from "react";
import { ReactNode } from "react";
import { signOut } from "next-auth/react";

import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  Image,
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Icon,
} from "@chakra-ui/react";

import { GetUserProfileQuery } from "@/graphql/__generated__/graphql";

import { SettingsIcon } from "@chakra-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

function LoggedInNavbar({ data }: { data: GetUserProfileQuery }) {
  const Links = ["Dashboard"];
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box sx={{ width: "20%" }}>
            <Image src="/logo2.png" alt="Database Doctors Logo" />
          </Box>
          {/* <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack> */}
        </HStack>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Icon
            as={NotificationsNoneOutlinedIcon}
            boxSize={6}
            cursor={"pointer"}
            marginRight={6}
          />
          <Stack direction={"row"} spacing={7}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  name={data.user.name}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <Center>
                  <p>{data.user.name}</p>
                </Center>
                <MenuDivider />
                <MenuItem>
                  <SettingsIcon boxSize={6} paddingRight={2} /> Account Settings
                </MenuItem>
                <MenuItem onClick={() => signOut({ callbackUrl: "/" })}>
                  <Icon boxSize={6} paddingRight={2} as={LogoutIcon} />
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default LoggedInNavbar;
