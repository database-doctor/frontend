"use client";

import React from "react";
import { useAppSelector } from "@/hooks";
import { selectAuthState, selectUser } from "@/store/features/authSlice";
import { User } from "@/types/User";

function Navbar() {
  const authState: boolean = useAppSelector(selectAuthState);
  const user: User | undefined = useAppSelector(selectUser);
  return <div>Logged in: {authState ? "true" : "false"}</div>;
}

export default Navbar;
