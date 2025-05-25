import { DemoFoodModalType } from '@/types';
import prisma from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET(req: Request) {
  const SchemaId = z.string()
  type IdType = z.infer<typeof SchemaId>;
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id') as IdType;

  try {
    const validation = SchemaId.safeParse(id);
    
    if (!validation.success) {
      return NextResponse.json({ status: 400, message: '', food: null });
    }

    const food: DemoFoodModalType | null = await prisma.foods.findUnique({
      where: {
        id: id,
        isExtant: true,
      },
      select: {
        id: true,
        name: true,
        image: true,
        desc: true,
        rating: true,
        _count: {
          select: {
            commentsFood: true,
          },
        },
      },
    });

    if (food == undefined || food == null) {
      return NextResponse.json({
        status: 404,
        message: 'غدایی با این مشخصات پیدا نشد.',
        food: null,
      });
    }

    return NextResponse.json({
      status: 200,
      message: 'کالای مورد نظر پیدا شد.',
      food: food,
    });
  } catch (error) {
    console.log(error);
  }
}
