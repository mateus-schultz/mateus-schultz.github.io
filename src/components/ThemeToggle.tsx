import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      id="theme-toggle"
      aria-label="Theme Toggle"
      title="Theme"
      className="bg-white/5 border-white/20 text-white hover:bg-white/10 dark:bg-slate-800/50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700/50"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
};
