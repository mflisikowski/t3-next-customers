import { authOptions } from "@/server/auth";
import NextAuth, { type NextAuthOptions } from "next-auth";

const handler = NextAuth(authOptions) as NextAuthOptions;

export { handler as GET, handler as POST };
