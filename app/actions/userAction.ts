'use server';

import {
  hashingPasswordWithkey,
  verifyHashedPassword,
} from '@/lib/hashingPass';
import { SchemaEmail, SchemaLogin, SchemaNewUser } from '@/lib/zod';
import prisma from '@/prisma/prismaClient';
import { signIn } from 'next-auth/react';
import { z } from 'zod';

export async function GetUser() {
  try {
    const users = await prisma.foods.findMany({
      where: {
        typeId: 4,
      },
      select: {
        image: true,
      },
    });

    return users;
  } catch (error) {
    throw new Error(error as string)
  }
}

export async function LoginOrSignUpUserWithCredential(formData: {
  email: string;
  password: string;
}): Promise<null | {
  id: number;
  email: string;
  firstName: string | null;
  lastName: string | null;
  profile: string | null;
  role: string;
}> {
  try {
    const validation = SchemaLogin.safeParse(formData);

    if (!validation.success) {
      return null;
    }

    let user = await prisma.user.findUnique({
      where: { email: formData.email },
    });

    if (!user) {
      // If user doesn't exist, create new user (sign up)
      const hashedPassword = await hashingPasswordWithkey(formData.password);
      user = await prisma.user.create({
        data: {
          email: formData.email,
          hashPass: hashedPassword,
        },
      });
    } else {
      // Check if password is correct
      const isValid = await verifyHashedPassword(
        formData.password,
        user.hashPass as string
      );

      if (!isValid) {
        throw new Error('Invalid password');
      }
    }

    // Return the user object if authenticated
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profile: user.profile,
      role: user.role,
    };
  } catch (error) {
    throw new Error(error as string)
    return null;
  }
}

type typeEmail = z.infer<typeof SchemaEmail>;
export async function LoginOrSignUpUserWithGoogle(email: typeEmail) {
  try {
    const validation = SchemaEmail.safeParse(email);
    if (!validation.success) {
      return null;
    }

    let user = await prisma.user.findUnique({
      where: { email: email.email },
    });

    
    if (!user) {
      // If the user doesn't exist, create a new one
      user = await prisma.user.create({
        data: {
          email: email.email,
        },
      });
    }

    // Return user data (this will be saved in the JWT)
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profile: user.profile,
      role: user.role,
    };
  } catch (error) {
    throw new Error(error as string)
    return null;
  }
}

export async function SubmitNewUser(formData: {
  email: string;
  password: string;
  repassword: string;
}): Promise<{ status: number; message: string } | undefined> {
  try {
    const email = formData.email;
    const password = formData.password;
    const repassword = formData.repassword;

    const data = {
      email,
      password,
      repassword,
    };

    const validating = SchemaNewUser.safeParse(data);

    if (!validating.success) {
      return { status: 400, message: validating.error.message };
    }

    const hashPass = await hashingPasswordWithkey(password);

    const chekIsExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!!chekIsExist) {
      return {
        status: 400,
        message: 'این ایمیل از قبل وجود دارد، لطفا لاگین کنید',
      };
    }

    await prisma.user.create({
      data: {
        email,
        hashPass,
      },
    });

    return { status: 201, message: 'با موفقیت ثبت نام شدید.' };
  } catch (error) {
    return { status: 400, message: 'مشکلی پیش آمد، لطفا دوباره تلاش کنید' };
    throw new Error(error as string)
  }
}

export async function SignInCredential(data: {
  email: string;
  password: string;
}) {
  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
    });
  } catch (error) {
    throw new Error(error as string)
  }
}

export async function SignInGoogle() {
  try {
    await signIn('google');
  } catch (error) {
    throw new Error(error as string)
  }
}
