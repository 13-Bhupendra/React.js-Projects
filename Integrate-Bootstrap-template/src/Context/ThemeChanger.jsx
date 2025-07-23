import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme(Theme == "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ Theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
