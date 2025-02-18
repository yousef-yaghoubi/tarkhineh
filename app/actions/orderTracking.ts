'use server';

import { FoodType, OrderState } from "@/lib/indexType";
import prisma from "@/prisma/prismaClient";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { stat } from "fs";

export interface FoodTypeProp extends FoodType{
  quantity: number
}
export async function SendOrder({order, cart}: {order: OrderState, cart: FoodTypeProp[]}) {
    const data = await getServerSession(authOption)
    if(!data?.user) return {status: 401, message: 'لطفا لاگین کنید.'};

    try {
        const filteredCart = cart.map(({ name, image, price, quantity }) => ({ name, image, price, quantity }));

        const foodNames = filteredCart.map(({ name }) => name);
        const foodItems = await prisma.foods.findMany({
            where: { name: { in: foodNames } }
        });


        const orderS = await prisma.orderTracking.create({
            data:{
                branchId: 2,
                userId: Number(data?.user.id),
                paymentMethodId: order.payment === 'online' ? 1 : 2,
                sendMethodId: order.delivery.type === 'delivery' ? 1 : 2,
                statusId: 1,
                foods:{ createMany: {
                    data: filteredCart.map(({ name, quantity }) => ({
                        foodId: foodItems.find((food) => food.name === name)?.id as number,
                        quantity
                    }))
                }},
            }
        })

        return {status:201, message: 'سفارش شما با موفقیت ثبت شد.'}
    } catch (error) {
        return {status: 500, message: 'خطایی رخ داده است.'}
    }
}