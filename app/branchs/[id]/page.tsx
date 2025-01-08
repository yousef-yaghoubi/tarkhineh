import SearchBox from '@/components/shared/searchBox/SearchBox';
import SwiperMain from '@/components/shared/swiper/swiper';
import React from 'react';
import Button from '@/components/shared/button/Button';
import { cookies } from 'next/headers';
import { arraySlideMain } from '@/lib/dataPublic';
import SwiperDeatail from './SwiperDeatail';
import SliderSwiper from '../../../components/shared/swiper/SliderSwiper';
import {
  GetBranch,
  GetFoodsNotIrani,
  GetFoodsPopular,
  GetFoodsSpecial,
} from '@/app/actions/branchAction';
import { CommentType } from '@/lib/MenuPage';


interface Foods {
  id: number;
  name: string;
  image: string;
  desc: string;
  price: number;
  order: number;
  rating: number;
  _count: { commentsFood: number };
}

async function DynamicBranchs() {
  const branch = await cookies().get('branchs')?.value;

  const specialOfferFoods: Foods[] | undefined = await GetFoodsSpecial(branch!);
  const popularFoods: Foods[] | undefined = await GetFoodsPopular(branch!);
  const notIraniFoods: Foods[] | undefined = await GetFoodsNotIrani(branch!);
  const branchAction = await GetBranch(branch!);

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
        link="/menu"
      >
        مشاهده منوی کامل
      </Button>

      <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
        {`شعبه ${branch}`}
      </span>

      <SwiperDeatail
        address={branchAction?.address as string}
        durition={branchAction?.openDuration as string}
        images={
          branchAction?.images as {
            images: {
              id: number;
              alt: string;
              img: string;
              imgMobile: string;
            }[];
          }
        }
        phones={branchAction?.phones as { phones: string[] }}
      />

      <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
        نظرات کاربران
      </span>

      {branchAction?.commentsBranch.length != 0 ? (
        <SliderSwiper
          theme="White"
          commentSlides={branchAction?.commentsBranch as CommentType[]}
        />
      ) : (
        <div className="h-16 mt-10">کامنتی وجود ندارد</div>
      )}
    </div>
  );
}

export default DynamicBranchs;
