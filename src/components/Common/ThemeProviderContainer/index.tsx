import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/theme/useTheme";
import { GlobalStyle } from "../../../styles/GlobalStyle";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { styledTheme } = useTheme();

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
