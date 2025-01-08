'use server';

import prisma from '@/prisma/prismaClient';
import { revalidatePath } from 'next/cache';

export async function GetBranch(branchName: string) {
  try {
    const branch = await prisma.branchs.findUnique({
      where: {
        name: branchName,
      },
      select: {
        id: true,
        name: true,
        address: true,
        images: true,
        phones: true,
        openDuration: true,
        commentsBranch: {
          select: {
            id: true,
            desc: true,
            createdAt: true,
            score: true,
            user: {
              select: {
                profile: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });

    return branch;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFoodsSpecial(branchName: string) {
  try {
    const foods = await prisma.foods.findMany({
      where: {
        branch: {
          name: branchName,
        },
        specialOffer: true,
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
      take: 10,
    });

    return foods;
  } catch (error) {
    console.log(error);
  }
}

export async function GetAllFoods({
  branchName,
  page = 1,
}: {
  branchName: string;
  page: number;
}) {
  try {
    const take = 5;
    const skip = (page - 1) * take;
    const foods = await prisma.foods.findMany({
      where: {
        branch: {
          name: branchName,
        },
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
      take: take,
      skip: skip
    });

    revalidatePath('/')
    return foods;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFoodsPopular(branchName: string) {
  try {
    const foods = await prisma.foods.findMany({
      where: {
        branch: {
          name: branchName,
        },
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
      orderBy: {
        rating: 'desc',
      },
      take: 10,
    });

    return foods;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFoodsNotIrani(branchName: string) {
  try {
    const foods = await prisma.foods.findMany({
      where: {
        branch: {
          name: branchName,
        },
        categorieId: 2,
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
      take: 10,
    });
    return foods;
  } catch (error) {
    console.log(error);
  }
}
