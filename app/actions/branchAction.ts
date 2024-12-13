'use server';

import prisma from '@/lib/prismaClient';


export async function GetBranch(branchName: string) {
  try {
    const branch = await prisma.branchs.findUnique({
      where: {
        name: branchName,
      },
      include: {
        commentsBranch: {
          select: {
            user: true,
            createdAt: true,
            desc: true,
            score: true,
          },
        },
      },
    });

    return branch;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFoodsSpecial(branchName:string) {
  try {
    const foods = await prisma.foods.findMany({
      where: {
        branch :{
          name: branchName
        }
      },
      select:{
        id:true,
        name:true,
        image:true,
        desc:true,
        price:true,
        order:true,
        rating:true,
        _count:{
          select:{
            commentsFood:true
          }
        }
      },
    });

    return foods;
  } catch (error) {
    console.log(error);
  }
}
