import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') as string;

    try {
        const take = 10;
        const skip = (Number(page) - 1) * take;
        const comments = await prisma.commentsFood.findMany({
            include:{
                food: true
            },
            take,
            skip,
        })

        return NextResponse.json(comments)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: error
        })
    }
}