'use server';

import { SchemaAddress } from '@/lib/zod';
import prisma from '@/prisma/prismaClient';
import { z } from 'zod';
import { authOption } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';

export async function GetAddress(lat: number, lng: number) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

type typeAdrress = z.infer<typeof SchemaAddress>;

export async function SendAddress(props: typeAdrress) {
  const session = await getServerSession(authOption);
  if (session?.user?.email) {
    try {
      const validation = SchemaAddress.safeParse(props);

      if (!validation.success) {
        return {
          status: 400,
          message: validation.error.errors[0].message,
          data: null,
        };
      }
      const getQuantityAddress = await prisma.addresses.count({
        where: {
          userId: Number(session.user.id),
        },
      });

      if (getQuantityAddress < 4) {
        let response = null;
        if (props.checkbox == true) {
          response = await prisma.addresses.create({
            data: {
              titleAddress: props.title,
              address: props.address,
              meReciver: true,
              phone: props.phone,
              userId: Number(session.user.id),
            },
          });
        } else {
          response = await prisma.addresses.create({
            data: {
              titleAddress: props.title,
              address: props.address,
              meReciver: false,
              nameReciver: props.nameRecipient,
              phone: props.phoneRecipient as string,
              userId: Number(session.user.id),
            },
          });
        }
        revalidatePath('/shoping/completion-info');
        return {
          status: 200,
          message: 'آدرس با موفقیت ثبت شد.',
          data: response,
        };
      }

      return {
        status: 400,
        message: 'بیشتر از 4 آدرس نمیتوانید اضافه کنید.',
        data: null,
      };
    } catch (error) {
      return {
        status: 400,
        message: 'مشکلی در ثبت آدرس پیش آمده.',
        data: null,
      };
    }
  } else {
    return {
      status: 400,
      message: 'برای ثبت آدرس باید لاگین کنید.',
      data: null,
    };
  }
}

export async function GetAddressUser() {
  const session = await getServerSession(authOption);
  if (session?.user?.email) {
    try {
      const response = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
        select: {
          addresses: true,
        },
      });
      return response;
    } catch (error) {
      console.error('Error creating address:', error);
    }
  } else {
    console.error('No user session found.');
  }
}

export async function DeleteAddress(id: number) {
  try {
    const response = await prisma.addresses.delete({
      where: {
        id,
      },
    });
    revalidatePath('/shoping/completion-info');
    return response;
  } catch (error) {
    console.error('Error creating address:', error);
  }
}
