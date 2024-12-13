'use server'

import prisma from "@/lib/prismaClient"


export async function GetUser() {
    try {
        const users = await prisma.foods.findMany({
            where:{
                typeId: 4
            },
            select:{
                image:true
            }
        })

        return users
    } catch (error) {
        console.log(error)
    }
}