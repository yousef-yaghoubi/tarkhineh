'use server'

import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
export async function GetUser() {
    try {
        const users = await prisma.user.findMany()

        return users
    } catch (error) {
        console.log(error)
    }
}