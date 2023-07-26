"use client";

import {
  Box,
  Flex,
  FlexProps,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DrawIcon from "@mui/icons-material/Draw";
import NextLink from "next/link";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useSearchParams } from "next/navigation";

interface LinkItemProps {
  name: string;
  icon: typeof DashboardIcon;
  link: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: DashboardIcon, link: "/project/dashboard" },
  // { name: "Trending", icon: TrendingUpIcon, link: "/project/trending" },
  {
    name: "Users",
    icon: TrendingUpIcon,
    link: "/project/trending/users",
  },
  {
    name: "Tables",
    icon: TrendingUpIcon,
    link: "/project/trending/tables",
  },
  {
    name: "Columns",
    icon: TrendingUpIcon,
    link: "/project/trending/columns",
  },
  {
    name: "Queries",
    icon: TrendingUpIcon,
    link: "/project/trending/queries",
  },
  { name: "Schema", icon: StorageIcon, link: "/project/schema" },
  { name: "Settings", icon: SettingsIcon, link: "/project/settings" },
  { name: "Admin", icon: AdminPanelSettingsIcon, link: "/project/admin" },
  { name: "Template", icon: DrawIcon, link: "/project/template" },
];

function ProjectSidebar() {
  const params = useSearchParams();
  const projectId = params.get("projectId");

  return (
    <>
      <Box
        height={"100%"}
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
      >
        {projectId ? (
          <Stack>
            {LinkItems.map((link) => (
              <NavItem
                key={link.name}
                icon={link.icon}
                link={link.link}
                projectId={projectId}
              >
                {link.name}
              </NavItem>
            ))}
          </Stack>
        ) : null}
      </Box>
    </>
  );
}

interface NavItemProps extends FlexProps {
  icon: typeof DashboardIcon;
  link: string;
  children: any;
  projectId: string;
}
const NavItem = ({
  icon,
  link,
  projectId,
  children,
  ...rest
}: NavItemProps) => {
  return (
    <NextLink
      href={link + "?projectId=" + projectId}
      style={{ textDecoration: "none" }}
      passHref
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "pink.500",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
            boxSize={6}
          />
        )}
        {children}
      </Flex>
    </NextLink>
  );
};

export default ProjectSidebar;
