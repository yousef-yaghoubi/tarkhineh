'use server'
import { FoodType } from '@/lib/indexType';
import prisma from '@/prisma/prismaClient';
import { revalidatePath } from 'next/cache';

export async function GetAllFoods({
  branchName,
  page = 1,
  type,
  filter,
}: {
  branchName: string;
  page: number;
  type?: 'food' | 'appetizer' | 'dessert' | 'drink' | 'all' | string;
  filter?:
    | 'irani'
    | 'non-Iranian'
    | 'pizzas'
    | 'sandwiches'
    | 'bestSeller'
    | 'mostEconomical'
    | 'mostPopular'
    | 'specialOffer'
    | string;
}): Promise<FoodType[] | undefined> {
  try {
    const take = 10;
    const skip = (page - 1) * take;
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
        specialOffer = true
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
          name: branchName,
        },
        typeId: typeIdFoods,
        categorieId: categorieFilter,
        specialOffer: specialOffer
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
      // @ts-ignore
      orderBy: sortingFilter,
      skip: skip,
      take: take,
    });

    revalidatePath('/menu');
    // @ts-ignore
    return foods;
  } catch (error) {
    console.log(error);
  }
}
