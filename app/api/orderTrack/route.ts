import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');

  const data = await getServerSession(authOptions);
  if (!data?.user) return NextResponse.json({ status: 401, message: 'لطفا وارد حساب کاربری شوید.' });

  try {
    const dateNew = new Date();
    dateNew.setHours(dateNew.getHours() - 1);

    await prisma.orderTracking.updateMany({
      where: {
        statusId: 1,
        date: {
          lt: dateNew,
        },
      },
      data: {
        statusId: 2,
      },
    });

    const order = await prisma.orderTracking.findMany({
      where: {
        userId: Number(data.user.id),
        statusId:
          status == 'current'
            ? 1
            : status == 'delivered'
              ? 2
              : status == 'canceled'
                ? 3
                : undefined,
      },
      orderBy: {
        date: 'desc',
      },
      select: {
        id: true,
        date: true,
        foods: {
          select: {
            quantity: true,
            food: {
              select: {
                name: true,
                image: true,
                price: true,
                order: true,
              },
            },
          },
        },
        price: true,
        discount: true,
        sendMethod: true,
        status: true,
      },
    });

    return NextResponse.json({ status: 200, message: '', order });
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'خطایی رخ داده است.' });
    console.log(error)
  }
}
