import AuthButtonSignIn from "@/components/auth/auth-button-signin";
import AuthButtonSignOut from "@/components/auth/auth-button-signout";

import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

export default async function AuthButton({
  className,
}: {
  className?: string;
}) {
  const session = await getServerSession(authOptions);

  return session ? (
    <AuthButtonSignOut className={className} />
  ) : (
    <AuthButtonSignIn className={className} />
  );
}
