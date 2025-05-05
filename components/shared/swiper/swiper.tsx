'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Slide } from '@/types/swiper';
import dynamic from 'next/dynamic';
import IconRight from '@icons/arrow-right.svg'
import IconLeft from '@icons/arrow-left.svg'

const Button = dynamic(() => import('../button/Button'));
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
      <div
        className={`${pagination ? 'hidden' : 'flex'} sm:flex bg-gradient-to-r from-[rgba(0,0,0,0.75)] to-transparent w-[48px] md:w-[136px] h-full text-white absolute top-1/2 left-4 md:left-16 z-20 transform -translate-x-1/2 -translate-y-1/2 items-center`}
      >
        <i className={`next cursor-pointer !w-6 !h-6 md:!w-12 md:!h-12 absolute left-4`}>
          <IconLeft />
        </i>
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
                >
                  سفارش آنلاین غذا
                </Button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div
        className={`${pagination ? 'hidden' : 'flex'} bg-gradient-to-l from-[rgba(0,0,0,0.75)] to-transparent sm:flex w-[48px] md:w-[136px] h-full text-white absolute top-1/2 right-[-2em] md:right-[-4.25em] z-20 transform -translate-x-1/2 -translate-y-1/2 items-center`}
      >
        <i className='!w-6 !h-6 md:!w-12 md:!h-12 prev cursor-pointer absolute right-4'>
          <IconRight/>
        </i>
      </div>

      <span
        className={`swiper-pagination !w-[82px] h-[19px] bg-[url(/image/Rectangle2Mobile.webp)] dark:bg-[url(/image/Rectangle2MobileDark.webp)] md:!w-[154px] md:h-7 md:bg-[url(/image/Rectangle2.webp)] dark:md:bg-[url(/image/Rectangle2Dark.webp)] mx-auto inset-0 absolute !bottom-0 justify-center items-center ${pagination ? 'flex' : 'hidden'
          }`}
      ></span>
    </Swiper>
  );
}

export default SwiperMain;
