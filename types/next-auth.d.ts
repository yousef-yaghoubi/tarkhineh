import NextAuth from "next-auth";
declare module "next-auth" {
    interface User {
        id: string;
        firstName: string;
        lastName: string;
        name: string;
        email: string;
        phone: string;
        profile: string;
        role: string;
    }
  
    interface Session {
      user: User;
    }
  }