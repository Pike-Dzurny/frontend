
"use client";

import { Roboto } from 'next/font/google'
import './globals.css'
import { Sidebar } from '../components/Sidebar';

import { themeChange } from 'theme-change'
import { useEffect } from 'react';


import { QueryClient, QueryClientProvider } from 'react-query';

const roboto = Roboto({weight: "400", subsets: ["latin"]})

export default function LoginPage() {
    return { /** Some JSX */ }
  }
  
  // Return the page without additional layout.
  LoginPage.getLayout = (page) => page