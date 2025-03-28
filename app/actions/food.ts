'use server';

import { getServerSession } from 'next-auth';
import { authOption } from '../api/auth/[...nextauth]/route';
import prisma from '@/prisma/prismaClient';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function AddFoodToFavorite(id: number) {
  const SchemaId = z.number().min(1).max(1000);
  const session = await getServerSession(authOption);

  if (!session?.user.email) {
    return { status: 401, message: 'لطفا لاگین کنید.' };
  }

  try {
    const validation = SchemaId.safeParse(id);

    if (!validation.success) {
      return { status: 400, message: validation.error };
    }

    let favorite = await prisma.favorite.findUnique({
      where: { userId: Number(session.user.id) },
      include: {
        foods: true,
      },
    });

    if (!favorite) {
      // Create a favorite record if it doesn't exist
      await prisma.favorite.create({
        data: {
          userId: Number(session.user.id),
          foods: { connect: { id: id } },
        },
      });
    } else {
      // Check if the food is already in favorites
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
        revalidatePath('/menu');
        revalidatePath('/branchs');
        return {
          status: 200,
          message: 'محصول با موفقیت از لیست علاقمندی ها حذف شد.',
        };
      }

      // Add the food to favorites
      await prisma.favorite.update({
        where: { userId: Number(session.user.id) },
        data: {
          foods: { connect: { id: id } },
        },
      });
    }

    revalidatePath('/user/favorites');
    revalidatePath('/menu');
    revalidatePath('/branchs');
    return { status: 200, message: 'محصول با موفقیت به علاقمندی ها اضافه شد.' };
  } catch (error) {
    return { status: 400, message: error as string };
  }
}
