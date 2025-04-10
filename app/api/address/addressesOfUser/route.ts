import { getServerSession } from 'next-auth';
import prisma from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/auth';

export async function GET() {
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


    return Response.json({ addresses: response?.addresses },{status: 200});
  } catch (error) {
    return Response.json({ addresses: null }, {status: 400});
    console.log(error)
  }
}
