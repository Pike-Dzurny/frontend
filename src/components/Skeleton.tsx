"use client";

import React, { useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from './ThemeContext';

interface SkeletonPostProps {
  className?: string;
}

export const SkeletonPost: React.FC<SkeletonPostProps> = ({ className }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx("p-16 rounded-lg flex items-start space-x-4 animate-pulse flex-grow", className, {
      'bg-gray-800': theme === 'dark',
      'bg-gray-200': theme !== 'dark'
    })}>
      <div className={clsx("rounded-full h-12 w-12", {
        'bg-gray-600': theme === 'dark',
        'bg-gray-400': theme !== 'dark'
      })}></div>
      <div className="flex-1 space-y-4 py-1">
        <div className={clsx("h-4 rounded w-3/4", {
          'bg-gray-600': theme === 'dark',
          'bg-gray-400': theme !== 'dark'
        })}></div>
        <div className="space-y-2">
          <div className={clsx("h-4 rounded", {
            'bg-gray-600': theme === 'dark',
            'bg-gray-400': theme !== 'dark'
          })}></div>
          <div className={clsx("h-4 rounded w-5/6", {
            'bg-gray-600': theme === 'dark',
            'bg-gray-400': theme !== 'dark'
          })}></div>
        </div>
      </div>
    </div>
  );
};