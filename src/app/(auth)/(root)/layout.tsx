"use client";


import { useSession } from 'next-auth/react';

function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        {children}
      </>
    );
  }

  return null;
}
export default RootLayout;