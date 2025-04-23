import prisma from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const SchemaId = z.string();
  type IdType = z.infer<typeof SchemaId>;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') as IdType;

  try {
    const validation = SchemaId.safeParse(id);

    if (!validation.success) {
      return NextResponse.json({ status: 400, message: '', food: null });
    }

    const food = await prisma.foods.findUnique({
      where: {
        id: id,
      },
      select: {
        _count: {
          select: {
            commentsFood: true,
          },
        },
        id: true,
        name: true,
        desc: true,
        image: true,
        order: true,
        price: true,
        rating: true,
        commentsFood: {
          where:{
            public: true
          },
          select: {
            id: true,
            desc: true,
            createdAt: true,
            score: true,
            public: true,
            user: true,
          },
        },
        favoriteId: true,
        favorite: session?.user.id
          ? {
              where: {
                userId: session.user.id,
              },
              select: {
                id: true,
              },
            }
          : undefined,
      },
    });

    if (food == undefined || food == null) {
      return NextResponse.json({
        status: 404,
        message: 'غدایی با این مشخصات پیدا نشد.',
        food: null,
      });
    }

    const result = {
      ...food,
      isFavorite: session?.user.id ? food.favorite !== null : false,
    };

    return NextResponse.json({
      status: 200,
      message: 'کالای مورد نظر پیدا شد.',
      food: result,
    });
  } catch (error) {
    console.log(error);
  }
}
