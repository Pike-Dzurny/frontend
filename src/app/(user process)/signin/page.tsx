'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function SignIn() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
  
    await signIn('credentials', { username, password, callbackUrl: '/' });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-2">
      <div className="hidden md:block md:w-2/3">
        <img src="https://extension.unh.edu/sites/default/files/styles/max_width_480px/public/migrated_images/trees.jpg?itok=b-gZXROM" alt="Placeholder" className="object-cover w-full h-full" />
      </div>
      <div className="w-full md:w-1/3 p-4">
        <form onSubmit={handleSubmit} className="shadow p-5 border-gray-300 rounded-md bg-white mb-4">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4">Sign back in</h2>

          <input name="username" placeholder="Username" required className="mb-4 w-full p-2 border-2 border-gray-300 rounded-md" />
          <input name="password" type="password" placeholder="Password" required className="mb-4 w-full p-2 border-2 border-gray-300 rounded-md" />
          <button type="submit" className="mb-4 w-full p-2 bg-sky-500 hover:bg-sky-400 text-white rounded-md">Sign In</button>
          <Link href="/forgot-password">
            <p className="text-sky-500 text-center hover:text-sky-500">Forgot Password?</p>
          </Link>
        </form>
        <div className="shadow p-5 border-gray-300 rounded-md bg-white flex flex-col items-center w-full">
            <p className="mb-4">Don't have an account?</p>
            <Link href="/signup" className='w-full'>
                <div className="w-full p-2 bg-green-500 text-white text-center rounded-md">Sign Up</div>
            </Link>
        </div>
      </div>
    </div>
  );
}