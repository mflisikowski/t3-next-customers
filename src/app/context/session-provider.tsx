"use client";

import { type SessionProviderProps } from "@/types/providers";
import { SessionProvider } from "next-auth/react";

/**
 * The Provider component wraps its children within a session provider.
 * @param { React.ReactNode } children - Children components to be rendered.
 * @param { object } session - Session object to be passed to the session provider.
 * @returns { React.ReactNode } - Rendered children within the session context.
 */

export default function Provider(props: SessionProviderProps): React.ReactNode {
  return (
    <SessionProvider session={props.session}>{props.children}</SessionProvider>
  );
}
