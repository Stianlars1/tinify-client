"use client";
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if window is available (it won't be during server-side rendering)
    if (typeof window !== "undefined" && window.matchMedia) {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // Set the initial state
      setIsDarkMode(darkModeQuery.matches);

      // Define a handler for changes
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };

      // Add the event listener
      darkModeQuery.addEventListener("change", handleChange);

      // Clean up the event listener on unmount
      return () => {
        darkModeQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  return isDarkMode;
};
