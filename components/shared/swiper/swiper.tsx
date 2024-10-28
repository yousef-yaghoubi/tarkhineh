'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
function SwiperMain() {
  return (
    <Swiper
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      }}
      loop
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full h-[176px] md:h-[336px] drop-shadow-shadow-4"
    >
      <button className="next">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className='hidden sm:flex'
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
            fill="white"
          />
        </svg>
      </button>
      <SwiperSlide className="text-center text-lg flex justify-center items-center">
        <div className="w-full h-full bg-[url(/image/bannerSlider1Mobile.jpg)] xl:bg-[url(/image/bannerSlider1.jpg)] bg-cover flex justify-center items-center">
          <div className="flex flex-col justify-center w-fit items-center mt-10 md:mt-16">
            <span className="text-tint-1 h6 md:h4 lg:h2">
              تجربه غذای سالم و گیاهی به سبک ترخینه
            </span>
            <button className="w-[91px] h-6 bg-[#417F56] text-withe caption-sm mt-8 md:mt-16 md:w-[184px] md:h-10 rounded-sm md:rounded-md md:button-lg">
              سفارش آنلاین غذا
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center text-lg flex justify-center items-center">
        <div className="w-full h-full bg-[url(/image/bannerSlider2Mobile.jpg)] xl:bg-[url(/image/bannerSlider2.jpg)] bg-cover flex justify-center items-center">
          <div className="flex flex-col justify-center w-fit items-center mt-10 md:mt-16">
            <span className="text-tint-1 h6 md:h4 lg:h2">
              طعم بی‌نظیر طبیعت!
            </span>
            <button className="w-[91px] h-6 bg-[#417F56] text-withe caption-sm mt-8 md:mt-16 md:w-[184px] md:h-10 rounded-sm md:rounded-md md:button-lg">
              سفارش آنلاین غذا
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="text-center text-lg flex justify-center items-center">
        <div className="w-full h-full bg-[url(/image/bannerSlider3Mobile.jpg)] xl:bg-[url(/image/bannerSlider3.jpg)] bg-cover flex justify-center items-center">
          <div className="flex flex-col justify-center w-fit items-center mt-10 md:mt-16">
            <span className="text-tint-1 h6 md:h4 lg:h2">
              لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!
            </span>
            <button className="w-[91px] h-6 bg-[#417F56] text-withe caption-sm mt-8 md:mt-16 md:w-[184px] md:h-10 rounded-sm md:rounded-md md:button-lg">
              سفارش آنلاین غذا
            </button>
          </div>
        </div>
      </SwiperSlide>

      <button className="prev hidden sm:flex">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className='hidden sm:flex'
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
            fill="white"
          />
        </svg>
      </button>
      <span className="swiper-pagination !w-[82px] h-[19px] bg-[url(/image/Rectangle2Mobile.png)] dark:bg-[url(/image/Rectangle2MobileDark.png)] md:!w-[154px] md:h-7 md:bg-[url(/image/Rectangle2.png)] dark:md:bg-[url(/image/Rectangle2Dark.png)] mx-auto inset-0 !bottom-0 flex justify-center items-center"></span>
    </Swiper>
  );
}

export default SwiperMain;
