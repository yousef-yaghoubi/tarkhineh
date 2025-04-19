import SearchBox from '@/components/shared/SearchBox/SearchBox';
import React from 'react';
import SwiperDeatail from './SwiperDeatail';
import { CommentType, FoodType } from '@/types';
import IconNote from '@icons/note.svg';
import { headers } from 'next/headers';
import AddComment from '@/components/shared/comment/AddComment';
import SliderSwiper from '@/components/shared/swiper/SliderSwiper';
import dynamic from 'next/dynamic';
import { generateBranchMetadata } from '@/lib/seo';
import { getBaseUrl } from '@/lib/getBaseUrl';
const Button = dynamic(() => import('@/components/shared/button/Button'));

export const revalidate = 3600;

async function getBranchBySlug({ params }: { params: { slug: string } }) {
  const { branch: branchAction } = await fetch(
    `${getBaseUrl()}/api/branch?branchName=${params.slug}`,
    {
      next: {
        tags: ['branch'],
      },
    }
  ).then((response) => response.json());

  return branchAction;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const branch = await getBranchBySlug({ params });

  return generateBranchMetadata({
    name: branch.name,
    address: branch.address,
    phone: branch.phone,
    slug: branch.slug,
    image: branch.image,
  });
}

async function DynamicBranches({
  params,
}: {
  params: Readonly<{ slug: string }>;
}) {
  const { slug } = params;
  const { foods: specialOfferFoods }: { foods: FoodType[] | undefined } =
    await fetch(
      `${getBaseUrl()}/api/food?branchName=${slug}&filter=${'specialOffer'}&page=${1}`,
      {
        method: 'GET',
        headers: headers(),
      }
    ).then((res) => res.json());

  const { foods: popularFoods }: { foods: FoodType[] | undefined } =
    await fetch(
      `${getBaseUrl()}/api/food?branchName=${slug}&filter=${'mostPopular'}&page=${1}`,
      {
        method: 'GET',
        headers: headers(),
      }
    ).then((response) => response.json());

  const { foods: notIraniFoods }: { foods: FoodType[] | undefined } =
    await fetch(
      `${getBaseUrl()}/api/food?branchName=${slug}&filter=${'non-Iranian'}&page=${1}`,
      {
        method: 'GET',
        headers: headers(),
      }
    ).then((response) => response.json());

  const branchAction = await getBranchBySlug({ params });
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
            JSON.parse(branchAction?.images) as {
              images: {
                id: number;
                alt: string;
                img: string;
                imgMobile: string;
              }[];
            }
          }
          phones={JSON.parse(branchAction?.phones) as { phones: string[] }}
        />

        <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
          نظرات کاربران
        </span>

        <AddComment type={{ name: 'branch', id: branchAction.id }} />
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

export default DynamicBranches;
