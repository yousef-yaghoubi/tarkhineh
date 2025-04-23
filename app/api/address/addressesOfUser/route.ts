import { getServerSession } from 'next-auth';
import prisma from '@/prisma/prismaClient';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  
  
  if(!session){
    return NextResponse.json({message: 'UnAuthorized'}, {status: 401});
  }

  try {
    const response = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        addresses: true,
      },
    });


    return NextResponse.json({ addresses: response?.addresses },{status: 200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ addresses: null }, {status: 400});
  }
}
