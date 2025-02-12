import React, { createContext, useState, useContext, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeColors {
  backgroundColor: string;
  textColor: string;
  primaryButtonColor: string;
  borderColor: string;
  inputBackground: string;
  buttonTextColor: string;
  logoutButtonColor: string;
}

interface ThemeContextProps {
  theme: Theme;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const lightTheme: ThemeColors = {
  backgroundColor: "#FFFFFF",
  textColor: "#000000",
  primaryButtonColor: "#4CAF50",
  borderColor: "#DDDDDD",
  inputBackground: "#F9F9F9",
  buttonTextColor: "#FFFFFF",
  logoutButtonColor: "#FF5252",
};

const darkTheme: ThemeColors = {
  backgroundColor: "#121212",
  textColor: "#E0E0E0",
  primaryButtonColor: "#6200EE",
  borderColor: "#444444",
  inputBackground: "#3A3A40",
  buttonTextColor: "#FFFFFF",
  logoutButtonColor: "#FF4081",
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const colors = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
