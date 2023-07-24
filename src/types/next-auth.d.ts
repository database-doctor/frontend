import { DefaultSession, DefaultUser } from "next-auth";

import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role?: string;
    userId?: number;
    username?: string;
    createdAt?: EpochTimeStamp;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    usertoken: string;
  }
}
