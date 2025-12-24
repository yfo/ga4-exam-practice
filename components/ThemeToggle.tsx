import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors backdrop-blur-sm border border-transparent dark:border-white/10 text-gray-700 dark:text-gray-200"
    title={theme === 'light' ? "切換至深色模式" : "切換至淺色模式"}
  >
    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
  </button>
);
