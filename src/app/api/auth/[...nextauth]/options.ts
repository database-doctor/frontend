import type { NextAuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { GithubProfile } from "next-auth/providers/github";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      profile(profile: GithubProfile) {
        return {
          ...profile,
          id: profile.id.toString(),
          image: profile.avatar_url,
        };
      },
      id: "github",
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        // Retrieve user data to verify with credentials // TODO: API Call
        const user = {
          id: "42",
          name: "Adrian",
          password: "pwd",
          role: "admin",
        };
        // TODO: Add logic to validate user & password against DB

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "github") {
        // Check if user exists
        const query = gql`
          query GetUserByEmail {
            userByEmail(email: "${user.email}") {
              name,
              email,
              userId,
              username,
              createdAt,
            }
          }
        `;

        let db_data;

        try {
          const { data } = await getClient().query({ query });
          db_data = data;
        } catch (e) {
          console.log("ERROR");
          db_data = null;
        }
        console.log(db_data);

        if (db_data) {
          // ? User exists - inject userId & other profile information to session
          user.email = db_data.userByEmail.email;
          user.name = db_data.userByEmail.name;
          user.userId = db_data.userByEmail.userId;
          user.username = db_data.userByEmail.username;
          user.createdAt = db_data.userByEmail.createdAt;
        } else {
          // ? User does not exist - Create the user in our DB, then inject profile information into session
          const CREATE_USER_MUTATION = gql`
            mutation CreateUser($newUser: CreateUserInput!) {
              createUser(${"newUser"}: $newUser) {
                email,
                name,
                userId,
                username,
                createdAt,
              }
            }
          `;

          const newUser = {
            username: user.email,
            email: user.email,
            name: user.name,
            passwordHash: "no-password",
            passwordSalt: "no-password",
          };

          console.log("New User:::");
          console.log(newUser);

          const response = await getClient().mutate({
            mutation: CREATE_USER_MUTATION,
            variables: { newUser },
          });

          console.log("POST SUCCESSFUL");

          // response.data: { createUser : { email, name, userId, username, createdAt }}
          user.email = response.data.email;
          user.name = response.data.name;
          user.userId = response.data.userId;
          user.username = response.data.username;
          user.createdAt = response.data.createdAt;
        }

        return true;
      } else if (account?.provider === "credentials") {
        // Todo : fetch userId & other information from our DB and inject profile information

        return true;
      }

      return true;
    },
    async jwt({ token, user }) {
      console.log("JWT Callback!");
      if (user) {
        console.log("--- User ---");
        console.log(user);
      }

      if (user) {
        token.role = user.role;
        token.userId = user.userId;
        token.createdAt = user.createdAt;
        token.email = user.email;
      }
      return token;
    },
    // For client components
    async session({ session, token }) {
      console.log("Session callback!");
      if (session?.user) {
        session.user.role = token.role;
        session.user.userId = token.userId as number | undefined;
        session.user.createdAt = token.createdAt as EpochTimeStamp | undefined;
        session.user.email = token.email as string | undefined;
      }
      return session;
    },
  },
};
