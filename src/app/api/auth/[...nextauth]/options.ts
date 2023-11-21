import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Your username" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // This is where you should actually use a database to verify creds
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: 1, name: "Test User", password: "test" };
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user as any;
                } 
                else {
                    return null;
                }
            }
        })
    ],
}