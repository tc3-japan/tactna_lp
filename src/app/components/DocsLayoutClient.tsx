"use client";

import { ReactNode, useEffect } from "react";
import Navbar from "./navbar";

export default function DocsLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    // Force light mode on mount to avoid hydration mismatch
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-12 md:pt-16">{children}</div>
    </>
  );
}
