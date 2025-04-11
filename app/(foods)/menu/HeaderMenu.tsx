import React from 'react';
import Tab from './Tab';
import SearchBox from '@/components/shared/searchBox/SearchBox';
import SliderSwiper from '@/components/shared/swiper/SliderSwiper';

function HeaderMenu() {
  return (
    <div>
      <Tab />
      <div className="flex flex-col md:flex-row md:justify-around items-center mt-2 md:mt-4">
        <SliderSwiper theme='White' badgeSlides="sort"/>
        <SearchBox classes="w-[90%] max-w-[496px] md:rounded-md md:w-[39%]"/>
      </div>
    </div>
  );
}

export default HeaderMenu;
