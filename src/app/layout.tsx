import Provider from "@/app/context/client-provider";
import { authOptions } from "@/server/auth";
import "@/styles/globals.css";
import { getServerSession } from "next-auth/next";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Next Customers",
  description: "Next.js 13 T3 Stack with Prisma, TailwindCSS, and TypeScript",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = (await getServerSession(authOptions))!;

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-primary min-w-screen min-h-screen`}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
