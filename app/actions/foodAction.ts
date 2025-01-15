'use server'
import { DemoFoodModalType, FoodType } from '@/lib/indexType';
import prisma from '@/prisma/prismaClient';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

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


const SchemaSearchParams = z.string().max(25).min(3)
type typeSearchParams = z.infer<typeof SchemaSearchParams>
export async function SearchFood(searchQuery: typeSearchParams): Promise<FoodType[] | undefined> {
  try {
    const validation = SchemaSearchParams.safeParse(searchQuery)

    if(!validation.success){
      return undefined
    }

    const foods = await prisma.foods.findMany({
      where: {
        name: {contains: searchQuery}
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
    })
    revalidatePath('/search')
    return foods
  } catch (error) {
    console.log(error)
  }
}

const SchemaId = z.number().min(1).max(1000)
type IdType = z.infer<typeof SchemaId>
export async function GetDemoUniqueFood(id: IdType) {
  try {
    const validation = SchemaId.safeParse(id)
    if(!validation.success){
      return {status: 400, message: '', food: null}
    }
    const food : DemoFoodModalType | null = await prisma.foods.findUnique({
      where:{
        id: id
      },
      select:{
        id:true,
        name: true,
        image: true,
        desc: true,
        rating: true,
        _count:{
          select:{
            commentsFood: true
          }
        }
      }
    })

    if(food == undefined || food == null){
      return { status: 404, message:'غدایی با این مشخصات پیدا نشد.', food: null}
    }

    return {status: 200, message: 'کالای مورد نظر پیدا شد.' ,food: food}

    console.log(food)
  } catch (error) {
    console.log(error)
  }
}