import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-foreground" />}
    </button>
  );
};

export default ThemeToggle;