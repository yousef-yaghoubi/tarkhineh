import SwiperMain from '@/components/shared/swiper/swiper';
import { arraySlideMain } from '@/lib/dataPublic';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import InfiniteScroll from './InfiniteScroll';
import { GetAllFoods } from '../actions/branchAction';
import { cookies } from 'next/headers';

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
  const foodTest: FoodType[] | undefined = await GetAllFoods({
    branchName: cookie!,
    page: 1,
  });
  
  return (
    <div>
      <SwiperMain slides={arraySlideMain} pagination />
      <HeaderMenu />
      <InfiniteScroll initialFood={foodTest} />
    </div>
  );
}

export default page;
