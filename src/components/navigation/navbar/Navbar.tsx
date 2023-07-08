"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectAuthState,
  selectUser,
  setAuthState,
} from "@/store/features/authSlice";
import { User } from "@/types/User";
import { Button } from "@chakra-ui/react";

function Navbar() {
  const authState: boolean = useAppSelector(selectAuthState);
  const user: User | undefined = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const toggleAuthState = () => {
    dispatch(setAuthState(!authState));
  };

  return (
    <>
      <div>Logged in: {authState ? "true" : "false"}</div>
      <Button colorScheme="pink" onClick={toggleAuthState}>
        Toggle Auth State
      </Button>
    </>
  );
}

export default Navbar;
