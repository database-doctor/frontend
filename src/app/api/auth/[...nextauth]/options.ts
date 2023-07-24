import type { NextAuthOptions } from "next-auth";

import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { GithubProfile } from "next-auth/providers/github";

import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { LoginUser } from "@/graphql/mutations/User.graphql";
import { LoginUserInput } from "@/graphql/__generated__/graphql";

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
        email: {
          label: "Email:",
          type: "text",
          placeholder: "email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        // Retrieve user data to verify with credentials
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const userCreds: LoginUserInput = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await getClient().mutate({
          mutation: LoginUser,
          variables: {
            userCreds,
          },
        });

        console.log(res);

        return res ? { ...res.data.loginUser } : null;
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
        console.log("DB DATA -----");
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
              createUser(newUser: $newUser) {
                email
                name
                userId
                username
                createdAt
              }
            }
          `;

          const newUser = {
            username: user.email,
            email: user.email,
            name: user.name || "No Name Found",
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

          console.log(response);

          // response.data: { createUser : { email, name, userId, username, createdAt }}
          user.email = response.data.createUser.email;
          user.name = response.data.createUser.name;
          user.userId = response.data.createUser.userId;
          user.username = response.data.createUser.username;
          user.createdAt = response.data.createUser.createdAt;
        }

        return true;
      } else if (account?.provider === "credentials") {
        // Todo : potentially fetch userId & other information from our DB and inject profile information
        return true;
      }

      return true;
    },
    async jwt({ token, user }) {
      console.log("JWT Callback!");
      if (user) {
        token.usertoken = user.token || "";
      }
      return token;
    },
    // For client components
    async session({ session, token }) {
      console.log("SESSION CALLBACK!");
      if (session?.user) {
        session.user.token = token.usertoken;
      }
      return session;
    },
  },
};
