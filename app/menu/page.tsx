import SwiperMain from '@/components/shared/swiper/swiper';
import { arraySlideMain } from '@/lib/dataPublic';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import InfiniteScroll from './InfiniteScroll';
import { GetAllFoods } from '../actions/branchAction';
import { cookies } from 'next/headers';
import { FoodType } from '@/lib/indexType';



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
