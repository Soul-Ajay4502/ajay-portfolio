// src/context/ThemeContext.js
import React, { useState, useEffect, createContext, useContext } from "react";
import { lightTheme, darkTheme } from "../style/theme";

// Create a context for the theme
const ThemeContextToggler = createContext();

export const useTheme = () => useContext(ThemeContextToggler);

export const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [section, setSection] = useState("section1");


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme
  };

  const contextCurrentSection = ({section}) => {
    setSection(section);
  };


  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContextToggler.Provider value={{ theme, toggleTheme, themeStyles,contextCurrentSection,section }}>
      {children}
    </ThemeContextToggler.Provider>
  );
};
