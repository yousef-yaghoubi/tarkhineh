'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Button from '../button/Button';
import Image from 'next/image';
import { Slide } from '@/types/swiper';

function SwiperMain({
  slides,
  pagination,
  showBtn,
}: {
  slides: Slide[];
  pagination?: boolean;
  showBtn?: boolean;
}) {
  return (
    <Swiper
      pagination={
        pagination && {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }
      }
      loop
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper w-full h-[176px] md:h-[336px] drop-shadow-shadow-4 relative"
    >
      <div className={`${pagination ? 'hidden' : 'flex'} sm:flex bg-gradient-to-r from-[rgba(0,0,0,0.75)] to-transparent w-[48px] md:w-[136px] h-full text-white absolute top-1/2 left-4 md:left-16 z-20 transform -translate-x-1/2 -translate-y-1/2 items-center`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`${pagination ? 'hidden' : 'flex'} sm:flex next cursor-pointer !w-6 !h-6 md:!w-12 md:!h-12 absolute left-4`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
            fill="white"
          />
        </svg>
      </div>
      {slides?.map((slide) => (
        <SwiperSlide
          className="text-center text-lg flex justify-center items-center"
          key={slide.id}
        >
          <div className={`w-full h-full flex justify-center items-center`}>
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              className="!hidden xl:!flex"
            />
            <Image
              src={slide.imgMobile}
              alt={slide.alt}
              fill
              className="!flex xl:!hidden"
            />

            <div className="flex flex-col justify-center w-fit items-center mt-10 md:mt-16">
              {slide.title && (
                <span className="text-tint-1 h6 md:h4 lg:h2 z-30 select-none">
                  {slide?.title}
                </span>
              )}

              {showBtn && (
                <Button
                  btn="fill"
                  theme="Primary"
                  className="h-[24px] w-[91px] sm:h-[32px] sm:w-[120px] md:w-[184px] md:h-10 mt-8 md:mt-16 caption-sm sm:caption-md md:button-lg z-10"
                >سفارش آنلاین غذا</Button>
              )}

            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className={`${pagination ? 'hidden' : 'flex'} bg-gradient-to-l from-[rgba(0,0,0,0.75)] to-transparent sm:flex w-[136px] h-full text-white absolute top-1/2 right-[-4.25em] z-20 transform -translate-x-1/2 -translate-y-1/2 items-center`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`${pagination ? 'hidden' : 'flex'} sm:flex !w-6 !h-6 md:!w-12 md:!h-12 prev cursor-pointer absolute right-4`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
            fill="white"
          />
        </svg>
      </div>
      <span
        className={`swiper-pagination !w-[82px] h-[19px] bg-[url(/image/Rectangle2Mobile.png)] dark:bg-[url(/image/Rectangle2MobileDark.png)] md:!w-[154px] md:h-7 md:bg-[url(/image/Rectangle2.png)] dark:md:bg-[url(/image/Rectangle2Dark.png)] mx-auto inset-0 absolute !bottom-0 justify-center items-center ${
          pagination ? 'flex' : 'hidden'
        }`}
      ></span>
    </Swiper>
  );
}

export default SwiperMain;
