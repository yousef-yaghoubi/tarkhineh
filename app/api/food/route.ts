import prisma from '@/prisma/prismaClient';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { authOption } from '../auth/[...nextauth]/route';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const session = await getServerSession(authOption);
  const branchName = searchParams.get('branchName') as string;
  const page = searchParams.get('page') as string;
  const type = searchParams.get('type') as
    | 'food'
    | 'appetizer'
    | 'dessert'
    | 'drink'
    | 'all'
    | string
    | null;

  const filter = searchParams.get('filter') as
    | 'irani'
    | 'non-Iranian'
    | 'pizzas'
    | 'sandwiches'
    | 'bestSeller'
    | 'mostEconomical'
    | 'mostPopular'
    | 'specialOffer'
    | string
    | null;

  try {
    const take = 10;
    const skip = (Number(page) - 1) * take;
    let categorieFilter;
    let sortingFilter;
    let typeIdFoods;
    let specialOffer;

    switch (filter) {
      case 'irani':
        categorieFilter = 1;
        break;
      case 'non-Iranian':
        categorieFilter = 2;
        break;
      case 'pizzas':
        categorieFilter = 3;
        break;
      case 'sandwiches':
        categorieFilter = 4;
        break;
      case 'bestSeller':
        sortingFilter = { rating: 'desc' };
        break;
      case 'mostEconomical':
        sortingFilter = { price: 'asc' };
        break;
      case 'mostPopular':
        sortingFilter = { rating: 'desc' };
        break;
      case 'specialOffer':
        specialOffer = true;
        break;
      default:
        break;
    }

    switch (type) {
      case 'food':
        typeIdFoods = 1;
        break;
      case 'appetizer':
        typeIdFoods = 2;
        break;
      case 'dessert':
        typeIdFoods = 3;
        break;
      case 'drink':
        typeIdFoods = 4;
        break;
      default:
        break;
    }

    const foods = await prisma.foods.findMany({
      where: {
        branch: {
          OR: [{ name: branchName }, { nickName: branchName }],
        },
        typeId: typeIdFoods,
        categorieId: categorieFilter,
        specialOffer: specialOffer,
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
        favorite: session?.user.id
          ? {
              where: {
                userId: Number(session.user.id),
              },
              select: {
                id: true,
              },
            }
          : undefined,
      },
      // @ts-ignore
      orderBy: sortingFilter,
      skip: skip,
      take: take,
    });

    const result = foods.map((food)  => ({
      ...food,
      // @ts-ignore
      isFavorite: session?.user.id ? food.favorite !== null : false,
    }));

    revalidatePath('/menu');
    revalidatePath('/branchs');

    return NextResponse.json({
      foods: result,
    });
  } catch (error) {
    return NextResponse.json({
      foods: null,
    });
  }
}
