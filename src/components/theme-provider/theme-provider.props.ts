import type { ReactNode } from "react";
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes";

export type ThemeProviderProps = {
  children: ReactNode;
} & Omit<NextThemeProviderProps, "children">;
