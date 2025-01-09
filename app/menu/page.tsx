import SwiperMain from '@/components/shared/swiper/swiper';
import { arraySlideMain } from '@/lib/dataPublic';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import InfiniteScroll from './InfiniteScroll';

async function page() {  
  return (
    <div>
      <SwiperMain slides={arraySlideMain} pagination />
      <HeaderMenu />
      <InfiniteScroll/>
    </div>
  );
}

export default page;
