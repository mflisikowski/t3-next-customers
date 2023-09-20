"use client";

import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export type ProviderProps = {
  children: React.ReactNode;
  session: Session;
};

export default function Provider({
  children,
  session,
}: ProviderProps): React.ReactNode {
  return (
    <SessionProvider session={session}>
      <>{children}</>
    </SessionProvider>
  );
}
