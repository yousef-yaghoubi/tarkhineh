import HeaderMenu from '@/app/menu/HeaderMenu';
import SearchBox from '@/components/shared/searchBox/SearchBox';
import BoxOfMain from '@/components/shared/shopingCart/BoxOfMain';
import SliderSwiper from '@/components/shared/swiper/SliderSwiper';
import React from 'react';

function page() {
  return (
    <>
      <BoxOfMain forUserPage title="علاقمندی ها">
        <div className='w-full'>
          <div className="flex flex-col lg:flex-row md:justify-around items-center mt-2 md:mt-4 ">
            <SliderSwiper theme="White" badgeSlides="type" />
            <SearchBox classes="w-[90%] max-w-[496px] md:rounded-md mt-2 lg:mt-0" />
          </div>
        </div>
      </BoxOfMain>
    </>
  );
}

export default page;
