"use client";

import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";

const THEME_KEY = "theme";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = storedTheme ?? systemTheme;
    setTheme(activeTheme);
    applyTheme(activeTheme);
  }, []);

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-line bg-card/90 px-4 py-2 text-sm text-ink shadow-[0_12px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:border-line-hover hover:bg-card-hover"
    >
      {theme === "dark" ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
