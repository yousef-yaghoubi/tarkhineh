'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/prisma/prismaClient';
import { revalidatePath, revalidateTag } from 'next/cache';
import { z } from 'zod';
import { FoodTypeFull } from '@/types';

const SchemaId = z.string().min(1, 'آیدی نمی‌تواند خالی باشد');

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


export async function UpdateFoodRating(foodId: string) {
  const comments = await prisma.commentsFood.findMany({
    where: { foodId, public: true },
    select: { score: true },
  });

  if (comments.length === 0) return;

  const avgRating = comments.length > 0 ? comments.reduce((acc, curr) => acc + curr.score, 0) / comments.length : 0;

  await prisma.foods.update({
    where: { id: foodId },
    data: { rating: avgRating },
  });
}

type DeleteFoodResponse = {
  status: number;
  message: string;
  data?: any;
};

export async function DeleteFood(id: string): Promise<DeleteFoodResponse> {
  // Validation
  const validation = SchemaId.safeParse(id);
  if (!validation.success) {
    console.error('خطای validation:', validation.error.issues);
    return {
      status: 400,
      message: 'آیدی نامعتبر است'
    };
  }

  try {
    // بررسی وجود food قبل از حذف
    const existingFood = await prisma.foods.findUnique({
      where: { id }
    });

    if (!existingFood) {
      return {
        status: 404,
        message: 'محصول مورد نظر یافت نشد'
      };
    }


    const deletedFood = await prisma.foods.update({
      where: { id },
      data: {
        isExtant: false
      }
    });

    revalidatePath('/admin/foods');

    console.log('محصول با موفقیت حذف شد:', deletedFood.id);

    return {
      status: 200,
      message: 'محصول با موفقیت حذف شد',
      data: { id: deletedFood.id }
    };

  } catch (error: any) {
    console.error('خطا در حذف محصول:', error);

    // بررسی نوع خطا
    if (error.code === 'P2025') {
      // Prisma error: Record not found
      return {
        status: 404,
        message: 'محصول مورد نظر یافت نشد'
      };
    }

    return {
      status: 500,
      message: 'خطای داخلی سرور. لطفا دوباره تلاش کنید'
    };
  }
}

export async function DeleteBackFood(id: string) {
  // Validation
  const validation = SchemaId.safeParse(id);
  if (!validation.success) {
    console.error('خطای validation:', validation.error.issues);
    return {
      status: 400,
      message: 'آیدی نامعتبر است'
    };
  }

  try {
    // بررسی وجود food قبل از حذف
    const existingFood = await prisma.foods.findUnique({
      where: { id, isExtant: false }
    });

    if (!existingFood) {
      return {
        status: 404,
        message: 'محصول مورد نظر یافت نشد'
      };
    }

    await prisma.foods.update({
      where: { id },
      data: {
        isExtant: true
      }
    })
    return {
      status: 200,
      message: 'محصول با موفقیت بازگردانی شد',
    }
  } catch (error: any) {

  }
}

