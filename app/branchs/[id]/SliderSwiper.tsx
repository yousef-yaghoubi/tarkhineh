'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardFoodBranch from '@/components/shared/card/CardFoodBranch';
import Comment from '@/components/shared/comment/Comment';


interface FoodType{
  id: number;
  name: string;
  image: string;
  desc : string;
  price: number;
  order: number;
  rating: number;
  _count : {
    commentsFood: number
  }
}
interface CommentType {
  id:number,
  desc:string,
  createdAt: Date,
  score: number,
  user: {
    profile: string,
    firstName:string,
    lastName: string
  };
}

interface Props {
  theme: 'Primary' | 'White';
  title?: string;
  foodSlides?: FoodType[];
  commentSlides?: CommentType[];
}
const SliderSwiper = ({ theme, title, foodSlides, commentSlides }: Props) => {
  return (
    <div
      className={`w-full ${commentSlides !== undefined ? 'h-52 md:h-64' : 'h-[301px] md:h-[555px]'} flex flex-col overflow-hidden ${
        theme == 'Primary' ? 'bg-primary' : 'bg-white dark:bg-background-1'
      }`}
    >
      {title && (
        <span
          className={`h6 md:h5 lg:h4 my-3 md:my-6 mr-5 md:mr-[50px] ${
            theme == 'Primary' ? 'text-white' : 'text-gray-8 dark:text-gray-3'
          }`}
        >
          {title}
        </span>
      )}
      <div className="flex">
        <div
          className={`w-[5%] h-full ${
            theme == 'Primary'
              ? 'bg-[#417f567d]'
              : 'bg-[#ffffff87] dark:bg-[#232b339e]'
          } z-10 hidden md:flex`}
        ></div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.prevSlide',
            nextEl: '.nextSlide',
          }}
          pagination={
            commentSlides !== undefined && {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
            }
          }
          breakpoints={
            foodSlides !== undefined
              ? {
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
                }
              : {
                  200: {
                    slidesPerView: 1.1,
                  },
                  370: {
                    slidesPerView: 1.3,
                  },
                  480: {
                    slidesPerView: 1.5,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  770: {
                    slidesPerView: 1.1,
                  },
                  900: {
                    slidesPerView: 1.3,
                  },
                  1050: {
                    slidesPerView: 1.5,
                  },
                  1250: {
                    slidesPerView: 1.8,
                  },
                  1500: {
                    slidesPerView: 2.1,
                  },
                  1700: {
                    slidesPerView: 2.5,
                  },
                }
          }
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

          {commentSlides !== undefined
            ? commentSlides?.map((comment) => (
                <SwiperSlide
                  key={comment.id}
                  className="p-0 !flex justify-center items-center"
                >
                  <Comment id={comment.id} createdAt={comment.createdAt} desc={comment.desc} score={comment.score} user={comment.user}/>
                </SwiperSlide>
              ))
            : foodSlides?.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="p-0 !flex justify-center items-center"
                >
                  <CardFoodBranch item={item}/>
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
          <span
            className={`swiper-pagination !w-[82px] h-[19px] mx-auto inset-0 justify-center items-center !-bottom-8 ${
              commentSlides !== undefined ? 'flex' : 'hidden'
            }`}
          ></span>
        </Swiper>
        <div
          className={`w-[5%] h-full ${
            theme == 'Primary'
              ? 'bg-[#417f567d]'
              : 'bg-[#ffffff87] dark:bg-[#232b339e]'
          } z-10 hidden md:flex`}
        ></div>
      </div>
    </div>
  );
};

export default SliderSwiper;
