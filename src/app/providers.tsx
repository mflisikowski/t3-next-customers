import { ThemeProvider } from "@/providers/theme-provider";
import React, { type FC } from "react";

export const Providers: FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};
