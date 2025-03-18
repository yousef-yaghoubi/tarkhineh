'use server';

import {
  hashingPasswordWithkey,
  verifyHashedPassword,
} from '@/lib/hashingPass';
import {
  SchemaEditProfile,
  SchemaEmail,
  SchemaLogin,
} from '@/lib/zod';
import prisma from '@/prisma/prismaClient';
import { getServerSession } from 'next-auth';
import { z } from 'zod';


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
    throw new Error(error as string);
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
    throw new Error(error as string);
    return null;
  }
}


export async function UpdateUser(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDay: string;
  nickName: string;
}) {
  const session = await getServerSession();
  try {
    const validation = SchemaEditProfile.safeParse(formData);

    if (!validation.success) {
      return {
        status: 401,
        message: 'لطفا اطلاعات درست وارد کنید.',
        data: null,
      };
    }
    const updateUser = await prisma.user.update({
      where: {
        email: session!.user.email,
      },
      data: {
        email: formData.email,
        nickName: formData.nickName,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        // birthDay: formData.birthDay,
      },
    });
    return {
      status: 200,
      message: 'اطلاعات با موفقیت آپدیت شد.',
      data: updateUser,
    };
  } catch (error) {
    console.log(error);
    return { status: 400, message: 'مشکلی پیش آمده.', data: null };
  }
}
