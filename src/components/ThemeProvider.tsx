import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeContext } from './ThemeContext';
import Cookies from 'js-cookie';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from cookie
    const initialTheme = Cookies.get('theme') || 'dark';
    // Set body class to initial theme
    if (typeof document !== 'undefined') {
      document.body.className = initialTheme === 'light' ? 'light-theme' : 'dark-theme';
    }
    return initialTheme;
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookies.set('theme', newTheme);  // Save theme to cookie
    document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};