import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from 'next-auth';
import { compare } from "bcryptjs";
import prisma from "@/lib/prisma";

export const { handlers: { GET, POST }, auth } = NextAuth({
    trustHost: true,
    providers: [
        CredentialsProvider({
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
        async authorize(credentials) {
            try {
                if (!credentials?.password) return null;

                const user = await prisma.user.findFirst({
                where: {email: credentials?.username as string },
                });

                if (!user) return null;

                if (!(await compare(credentials?.password as string, user.password))) throw new Error("Invalid password");

                return user;
            } catch (error) {
                console.error(error);

                return null;
            }
        },
      })
    ],
    callbacks: {
      async jwt ({ token, user }) {
        if (user) {
          token.sub = user.id;
          token.first_name = user.first_name;
          token.last_name = user.last_name;
          token.email = user.email;
          token.role = user.role
        }

        return token;
      },
      async session ({ session, token }) {
        return {
          ...session,
          user: {
            id: token.sub as string,
            first_name: token.first_name as string,
            last_name: token.last_name as string,
            email: token.email as string,
            role: token.role as string,
          },
        };
      },
    },
  });
