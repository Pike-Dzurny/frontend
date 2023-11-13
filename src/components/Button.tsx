"use client";

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

interface ButtonProps {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Define the theme-dependent class
  const themeClass = theme === 'light' ? 'light-button-class' : 'dark-button-class';

  return (
    <button className={`${className} ${themeClass}`} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};