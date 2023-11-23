"use client";

import React, { useState } from 'react';
import { handleSignUp } from '../../api/auth/[...nextauth]/handleSignUp';

const SignUpForm = () => {
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        const success = await handleSignUp(
          String(formData.get('username')),
          String(formData.get('password')),
          String(formData.get('email')),
        );
        setMessage(success ? 'Sign-up was successful' : 'Sign-up failed');
      };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
            Username:
            <input type="text" name="username" required />
            </label>
        </div>
        <div>
            <label>
            Password:
            <input type="password" name="password" required />
            </label>
        </div>
        <div>
            <label>
            Email:
            <input type="email" name="email" required />
            </label>
        </div>
        <div>
            <input type="submit" value="Sign Up" />
        </div>
        </form>
        <p>{message}</p>
      </>
    );
  };

export default SignUpForm;