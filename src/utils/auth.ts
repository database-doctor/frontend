import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
export const getBearerFromToken = (token: string) => {
  return `Bearer ${token}`;
};

export async function getAuthContext() {
  const session = await getServerSession(options);

  if (!session?.user?.token) {
    console.error("Failed to get token from session.");
    return;
  }

  return {
    headers: {
      authorization: getBearerFromToken(session.user.token),
    },
  };
}
