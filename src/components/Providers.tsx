"use client";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
type ProviderChildren = {
  children: ReactNode;
};
const Providers = ({ children }: ProviderChildren) => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </div>
  );
};

export default Providers;
