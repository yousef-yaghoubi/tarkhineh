import SearchBox from '@/components/shared/searchBox/SearchBox';
import SwiperMain from '@/components/shared/swiper/swiper';
import React from 'react';
import Button from '@/components/shared/button/Button';
import { cookies } from 'next/headers';
import { arraySlideMain } from '@/lib/dataPublic';
import SwiperDeatail from './SwiperDeatail';
import Comment from './Comment';
import SliderSwiper from './SliderSwiper';
import {
  GetBranch,
  GetFoodsNotIrani,
  GetFoodsPopular,
  GetFoodsSpecial,
} from '@/app/actions/branchAction';

interface CountOfComment {
  commentsFood: number;
}

interface Foods {
  id: number;
  name: string;
  image: string;
  desc: string;
  price: number;
  order: number | null;
  rating: number | null;
  _count: CountOfComment;
}

interface Branch {
  id: number;
  name: string;
  address: string;
  images: { mobile: [string]; desktop: [string] };
  phones: { phones: [string] };
  commentsBranch: undefined |  {
    id: number;
    desc: string;
    createdAt: Date;
    score: number;
    user: { firstName: string; lastName: string };
  };
} 

async function DynamicBranchs() {
  const branch = await cookies().get('branchs')?.value;

  const specialOfferFoods: Foods[] | undefined = await GetFoodsSpecial(branch!);
  const popularFoods : Foods[] | undefined = await GetFoodsPopular(branch!);
  const notIraniFoods : Foods[] | undefined = await GetFoodsNotIrani(branch!);
  const branchAction  =  await GetBranch(branch!);

  const items = [
    {
      id: 1,
      title: 'پیتزا قارچ',
      price: 125000,
      img: '/images/imageFood.jpg', // مسیر تصویر پیتزا
      rating: 4.5,
      orders: 32,
    },
    {
      id: 2,
      title: 'کالزونه اسفناج',
      price: 177000,
      img: '/images/imageFood.jpg', // مسیر تصویر کالزونه
      rating: 4.7,
      orders: 25,
    },
    {
      id: 3,
      title: 'بادمجان شکم‌پر',
      price: 136000,
      img: '/images/imageFood.jpg', // مسیر تصویر بادمجان
      rating: 4.3,
      orders: 19,
    },
    {
      id: 4,
      title: 'دلمه برگ کلم',
      price: 109000,
      img: '/images/imageFood.jpg', // مسیر تصویر دلمه
      rating: 4.8,
      orders: 42,
    },
    {
      id: 5,
      title: 'دلمه برگ کلم',
      price: 19000,
      img: '/images/imageFood.jpg', // مسیر تصویر دلمه
      rating: 4.8,
      orders: 42,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <SwiperMain slides={arraySlideMain} pagination showBtn />
      <div className="w-full flex justify-center">
        <SearchBox classes="w-[90%] mt-4 sm:hidden" />
      </div>

      <SliderSwiper
        theme="White"
        title="پیشنهاد ویژه"
        foodSlides={specialOfferFoods}
      />
      <SliderSwiper
        theme="Primary"
        title="غذاهای محبوب"
        foodSlides={popularFoods}
      />

      <SliderSwiper
        theme="White"
        title="غذاهای غیر ایرانی"
        foodSlides={notIraniFoods}
      />
      <Button
        btn="stroke"
        btnSize="w-[152px] h-8 md:w-[184px] md:h-10 caption-lg md:button-lg"
        iconR="/icons/notePrimary.png"
        iconSize={24}
        theme="Primary"
        title="مشاهده منوی کامل"
      />

      <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
        {`شعبه ${branch}`}
      </span>

      <SwiperDeatail />

      <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
        نظرات کاربران
      </span>

      {/* <SliderSwiper theme="White" typeOfSlide="Comment" slideArray={items} /> */}

      <Comment />
    </div>
  );
}

export default DynamicBranchs;
