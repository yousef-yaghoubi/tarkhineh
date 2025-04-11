import SearchBox from '@/components/shared/searchBox/SearchBox';
import SwiperMain from '@/components/shared/swiper/swiper';
import React from 'react';
import Button from '@/components/shared/button/Button';
import { arraySlideMain } from '@/lib/dataPublic';
import SwiperDeatail from './SwiperDeatail';
import { CommentType, FoodType } from '@/types';
import IconNote from '@icons/note.svg';
import { headers } from 'next/headers';
import AddComment from '@/components/shared/comment/AddComment';
import SliderSwiper from '@/components/shared/swiper/SliderSwiper';

async function DynamicBranchs({
  params,
}: {
  params: Readonly<{ slug: string }>;
}) {
  const { slug } = params;
  const { foods: specialOfferFoods }: { foods: FoodType[] | undefined } =
    await fetch(
      `http://localhost:3000/api/food?branchName=${slug}&filter=${'specialOffer'}&page=${1}`,
      {
        method: 'GET',
        headers: headers(),
      }
    ).then((res) => res.json());

  const { foods: popularFoods }: { foods: FoodType[] | undefined } =
    await fetch(
      `http://localhost:3000/api/food?branchName=${slug}&filter=${'mostPopular'}&page=${1}`,
      {
        method: 'GET',
        headers: headers(),
      }
    ).then((response) => response.json());

  const { foods: notIraniFoods }: { foods: FoodType[] | undefined } =
    await fetch(
      `http://localhost:3000/api/food?branchName=${slug}&filter=${'non-Iranian'}&page=${1}`,
      {
        method: 'GET',
        headers: headers(),
      }
    ).then((response) => response.json());

  const { branch: branchAction } = await fetch(
    `http://localhost:3000/api/branch?branchName=${slug}`, {
      next: {
        tags: ['branch']
      }
    }
  ).then((response) => response.json());

  return (
    <>
      <section className="flex flex-col items-center">
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
          className="w-[152px] h-8 md:w-[184px] md:h-10 caption-lg md:button-lg"
          theme="Primary"
          link="/menu"
        >
          <span className="flex items-center">
            <IconNote className="w-4 h-4 md:w-6 md:h-6 fill-primary" />
            مشاهده منوی کامل
          </span>
        </Button>

        <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
          {`شعبه ${branchAction?.name}`}
        </span>

        <SwiperDeatail
          address={branchAction?.address as string}
          durition={'همه‌روزه از ساعت 12 تا 23 بجز روزهای تعطیل'}
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

        <AddComment type={{ name: 'branch', id: branchAction.id }} />
        {branchAction?.commentsBranch.length != 0? (
          <SliderSwiper
            theme="White"
            commentSlides={branchAction?.commentsBranch as CommentType[]}
          />
        ) : (
          <div className="h-16 mt-10">کامنتی وجود ندارد</div>
        )}
      </section>
    </>
  );
}

export default DynamicBranchs;
