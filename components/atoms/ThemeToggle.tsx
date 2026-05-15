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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as Theme | null;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const active = stored === "light" || stored === "dark" ? stored : system;
    setTheme(active);
    applyTheme(active);
    setMounted(true);
  }, []);

  function handleToggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      title={mounted ? (theme === "dark" ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      aria-label={mounted ? (theme === "dark" ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      className="fixed top-4 right-4 z-50 inline-flex items-center justify-center rounded-full border border-line bg-card/90 p-3 text-ink shadow-[0_12px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:border-line-hover hover:bg-card-hover"
    >
      {!mounted ? (
        <Moon className="h-5 w-5" />
      ) : theme === "dark" ? (
        <SunMedium className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">
        {mounted ? (theme === "dark" ? "Light mode" : "Dark mode") : "Toggle theme"}
      </span>
    </button>
  );
}