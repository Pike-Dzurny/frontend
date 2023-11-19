"use client";

import { Roboto } from 'next/font/google'
import './../globals.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';


import { QueryClient, QueryClientProvider } from 'react-query';

const font = Roboto({weight: ["100", "500", "300", "400", "700", "900"], subsets: ["latin"]})


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient();

  return (

    <QueryClientProvider client={queryClient}>
    <html lang="en">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <body className={`${font.className} antialiased bg-gradient-to-br from-sky-50 to-cyan-100` }>
          <div className="grid grid-cols-3">
            <div className="col-span-1">
            </div>
            <div className="col-span-1">
              <div className="flex flex-row pt-10">
                <div className="flex border-l border-r shrink-0 rounded-t-3xl shadow-inner min-h-screen flex-col flex-1 items-center justify-between mx-auto z-0 bg-slate-50">
                  {children}
                </div>
              </div>
            </div>
            <div className="col-span-1">
            </div>
          </div>
        </body>
    </html>
    </QueryClientProvider>

  )
}

export default RootLayout;