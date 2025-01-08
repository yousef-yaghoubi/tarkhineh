import SwiperMain from '@/components/shared/swiper/swiper';
import { arraySlideMain } from '@/lib/dataPublic';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import CardFood from '@/components/shared/card/CardFood';
import { GetFoodsNotIrani } from '../actions/branchAction';
import { cookies } from 'next/headers';

interface PropsSearchParams {
  searchParams: {
    type?: string;
  };
}

interface FoodType {
  id: number;
  name: string;
  image: string;
  desc: string;
  price: number;
  order: number;
  rating: number;
  _count: {
    commentsFood: number;
  };
}
async function page() {
  const cookie = await cookies().get('branchs')?.value;
  const foodTest: FoodType[] | undefined = await GetFoodsNotIrani(cookie!);

  return (
    <div>
      <SwiperMain slides={arraySlideMain} pagination />
      <HeaderMenu />
      <div className="h-10 w-full bg-white">test</div>
      <div className="flex flex-col justify-center items-center sm:grid grid-cols-2">
        {foodTest?.map((item) => (
          <CardFood isShowForMenu item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
