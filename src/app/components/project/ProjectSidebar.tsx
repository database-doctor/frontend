import React from "react";

import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  FlexProps,
  Stack,
} from "@chakra-ui/react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

interface LinkItemProps {
  name: string;
  icon: typeof DashboardIcon;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: DashboardIcon },
  { name: "Trending", icon: TrendingUpIcon },
  { name: "Settings", icon: SettingsIcon },
  { name: "Admin", icon: AdminPanelSettingsIcon },
];

function ProjectSidebar() {
  return (
    <Box
      height={"100%"}
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
    >
      <Stack>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Stack>
    </Box>
  );
}

interface NavItemProps extends FlexProps {
  icon: typeof DashboardIcon;
  children: any;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
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
    </Link>
  );
};

export default ProjectSidebar;
