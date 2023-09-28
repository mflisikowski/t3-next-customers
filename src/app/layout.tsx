export const metadata = {
  title: "Next Customers",
  description: "Next.js 13 T3 Stack with Prisma, TailwindCSS, and TypeScript",
};
import "@/styles/globals.css";
import { Providers } from "@/app/providers";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
