export const metadata = {
  title: "Next Customers",
  description: "Next.js 13 T3 Stack with Prisma, TailwindCSS, and TypeScript",
};
import "@/styles/globals.css";
import "@uploadthing/react/styles.css";

import { Providers } from "@/app/providers";
import React from "react";

// suppressHydrationWarning is dont work with below commented code
// import { Montserrat } from "next/font/google";
// const montserrat = Montserrat({ subsets: ["latin"] });
// <body className={`${montserrat.className}`}>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
