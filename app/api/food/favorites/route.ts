import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search');
  const type = searchParams.get('categorie') as
    | 'food'
    | 'appetizer'
    | 'dessert'
    | 'drink'
    | 'all'
    | string;

  let typeIdFoods;

  switch (type) {
    case 'food':
      typeIdFoods = '6806567e8c5946ee9db897a3';
      break;
    case 'appetizer':
      typeIdFoods = '6806567e8c5946ee9db897a4';
      break;
    case 'dessert':
      typeIdFoods = '6806567e8c5946ee9db897a5';
      break;
    case 'drink':
      typeIdFoods = '6806567e8c5946ee9db897a6';
      break;
  }

  try {
    if (session?.user.email) {
      NextResponse.json({
        favorites: null,
      });
    }
    const favorites = await prisma.favorite.findUnique({
      where: {
        userId: session?.user.id,
        foods: {
          some: {
            typeId: typeIdFoods,
            isExtant: true,
          },
        },
      },
      include: {
        foods: {
          where: {
            typeId: typeIdFoods,
            ...(search && { name: { contains: search } }),
          },
          include: {
            _count: {
              select: {
                commentsFood: true,
              },
            },
          },
        },
      },
    });

    const result = favorites?.foods.map((food) => ({
      ...food,
      isFavorite: true,
    }));

    return NextResponse.json({
      favorites: { ...favorites, foods: result },
    });
  } catch (error) {
    return NextResponse.json({
      favorites: null,
    });
    console.log(error);
  }
}
