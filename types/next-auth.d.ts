import NextAuth from "next-auth";
declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      email: string;
      name: string;
      image: string | null;
      role: string;
      phone: string | null;
    };
  }

  interface User {
    id: number;
    email: string;
    firstName: string | null;
    lastName: string | null;
    profile: string | null;
    role: string;
    phone: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: number;
    email: string;
    name: string;
    image: string | null;
    role: string;
    phone: string | null;
  }
}