import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from 'next-auth';
import { compare } from "bcryptjs";
import prisma from "@/lib/prisma";

export const { handlers: { GET, POST }, auth } = NextAuth({
    trustHost: true,
    providers: [
        CredentialsProvider({
            type: "credentials",
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
        }
        })
    ],
    callbacks: {
      async jwt ({ token, user }) {
        if (user) {
          token.sub = user.id;
          token.firstName = user.firstName;
          token.lastName = user.lastName;
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
            firstName: token.firstName as string,
            lastName: token.lastName as string,
            email: token.email as string,
            role: token.role as string,
          },
        };
      },
    },
  });
