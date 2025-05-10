import { ThemeProvider as NextThemesProvider } from "next-themes";

import type { ThemeProviderProps } from "./theme-provider.props";

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, ...rest } = props;

  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>;
};
