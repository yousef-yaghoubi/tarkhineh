'use server';

import { SchemaAddress } from '@/validators/zod';
import prisma from '@/prisma/prismaClient';
import { z } from 'zod';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { authOptions } from '@/lib/auth';

type typeAdrress = z.infer<typeof SchemaAddress>;
export async function SendAddress(props: typeAdrress) {
  const session = await getServerSession(authOptions);
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
        revalidatePath('/user/myAddresses')
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
        error
      };
    }
  } else {
    return {
      status: 400,
      message: 'لطفا وارد حساب کاربری شوید.',
      data: null,
    };
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
