import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

export default async function AuthUserDetails() {
  const session = await getServerSession(authOptions);

  return session ? (
    <>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
    </>
  ) : (
    <>
      <p>Guest</p>
      <p>Sign in to see your details</p>
    </>
  );
}
