"use client";
import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from './ThemeContext';

export const ScrollableBar: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx(
      "z-10 sticky top-0 left-0 w-full transition-transform duration-500 ease-in-out transform rounded flex justify-start items-center p-2 border",
      {
        'border-gray-800 bg-white': theme === 'light',
        'border-border-primary bg-gray-800': theme !== 'light'
      }
    )}>
      <button className="mr-2 hover:font-bold">Home</button>
    </div>
  );
};