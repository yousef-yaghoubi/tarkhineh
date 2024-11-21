'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardFoodBranch from '@/components/shared/card/CardFoodBranch';

interface Props {
  theme: 'Primary' | 'White',
  title: string
}
const FoodSlider = ({theme, title}: Props) => {
  const items = [
    {
      id: 1,
      title: 'پیتزا قارچ',
      price: '۱۲۵,۰۰۰ تومان',
      img: '/images/imageFood.jpg', // مسیر تصویر پیتزا
      rating: 4.5,
      orders: 32,
    },
    {
      id: 2,
      title: 'کالزونه اسفناج',
      price: '۱۷۷,۰۰۰ تومان',
      img: '/images/imageFood.jpg', // مسیر تصویر کالزونه
      rating: 4.7,
      orders: 25,
    },
    {
      id: 3,
      title: 'بادمجان شکم‌پر',
      price: '۱۳۶,۰۰۰ تومان',
      img: '/images/imageFood.jpg', // مسیر تصویر بادمجان
      rating: 4.3,
      orders: 19,
    },
    {
      id: 4,
      title: 'دلمه برگ کلم',
      price: '۱۰۹,۰۰۰ تومان',
      img: '/images/imageFood.jpg', // مسیر تصویر دلمه
      rating: 4.8,
      orders: 42,
    },
    {
      id: 5,
      title: 'دلمه برگ کلم',
      price: '۱۰۹,۰۰۰ تومان',
      img: '/images/imageFood.jpg', // مسیر تصویر دلمه
      rating: 4.8,
      orders: 42,
    },
  ];

  return (
    <div className={`w-full h-[301px] md:h-[555px] flex flex-col overflow-hidden ${theme == 'Primary' ? 'bg-primary' : 'bg-white dark:bg-background-1'}`}>
      <span className={`h6 md:h5 lg:h4 my-3 md:my-6 mr-5 md:mr-[50px] ${theme == 'Primary' ? 'text-white' : 'text-gray-8 dark:text-gray-3'}`}>
        {title}
      </span>
      <div className="flex">
        <div className={`w-[5%] h-full ${theme == 'Primary' ?'bg-[#417f567d]' : 'bg-[#ffffff87] dark:bg-[#232b339e]'} z-10 hidden md:flex`}></div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.prevSlide',
            nextEl: '.nextSlide',
          }}
          breakpoints={{
            200: {
              slidesPerView: 1.5,
            },
            400: {
              slidesPerView: 2,
            },
            450: {
              slidesPerView: 2.2,
            },
            550: {
              slidesPerView: 2.8,
            },
            650: {
              slidesPerView: 3.3,
            },
            770: {
              slidesPerView: 2.1,
            },
            900: {
              slidesPerView: 2.3,
            },
            1000: {
              slidesPerView: 3.1,
            },
            1300: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4.1,
            },
          }}
          className="!overflow-visible w-[90%] md:w-11/12 relative"
        >
          <button className="prevSlide absolute right-0 z-20 top-[55%] bottom-1/2 justify-center items-center translate-y-1/2 disabled:hidden w-10 h-10 bg-white rounded-md p-0 border border-gray-4 hidden md:flex">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
                fill="#353535"
              />
            </svg>
          </button>

          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="p-0 !flex justify-center items-center"
            >
              <CardFoodBranch />
            </SwiperSlide>
          ))}
          <button className="nextSlide absolute left-0 !z-20 top-[55%] bottom-1/2 justify-center items-center translate-y-1/2 disabled:hidden w-10 h-10 bg-white rounded-md p-0 border border-gray-4 hidden md:flex">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
                fill="#353535"
              />
            </svg>
          </button>
        </Swiper>
        <div className={`w-[5%] h-full ${theme == 'Primary' ?'bg-[#417f567d]' : 'bg-[#ffffff87] dark:bg-[#232b339e]'} z-10 hidden md:flex`}></div>
      </div>
    </div>
  );
};

export default FoodSlider;
