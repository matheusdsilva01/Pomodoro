import { ReactNode, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(localStorage.theme);

type ThemeContextProps = { children: ReactNode };

const useDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeContext = localStorage.getItem("theme");
const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(
    !themeContext ? (useDarkTheme ? "dark" : "light") : themeContext
  );

  useEffect(() => {
    theme === "dark"
      ? (localStorage.setItem("theme", "dark"),
        document.documentElement.classList.add("dark"))
      : (localStorage.setItem("theme", "light"),
        document.documentElement.classList.remove("dark"));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
