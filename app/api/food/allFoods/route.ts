import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const foods = await prisma.foods.findMany()

        return NextResponse.json(foods)
    } catch (error) {
        throw new Error("Failed to fetch foods: " + error);
    }
}