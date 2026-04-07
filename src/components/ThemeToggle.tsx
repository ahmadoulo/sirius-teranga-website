import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = ({ isTransparent = false }: { isTransparent?: boolean }) => {
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
      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
        isTransparent
          ? "border-white/30 hover:bg-white/10 text-white/80 hover:text-white"
          : "border-border hover:bg-muted text-foreground"
      }`}
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
