import PublicNavbar from "./PublicNavbar";
import LoggedInNavbar from "./LoggedInNavbar";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Navbar() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? <LoggedInNavbar /> : <PublicNavbar />}
      {/* <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box sx={{ width: "20%" }}>
              <Image src="/logo2.png" alt="Database Doctors Logo" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex> */}
    </>
  );
}
