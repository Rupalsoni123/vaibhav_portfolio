import React, { createContext, useEffect, useMemo, useState, useCallback } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  mode: "dark",
  setMode: () => {},
  toggleTheme: () => {},
});

const resolve = (mode) => {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode;
};

export const ThemeProvider = ({ children }) => {
  const [mode, setModeState] = useState(() => localStorage.getItem("theme-mode") || "dark");
  const [theme, setTheme] = useState(() => resolve(localStorage.getItem("theme-mode") || "dark"));

  const apply = useCallback((nextTheme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    root.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    apply(resolve(mode));
    localStorage.setItem("theme-mode", mode);
  }, [mode, apply]);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => apply(mq.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode, apply]);

  const setMode = useCallback((m) => setModeState(m), []);
  const toggleTheme = useCallback(() => {
    setModeState((m) => {
      const current = resolve(m);
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  useEffect(() => {
    const cycle = () => {
      setModeState((m) => (m === "dark" ? "light" : m === "light" ? "system" : "dark"));
    };
    window.addEventListener("p3:theme-cycle", cycle);
    return () => window.removeEventListener("p3:theme-cycle", cycle);
  }, []);

  const value = useMemo(() => ({ theme, mode, setMode, toggleTheme }), [theme, mode, setMode, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
