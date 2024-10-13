import React from "react";
import { NextUIProvider } from "@nextui-org/system";

export function UIProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider id="main" className="w-full h-full">
      {children}
    </NextUIProvider>
  );
}
