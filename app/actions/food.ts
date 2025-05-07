'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/prisma/prismaClient';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';
import { FoodTypeFull } from '@/types';

const SchemaId = z.string();

export async function AddFoodToFavorite(id: string) {
  const validation = SchemaId.safeParse(id);
  if (!validation.success) {
    return { status: 400, message: validation.error };
  }

  const session = await getServerSession(authOptions);
  if (!session?.user.email || !session.user.id) {
    return { status: 401, message: 'لطفا وارد حساب کاربری شوید.' };
  }

  try {
    const favorite = await prisma.favorite.findUnique({
      where: { userId: session.user.id },
      include: { foods: true },
    });

    if (!favorite) {
      await prisma.favorite.create({
        data: {
          userId: session.user.id,
          foods: { connect: { id } },
        },
      });
    } else {
      const isFoodAlreadyInFavorites = favorite.foods.some(
        (food: FoodTypeFull) => food.id === id
      );

      if (isFoodAlreadyInFavorites) {
        await prisma.favorite.update({
          where: { userId: session.user.id },
          data: {
            foods: { disconnect: { id } },
          },
        });

        revalidateTag('favorites');
        revalidateTag('food');

        return {
          status: 200,
          message: 'محصول با موفقیت از لیست علاقمندی ها حذف شد.',
        };
      }

      await prisma.favorite.update({
        where: { userId: session.user.id },
        data: {
          foods: { connect: { id } },
        },
      });
    }

    revalidateTag('favorites');
    revalidateTag('food');

    return {
      status: 201,
      message: 'محصول با موفقیت به علاقمندی ها اضافه شد.',
    };
  } catch (error) {
    return {
      status: 400,
      message: error as string,
    };
  }
}
