import prisma from '@/prisma/prismaClient';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const branchName = searchParams.get('branchName');

  try {
    const branch = await prisma.branchs.findUnique({
      where: {
        nickName: branchName as string,
      },
      select: {
        id: true,
        name: true,
        address: true,
        images: true,
        phones: true,
        commentsBranch: {
          where: {
            public : true
          },
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            desc: true,
            createdAt: true,
            score: true,
            user: {
              select: {
                profile: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });


    return Response.json({
      branch,
    });
  } catch (error) {
    return Response.json({
      branch: 'error',
    });
  }
}
