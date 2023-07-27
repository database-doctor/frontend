import { AuthenticateOAuth } from "@/graphql/mutations/RBAC.graphql";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { GithubProfile } from "next-auth/providers/github";
import { LoginUser } from "@/graphql/mutations/User.graphql";
import { LoginUserInput } from "@/graphql/__generated__/graphql";
import type { NextAuthOptions } from "next-auth";
import { getClient } from "@/lib/client";

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
        const oauth_user = {
          name: user.name,
          email: user.email,
          username: user.email,
          password: "",
        };

        const { data } = await getClient().mutate({
          mutation: AuthenticateOAuth,
          variables: { user: oauth_user },
        });

        user.token = data.authenticateOAuthUser.token;

        return true;
      } else if (account?.provider === "credentials") {
        return true;
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.usertoken = user.token || "";
      }
      return token;
    },
    // For client components
    async session({ session, token }) {
      if (session?.user) {
        session.user.token = token.usertoken;
      }
      return session;
    },
  },
};
