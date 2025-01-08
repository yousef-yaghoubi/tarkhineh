import SwiperMain from '@/components/shared/swiper/swiper';
import { arraySlideMain } from '@/lib/dataPublic';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import CardFood from '@/components/shared/card/CardFood';
import { GetFoodsNotIrani, GetFoodsPopular } from '../actions/branchAction';
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
  const foodTest: FoodType[] | undefined = await GetFoodsPopular(cookie!);

  return (
    <div>
      <SwiperMain slides={arraySlideMain} pagination />
      <HeaderMenu />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-4 mt-10">
        {foodTest?.map((item) => (
          <CardFood isShowForMenu item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
