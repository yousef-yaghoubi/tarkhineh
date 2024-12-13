import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { phone, food } = await req.json();

    // Validate input
    if (!phone  && !food) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Example of creating a "post" (simulated here)

    await prisma.user.create({
      data: {
        phone,
        favorite:{
          create:{
            foods: {
              connect:{
                id: food
              }
            }
          }
        }
      },  
    });
    const user = await prisma.user.findUnique({
      where:{
        phone: phone
      }
    })
    // Return success response
    return NextResponse.json(
      { message: 'Post created successfully', data: user },
      { status: 201 }
    );
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: 'Something went wrong', details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const foods = await prisma.foods.findMany({
      include:{
        branch: {
          select: {
            id:true,
            name:true
          }
        }
      }
    })


    return NextResponse.json({ foods });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong', details: error },
      { status: 500 }
    );
  }
}
