import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/server/auth";
import { cn } from "@/utils/tailwind-merge";
import { type ClassValue } from "class-variance-authority/dist/types";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function AuthButton({
  className,
}: {
  className?: ClassValue;
}) {
  const session = await getServerSession(authOptions);
  const label = session ? `Sign out` : `Sign in`;
  const href = session ? `signout` : `signin`;

  return (
    <Link
      className={cn(buttonVariants({ variant: "ghost" }), className)}
      href={`/api/auth/${href}`}
    >
      {label}
    </Link>
  );
}
