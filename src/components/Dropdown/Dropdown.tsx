"use client";

import React, { useContext } from 'react';
import { useState } from 'react';

import clsx from 'clsx';
import { DropdownButton } from './DropdownButtons'; // Import SidebarButton component
import { usePathname } from 'next/navigation'


export const Dropdown: React.FC = () => {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState('Settings');

  return (
    <div className="flex justify-around items-center">
      <DropdownButton icon="home" name="Home" path="/" selected={pathname === '/'} />
      <DropdownButton icon="mail" name="Messages" path="/messages" selected={pathname === '/messages'} />
      <DropdownButton icon="person" name="Profile" path="/profile" selected={pathname === '/profile'} />
      <DropdownButton icon="local_fire_department" name="Trending" path="/trending" selected={pathname === '/trending'} />
      <DropdownButton icon="settings" name="Settings" path="/settings" selected={pathname === '/settings'} />
    </div>
  );
};