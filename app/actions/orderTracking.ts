'use server';
import prisma from '@/prisma/prismaClient';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { FoodType, OrderState } from '@/types';

export interface FoodTypeProp extends FoodType {
  quantity: number;
}
export async function SendOrder({
  order,
  cart,
}: {
  order: OrderState;
  cart: FoodTypeProp[];
}) {
  const data = await getServerSession(authOptions);
  if (!data?.user)
    return { status: 401, message: 'لطفا وارد حساب کاربری شوید.' };
  try {
    const filteredCart = cart.map(({ name, image, price, quantity }) => ({
      name,
      image,
      price,
      quantity,
    }));

    const foodNames = filteredCart.map(({ name }) => name);
    const foodItems = await prisma.foods.findMany({
      where: { name: { in: foodNames } },
    });

    const foodIds = foodItems.map((item) => item.id);

    await prisma.foods.updateMany({
      where: {
        id: { in: foodIds },
      },
      data: {
        numberOfSell: {
          increment: 1,
        },
      },
    });

    await prisma.orderTracking.create({
      data: {
        branchId: '6807aa2012b8ff1e272caf6f',
        userId: data?.user.id,
        paymentMethodId: order.payment.type === 'online' ? '680656138c5946ee9db89778' : '680656138c5946ee9db89779',
        sendMethodId: order.delivery.type === 'delivery' ? '6806562b8c5946ee9db8977b' : '6806562b8c5946ee9db8977c',
        statusId: '680656548c5946ee9db89786',
        discount: order.fee.discount,
        price: order.fee.price,
        foods: {
          createMany: {
            data: filteredCart.map(({ name, quantity }) => ({
              foodId: foodItems.find((food) => food.name === name)
                ?.id as string,
              quantity,
            })),
          },
        },
      },
    });

    return { status: 201, message: 'سفارش شما با موفقیت ثبت شد.' };
  } catch (error) {
    return { status: 500, message: 'خطایی رخ داده است.' };
    console.log(error);
  }
}

export async function CancelOrderTrack(id: string) {
  try {
    await prisma.orderTracking.update({
      where: {
        id,
      },
      data: {
        statusId: '680656548c5946ee9db89788',
      },
    });

    revalidatePath('/user/order-tracking');
    return { status: 200, message: 'سفارش شما با موفقیت لغو شد.' };
  } catch (error) {
    return { status: 400, message: 'لغو سفارش شما با مشکل مواجه شد.' };
    console.log(error);
  }
}

export async function AgainSubmitOrderTrack(id: string) {
  try {
    const orderTrack = await prisma.orderTracking.findUnique({
      where: {
        id,
      },
      include: {
        foods: true,
      },
    });
    await prisma.orderTracking.create({
      data: {
        price: orderTrack!.price,
        branchId: orderTrack!.branchId,
        discount: orderTrack!.discount,
        paymentMethodId: orderTrack!.paymentMethodId,
        sendMethodId: orderTrack!.sendMethodId,
        statusId: '680656548c5946ee9db89786',
        userId: orderTrack!.userId,
        foods: {
          create: orderTrack!.foods.map((food) => ({
            foodId: food.foodId,
            quantity: food.quantity,
          })),
        },
      },
    });

    revalidatePath('/user/order-tracking');
    return { status: 201, message: 'سفارش شما با موفقیت ثبت شد.' };
  } catch (error) {
    return { status: 400, message: 'سفارش مجدد شما با مشکل مواجه شد.' };
    console.log(error);
  }
}
