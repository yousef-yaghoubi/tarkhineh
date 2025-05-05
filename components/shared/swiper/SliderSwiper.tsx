'use client';
import React from 'react';
import { CommentType, FoodType } from '@/types';
import ShadowSideSwiper from './ShadowSideSwiper';
import SwiperCustomComponent from './SwiperCustomComponent';



interface Props {
  theme: 'Primary' | 'White';
  title?: string;
  foodSlides?: FoodType[];
  commentSlides?: CommentType[];
  badgeSlides?: 'type' | 'sort';
}


const SliderSwiper = ({
  theme,
  title,
  foodSlides,
  commentSlides,
  badgeSlides,
}: Props) => {
  return (
    <div
      className={`${badgeSlides == 'sort' ? '!w-full md:!w-3/5 !h-8' : badgeSlides == 'type' ? '!w-full md:!w-[90%] md:max-w-[27em] lg:max-w-none !h-8' : commentSlides !== undefined ? 'h-52 md:h-64 w-full' : 'h-[301px] md:h-[555px] w-full'} flex flex-col overflow-hidden ${theme == 'Primary' ? 'bg-primary' : 'bg-white dark:bg-background-1'
        }`}
    >
      {title && (
        <span
          className={`h6 md:h5 lg:h4 my-3 md:my-6 mr-5 md:mr-[50px] ${theme == 'Primary' ? 'text-white' : 'text-gray-8 dark:text-gray-3'
            }`}
        >
          {title}
        </span>
      )}

      <div className="flex">
        <ShadowSideSwiper theme={theme} badgeSlides={badgeSlides} />

        <SwiperCustomComponent badgeSlides={badgeSlides} commentSlides={commentSlides} foodSlides={foodSlides}/>

        <ShadowSideSwiper theme={theme} badgeSlides={badgeSlides} />
      </div>
    </div>
  );
};

export default SliderSwiper;
