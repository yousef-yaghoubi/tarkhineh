import prisma from '@/prisma/prismaClient';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const session = await getServerSession(authOptions);
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
        categorieFilter = '680655e88c5946ee9db8976c';
        break;
      case 'non-Iranian':
        categorieFilter = '680655e88c5946ee9db8976d';
        break;
      case 'pizzas':
        categorieFilter = '680655e88c5946ee9db8976e';
        break;
      case 'sandwiches':
        categorieFilter = '680655e88c5946ee9db8976f';
        break;
      case 'bestSeller':
        sortingFilter = { numberOfSell: 'desc' };
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
                userId: session.user.id,
              },
              select: {
                id: true,
              },
            }
          : undefined,
      },

      orderBy: sortingFilter
        ? 'rating' in sortingFilter
          ? { rating: sortingFilter.rating === 'asc' ? 'asc' : 'desc' }
          : 'price' in sortingFilter
            ? { price: sortingFilter.price === 'asc' ? 'asc' : 'desc' }
            : 'numberOfSell' in sortingFilter
              ? {
                  numberOfSell:
                    sortingFilter.numberOfSell === 'asc' ? 'asc' : 'desc',
                }
              : undefined
        : undefined,
      skip: skip,
      take: take,
    });

    const result = foods.map((food) => ({
      ...food,
      isFavorite: session?.user.id ? food.favorite !== null : false,
    }));

    return NextResponse.json({
      foods: result,
    });
  } catch (error) {
    return NextResponse.json({
      foods: null,
    });
    console.log(error);
  }
}
