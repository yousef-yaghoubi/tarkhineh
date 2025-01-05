import SearchBox from '@/components/shared/searchBox/SearchBox';
import SwiperMain from '@/components/shared/swiper/swiper';
import { arraySlideMain } from '@/lib/dataPublic';
import React from 'react';
import HeaderMenu from './HeaderMenu';

interface PropsSearchParams {
  searchParams: {
    type?: string;
  };
}
async function page() {

  return (
    <div>
      <SwiperMain slides={arraySlideMain} pagination />
      <HeaderMenu/>
    </div>
  );
}

export default page;
