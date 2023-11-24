"use client";

import { Roboto } from 'next/font/google'
import './../globals.css'
import { Sidebar } from '../../components/Sidebar/Sidebar';

import AuthProvider from '../../components/AuthProvider';

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
      <AuthProvider>
        <body className={`${font.className} antialiased bg-gradient-to-br from-sky-50 to-cyan-100` }>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="hidden md:block md:col-span-1">
          </div>
          <div className="col-span-full md:col-span-1">
          <div className="flex flex-row pt-0 md:pt-10 rounded-none md:rounded-t-3xl">
            <div className="flex border-l border-r shrink-0 shadow-inner min-h-screen flex-col flex-1 justify-between mx-auto z-0 bg-slate-50">
              {children}
            </div>
          </div>
          </div>
          <div className="hidden md:block md:col-span-1">
          </div>
        </div>
        </body>
        </AuthProvider>
    </html>
    </QueryClientProvider>

  )
}

export default RootLayout;