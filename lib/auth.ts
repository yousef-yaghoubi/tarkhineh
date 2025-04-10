import { AuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import {
  LoginOrSignUpUserWithCredential,
  LoginOrSignUpUserWithGoogle,
} from '@/app/actions/userAction';

export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          if (!credentials) return null;
  
          const { email, password } = credentials;
  
          const user = await LoginOrSignUpUserWithCredential({ email, password });
  
          if (!user) return null;
  
          return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
            profile: user.profile,
            role: user.role,
            phone: user.phone,
          };
        },
      }),
  
      GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID as string,
        clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        async profile(profile) {
          const user = await LoginOrSignUpUserWithGoogle(profile);
  
          if (!user) throw new Error('User not found or failed to create.');
  
          return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            name: `${user.firstName || 'کاربر'} ${user.lastName || 'ترخینه'}`.trim(),
            profile: user.profile,
            role: user.role,
            phone: user.phone,
          };
        },
        httpOptions: {
          timeout: 100000,
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user, trigger, session }: any) {
        if (user) {
          token.id = user.id;
          token.email = user.email;
          token.name = `${user.firstName || 'کاربر'} ${user.lastName || 'ترخینه'}`;
          token.image = user.profile;
          token.phone = user.phone ?? null;
          token.role = user.role;
        }
  
        if (trigger === 'update' && session) {
          token.email = session.email;
          token.name = `${session.firstName || 'کاربر'} ${session.lastName || 'ترخینه'}`;
          token.image = session.profile;
          token.phone = session.phone ?? null;
          token.role = session.role;
        }
  
        return token;
      },
  
      async session({ session, token }) {
        if (session.user) {
          session.user.id = token.id;
          session.user.email = token.email;
          session.user.name = token.name;
          session.user.image = token.image;
          session.user.role = token.role;
          session.user.phone = token.phone ?? null;
        }
        return session;
      },
    },
    session: {
      strategy: 'jwt',
    },
    pages: {
      signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET as string,
  };