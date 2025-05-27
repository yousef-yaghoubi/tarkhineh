import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get('page') as string;
    const type = searchParams.get('type') as
        | 'food'
        | 'appetizer'
        | 'dessert'
        | 'drink'
        | 'all'
        | string
        | null;
    const filter = searchParams.get('filter') as
        | 'irani'
        | 'non-Iranian'
        | 'pizzas'
        | 'sandwiches'
        | 'bestSeller'
        | 'mostEconomical'
        | 'mostPopular'
        | 'specialOffer'
        | string
        | null;
    try {
        const take = 10;
        const skip = (Number(page) - 1) * take;
        let categorieFilter;
        let sortingFilter;
        let typeIdFoods;
        let specialOffer;

        switch (filter) {
            case 'irani':
                categorieFilter = '680655e88c5946ee9db8976c';
                break;
            case 'non-Iranian':
                categorieFilter = '680655e88c5946ee9db8976d';
                break;
            case 'pizzas':
                categorieFilter = '680655e88c5946ee9db8976e';
                break;
            case 'sandwiches':
                categorieFilter = '680655e88c5946ee9db8976f';
                break;
            case 'bestSeller':
                sortingFilter = { numberOfSell: 'desc' };
                break;
            case 'mostEconomical':
                sortingFilter = { price: 'asc' };
                break;
            case 'mostPopular':
                sortingFilter = { rating: 'desc' };
                break;
            case 'specialOffer':
                specialOffer = true;
                break;
            default:
                break;
        }

        switch (type) {
            case 'food':
                typeIdFoods = '6806567e8c5946ee9db897a3';
                break;
            case 'appetizer':
                typeIdFoods = '6806567e8c5946ee9db897a4';
                break;
            case 'dessert':
                typeIdFoods = '6806567e8c5946ee9db897a5';
                break;
            case 'drink':
                typeIdFoods = '6806567e8c5946ee9db897a6';
                break;
        }

        const foods = await prisma.foods.findMany({
            where: {
                typeId: typeIdFoods,
                categorieId: categorieFilter,
                specialOffer: specialOffer,
            },
            orderBy: sortingFilter
                ? 'rating' in sortingFilter
                    ? { rating: sortingFilter.rating === 'asc' ? 'asc' : 'desc' }
                    : 'price' in sortingFilter
                        ? { price: sortingFilter.price === 'asc' ? 'asc' : 'desc' }
                        : 'numberOfSell' in sortingFilter
                            ? {
                                numberOfSell:
                                    sortingFilter.numberOfSell === 'asc' ? 'asc' : 'desc',
                            }
                            : undefined
                : undefined,
            skip,
            take,
        })

        return NextResponse.json(foods)
    } catch (error) {
        throw new Error("Failed to fetch foods: " + error);
    }
}