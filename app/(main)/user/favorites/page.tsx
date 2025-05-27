import CardFoodLoading from '@/components/shared/card/cardFood/CardFoodLoading';
import SearchBox from '@/components/shared/SearchBox/SearchBox';
import BoxOfMain from '@/components/shared/shopingCart/BoxOfMain';
import SliderSwiper from '@/components/shared/swiper/SliderSwiper';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { FoodType } from '@/types';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const Button = dynamic(() => import('@/components/shared/button/Button'));
const CardFoodBranch = dynamic(() => import('@/components/shared/card/cardFood/CardFoodBranch'), {
  loading: () => <CardFoodLoading key={Math.random()} />,
  ssr: false,
});

export const metadata: Metadata = {
  title: 'علاقه‌مندی‌های من | لیست غذاهای مورد علاقه در ترخینه',
  description:
    'غذاهای مورد علاقه خود را در لیست علاقه‌مندی‌های ترخینه ذخیره کنید و هر زمان سریع‌تر سفارش دهید!',
  openGraph: {
    title: 'علاقه‌مندی‌های من | لیست غذاهای مورد علاقه در ترخینه',
    description: 'غذاهای محبوب خود را یکجا ببینید و راحت‌تر سفارش دهید.',
    url: `${getBaseUrl()}/user/favorites`,
    images: [
      {
        url: `/logoGreenBig.webp`,
        width: 1200,
        height: 630,
        alt: `لیست علاقه‌مندی‌ها - ترخینه`,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/user/favorites`,
  },
};

async function page({
  searchParams,
}: {
  searchParams: { categorie: string; search: string };
}) {
  const headersList = headers();
  const customHeaders = {
    cookie: headersList.get('cookie') || '',
  };
  const response = await fetch(
    `${getBaseUrl()}/api/food/favorites?${searchParams.search && `search=${searchParams.search}`}&categorie=${searchParams.categorie}`,
    {
      headers: customHeaders,
      next:{
        tags: ['favorites'],
        revalidate: 3600,
      }
    }
  );

  const data = (await response.json()) as {
    favorites: {
      id: string;
      userId: string;
      foods: FoodType[];
    };
  } | null;

  return (
    <>
      <BoxOfMain forUserPage title="علاقمندی ها">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row md:justify-around items-center mt-2 md:mt-4 ">
            <SliderSwiper theme="White" badgeSlides="type" />
            <SearchBox
              classes="w-[90%] max-w-[496px] md:rounded-md mt-2 lg:mt-0"
              forCustomPage
            />
          </div>

          <div
            className={`w-full h-fit grid ${data?.favorites?.foods && 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4'} justify-items-center gap-x-2 gap-y-4 mt-4 justify-center`}
          >
            {data?.favorites?.foods ? (
              data?.favorites?.foods.map((food) => (
                <CardFoodBranch item={food} key={food.id} />
              ))
            ) : (
              <div
                className={`w-full h-[422px] rounded-md dark:border-background-2 flex flex-col items-center justify-center relative`}
              >
                <Image
                  src={'/image/EmptyPage.webp'}
                  alt="empty"
                  width={325}
                  height={312}
                  className="absolute"
                />
                <span className="mt-12 body-sm sm:body-xl text-gray-6 dark:text-gray-4">
                  شما در حال حاضر هیچ علاقه مندی ثبت نکرده‌اید!
                </span>
                <Button
                  btn="stroke"
                  theme="Primary"
                  className="w-[184px] z-10 h-10 mt-6 !bg-white dark:!bg-background-1 caption-md md:button-lg"
                >
                  منوی رستوران
                </Button>
              </div>
            )}
          </div>
        </div>
      </BoxOfMain>
    </>
  );
}

export default page;
