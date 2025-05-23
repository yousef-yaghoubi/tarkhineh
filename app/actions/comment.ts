'use server';

import { authOptions } from '@/lib/auth';
import prisma from '@/prisma/prismaClient';
import { SchemaAddComment } from '@/validators/zod';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { UpdateFoodRating } from './food';

export async function AddCommentAction({
  type,
  data,
}: {
  type: { name: 'branch'; id: string } | { name: 'product'; id: string };
  data: { desc: string; rate: number };
}) {
  const session = await getServerSession(authOptions);
  try {
    const validation = SchemaAddComment.safeParse(data);

    if (session?.user.email == undefined || session.user.email == null) {
      return { status: 400, message: 'لطفا وارد حساب کاربری شوید.' };
    }

    if (!validation.success) {
      return { status: 400, message: 'لطفا اطلاعات درست وارد کنید.' };
    }

    if (type.name == 'branch') {
      const commentBranch = await prisma.commentsBranch.create({
        data: {
          desc: data.desc,
          score: data.rate,
          userId: session?.user.id,
          branchId: type.id,
        },
      });
      if (commentBranch.id) {
        revalidateTag('branch')
        return { status: 201, message: 'کامنت با موفقیت ثبت شد و پس از تایید نمایش داده میشود.' };
      } else {
        return { status: 400, message: 'مشکلی پیش آمده، بعدا تلاش کنید.' };
      }
    } else {
      const commentFood = await prisma.commentsFood.create({
        data: {
          desc: data.desc,
          score: data.rate,
          foodId: type.id,
          userId: session?.user.id,
        },
      });

      await UpdateFoodRating(type.id)
      if (commentFood.id) {
        revalidateTag('food')
        return { status: 201, message: 'کامنت با موفقیت ثبت شد و پس از تایید نمایش داده میشود.' };
      } else {
        return { status: 400, message: 'مشکلی پیش آمده، بعدا تلاش کنید.' };
      }

    }
  } catch (error) {
    return { status: 400, message: 'مشکلی پیش آمده، بعدا تلاش کنید.' };
    console.log(error)
  }
}
