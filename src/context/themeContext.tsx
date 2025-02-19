import React, { createContext, FC, ReactNode, useState } from "react";

interface ThemeContextType {
  dark: boolean;
  useSystem: boolean;
  setUseSystem: (value: boolean) => void;
  toggleTheme: (value: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(true);
  const toggleTheme = (value: string) => {
    setUseSystem(false);
    if (value === "dark" && !dark) setDark(true);
    if (value === "light" && dark) setDark(false);
    console.log(`use system theme: ${useSystem}`);
  };
  const [useSystem, setUseSystem] = useState<boolean>(false);
  return (
    <ThemeContext.Provider
      value={{ dark, useSystem, setUseSystem, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
