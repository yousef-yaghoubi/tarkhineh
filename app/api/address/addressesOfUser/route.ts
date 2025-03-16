import { getServerSession } from 'next-auth';
import prisma from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { setEngine } from 'crypto';
import { authOption } from '../../auth/[...nextauth]/route';

export async function GET(req: Request) {
  const session = await getServerSession(authOption);
  
  
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
  }
}
