import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/prisma/prismaClient'; // Prisma client instance
import bcrypt from 'bcrypt'; // For password hashing
import {
  LoginOrSignUpUserWithCredential,
  LoginOrSignUpUserWithGoogle,
} from '@/app/actions/userAction';
import { use } from 'react';
export const authOption: NextAuthOptions = {
  providers: [
    // Credentials Provider
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials!;

        // Check if the user exists in the database
        const user: null | {
          id: number;
          email: string;
          firstName: string | null;
          lastName: string | null;
          profile: string | null;
          role: string;
        } = await LoginOrSignUpUserWithCredential({ email, password });

        return user;
      },
    }),

    // Google Provider
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      async profile(profile) {
        const prof = await profile
      
        //Check if the user already exists based on Google email
        const user: null | {
          id: number;
          email: string;
          firstName: string | null;
          lastName: string | null;
          profile: string | null;
          role: string;
        } = await LoginOrSignUpUserWithGoogle(prof);


        return user;
      },
      httpOptions:{
        timeout: 100000
      }
    }),
  ],
  callbacks: {
    // JWT Callback: Store user data in JWT token
    async jwt({ token, user}) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = `${user.firstName || 'کاربر'} ${user.lastName || 'ترخینه'}`;
        token.image = user.profile;
        token.role = user.role;
      }
      return token;
    },
    // Session Callback: Attach user data to the session object
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.image;
      session.user.role = token.role;
      return session;
    },
  },
  session: {
    strategy: 'jwt', // Use JWT for session management
  },
  pages:{
    signIn: '/login'
  },
  debug:true,
   // Use Prisma adapter to store users in DB
  secret: process.env.NEXTAUTH_SECRET as string, // Set a secret for signing JWTs
}
const handler = NextAuth(authOption);

export { handler as GET, handler as POST }



