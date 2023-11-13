"use client";

import { Roboto } from 'next/font/google'
import './../globals.css'
import { Sidebar } from '../../components/Sidebar';

import { themeChange } from 'theme-change'
import { useEffect } from 'react';


import { QueryClient, QueryClientProvider } from 'react-query';

const roboto = Roboto({weight: "400", subsets: ["latin"]})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if(selectedTheme) {
        document.documentElement.setAttribute("data-theme", selectedTheme);
    }
  }, [])

  
  return (
    
    

    


    <QueryClientProvider client={queryClient}>
    <html data-act-class="ACTIVECLASS" lang="en">
        <body className={`${roboto.className} antialiased dark bg-base-100`}>
          <div className="flex flex-col flex-1 items-start justify-center align">
            <Sidebar />
          </div>
          {children}
        </body>
    </html>
    </QueryClientProvider>

  )
}
