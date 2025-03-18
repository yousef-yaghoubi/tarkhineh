import { FoodType } from '@/lib/indexType';
import prisma from '@/prisma/prismaClient';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const SchemaSearchParams = z.string().max(25).min(3);
  type typeSearchParams = z.infer<typeof SchemaSearchParams>;
  const searchQuery = searchParams.get('search') as typeSearchParams;

  try {
    const validation = SchemaSearchParams.safeParse(searchQuery);

    if (!validation.success) {
      return undefined;
    }

    const foods: FoodType[] | undefined = await prisma.foods.findMany({
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
    return NextResponse.json({
      foods,
    });
  } catch (error) {
    throw new Error(error as string);
  }
}
