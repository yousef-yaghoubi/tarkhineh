'use server';
import { DemoFoodModalType, FoodType } from '@/lib/indexType';
import prisma from '@/prisma/prismaClient';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';


const SchemaSearchParams = z.string().max(25).min(3);
type typeSearchParams = z.infer<typeof SchemaSearchParams>;
export async function SearchFood(
  searchQuery: typeSearchParams
): Promise<FoodType[] | undefined> {
  try {
    const validation = SchemaSearchParams.safeParse(searchQuery);

    if (!validation.success) {
      return undefined;
    }

    const foods = await prisma.foods.findMany({
      where: {
        name: { contains: searchQuery },
      },
      select: {
        id: true,
        name: true,
        image: true,
        desc: true,
        price: true,
        order: true,
        rating: true,
        _count: {
          select: {
            commentsFood: true,
          },
        },
      },
    });
    revalidatePath('/search');
    return foods;
  } catch (error) {
    console.log(error);
  }
}

const SchemaId = z.number().min(1).max(1000);
type IdType = z.infer<typeof SchemaId>;
export async function GetDemoUniqueFood(id: IdType) {
  try {
    const validation = SchemaId.safeParse(id);
    if (!validation.success) {
      return { status: 400, message: '', food: null };
    }
    const food: DemoFoodModalType | null = await prisma.foods.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        image: true,
        desc: true,
        rating: true,
        _count: {
          select: {
            commentsFood: true,
          },
        },
      },
    });

    if (food == undefined || food == null) {
      return {
        status: 404,
        message: 'غدایی با این مشخصات پیدا نشد.',
        food: null,
      };
    }

    return { status: 200, message: 'کالای مورد نظر پیدا شد.', food: food };
  } catch (error) {
    console.log(error);
  }
}
