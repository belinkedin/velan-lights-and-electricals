import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`
        relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
        ${theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-amber-500 shadow-sm'}
      `}
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    size={20}
                    className={`absolute inset-0 transition-all duration-500 rotate-0 scale-100 ${theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                        }`}
                />
                <Moon
                    size={20}
                    className={`absolute inset-0 transition-all duration-500 rotate-0 scale-100 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                        }`}
                />
            </div>
        </button>
    );
};
