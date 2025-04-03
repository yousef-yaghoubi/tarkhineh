import SearchBox from '@/components/shared/searchBox/SearchBox';
import SwiperMain from '@/components/shared/swiper/swiper';
import React from 'react';
import Button from '@/components/shared/button/Button';
import { arraySlideMain } from '@/lib/dataPublic';
import SwiperDeatail from './SwiperDeatail';
import SliderSwiper from '../../../components/shared/swiper/SliderSwiper';
import { CommentType } from '@/lib/indexType';
import IconNote from '@icons/note.svg';
import { headers } from 'next/headers';
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/api/auth/[...nextauth]/route';
import { getCsrfToken, getSession } from 'next-auth/react';

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

async function DynamicBranchs({ params }: { params: { slug: string } }) {
  const { foods: specialOfferFoods }: { foods: Foods[] | undefined } =
    await fetch(
      `http://localhost:3000/api/food?branchName=${params.slug}&filter=${'specialOffer'}&page=${1}`,
      {
        method: 'GET',
        headers: headers(),
      }
    ).then((res) => res.json());

  const { foods: popularFoods }: { foods: Foods[] | undefined } = await fetch(
    `http://localhost:3000/api/food?branchName=${params.slug}&filter=${'mostPopular'}&page=${1}`,
    {
      method: 'GET',
      headers: headers(),
    }
  ).then((response) => response.json());

  const { foods: notIraniFoods }: { foods: Foods[] | undefined } = await fetch(
    `http://localhost:3000/api/food?branchName=${params.slug}&filter=${'non-Iranian'}&page=${1}`,
    {
      method: 'GET',
      headers: headers(),
    }
  ).then((response) => response.json());

  const { branch: branchAction } = await fetch(
    `http://localhost:3000/api/branch?branchName=${params.slug}`
  ).then((response) => response.json());

  return (
    <>
      <section className="flex flex-col items-center">
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
      </section>
    </>
  );
}

export default DynamicBranchs;
