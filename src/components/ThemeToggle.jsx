import { Moon, Sun } from "lucide-react";

import { useTheme } from "../contexts/ThemeContext";
import { cn } from "@/lib/utils";

// Versão desktop - ícone fixo no canto superior direito
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-8 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none cursor-pointer",
        "hidden md:block"
      )}
      aria-label="Toggle theme"
    >
      {
        theme === "dark" ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-300" />
        )
      }
    </button>
  )
}

// Versão mobile - item do menu
export const ThemeToggleMobile = ({ onClick }) => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="mobile-theme-toggle"
      aria-label="Toggle theme"
    >
      {
        theme === "dark" ? (
          <>
            <Sun className="theme-icon" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="theme-icon" />
            <span>Dark Mode</span>
          </>
        )
      }
    </button>
  )
}