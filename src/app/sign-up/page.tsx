import React from "react";

import SignUp from "@/components/sign-up/SignUp";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

async function SignUpPage() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return <SignUp />;
}

export default SignUpPage;
