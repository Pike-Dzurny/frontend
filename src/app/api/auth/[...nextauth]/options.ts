import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import axios from 'axios';

//     signOut: '/signout',
export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (credentials) {
          try {
            const response = await axios.post('http://localhost:8000/auth', {
              username: credentials.username,
              password: credentials.password,
            });
      
            if (response.status === 200) {
              // If the response is OK, return the user data
              return response.data;
            } else {
              // If the response is not OK, return null
              return null;
            }
          } catch (error) {
            // If an error occurs, return null
            return null;
          }
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',
    error: '/error', 
    verifyRequest: '/verify-request', 
    newUser: '/signup' 
  }

};

export default options;