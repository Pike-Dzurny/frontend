import { Roboto } from 'next/font/google'
import '../globals.css'
import { getSession } from 'next-auth/react';
const font = Roboto({weight: ["100", "500", "300", "400", "700", "900"], subsets: ["latin"]})

import HomePage from './page'; // replace with your actual HomePage component path
import LoginPage from '../(user process)/signin/page'; // replace with your actual LoginPage component path

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session }
  }
}

function RootLayout({ session, children }) {
  if (!session) {
    return <LoginPage />;
  }

  return (
    <html lang="en">
        <body className={`${font.className} antialiased bg-gradient-to-br from-sky-50 to-cyan-100 min-h-screen` }>
        <div className="flex items-center justify-center min-h-screen">
                  <HomePage />
        </div>
        </body>
    </html>
  )
}

export default RootLayout;