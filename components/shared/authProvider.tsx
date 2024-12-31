"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionWrapperProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: SessionWrapperProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
