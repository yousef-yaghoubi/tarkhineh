'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/prisma/prismaClient';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function AddFoodToFavorite(id: number) {
  const SchemaId = z.number().min(1).max(1000);
  const session = await getServerSession(authOptions);

  if (!session?.user.email) {
    return { status: 401, message: 'لطفا وارد حساب کاربری شوید.' };
  }

  try {
    const validation = SchemaId.safeParse(id);

    if (!validation.success) {
      return { status: 400, message: validation.error };
    }

    const favorite = await prisma.favorite.findUnique({
      where: { userId: Number(session.user.id) },
      include: {
        foods: true,
      },
    });

    if (!favorite) {
      await prisma.favorite.create({
        data: {
          userId: Number(session.user.id),
          foods: { connect: { id: id } },
        },
      });
    } else {

      const isFoodAlreadyInFavorites = favorite.foods.some(
        (food) => food.id === id
      );

      if (isFoodAlreadyInFavorites) {
        await prisma.favorite.update({
          where: {
            userId: Number(session.user.id),
          },
          data: {
            foods: {
              disconnect: {
                id: id,
              },
            },
          },
        });

        revalidatePath('/user/favorites');
        return {
          status: 200,
          message: 'محصول با موفقیت از لیست علاقمندی ها حذف شد.',
        };
      }


      await prisma.favorite.update({
        where: { userId: Number(session.user.id) },
        data: {
          foods: { connect: { id: id } },
        },
      });
    }

    revalidatePath('/user/favorites');
    return { status: 201, message: 'محصول با موفقیت به علاقمندی ها اضافه شد.' };
  } catch (error) {
    return { status: 400, message: error as string };
  }
}
