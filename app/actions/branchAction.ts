'use server';

import prisma from '@/prisma/prismaClient';


export async function GetBranch(branchName: string) {
  try {
    const branch = await prisma.branchs.findUnique({
      where: {
        name: branchName,
      },
      select:{
        id:true,
        name:true,
        address:true,
        images:true,
        phones:true,
        openDuration:true,
        commentsBranch:{
          select:{
            id:true,
            desc:true,
            createdAt:true,
            score:true,
            user:{
              select:{
                profile: true,
                firstName:true,
                lastName:true
              }
            }
          }
        },
      }
      // include: {
      //   commentsBranch: {
      //     select: {
      //       user: true,
      //       createdAt: true,
      //       desc: true,
      //       score: true,
      //     },
      //   },
      // },
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
        },
        specialOffer: true
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
      take: 10
    });

    return foods;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFoodsPopular(branchName:string) {
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
        },
      },
      orderBy:{
        rating: 'desc'
      },
      take: 10
    });

    return foods;
  } catch (error) {
    console.log(error);
  }
}

export async function GetFoodsNotIrani(branchName:string) {
  try {
    const foods = await prisma.foods.findMany({
      where: {
        branch :{
          name: branchName
        },
        categorieId: 2
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
        },
      },
      take: 10
    });

    return foods;
  } catch (error) {
    console.log(error);
  }
}