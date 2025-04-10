import Button from '@/components/shared/button/Button';
import CardFoodLoading from '@/components/shared/card/CardFoodLoading';
import SearchBox from '@/components/shared/searchBox/SearchBox';
import BoxOfMain from '@/components/shared/shopingCart/BoxOfMain';
import SliderSwiper from '@/components/shared/swiper/SliderSwiper';
import { FoodType } from '@/types';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const CardFood = dynamic(() => import('@/components/shared/card/CardFood'), {
  loading: () => <CardFoodLoading key={Math.random()} />,
  ssr: false,
});

async function page({ searchParams }: { searchParams: {'categorie': string, 'search': string} }) {

  const response = await fetch(`http://localhost:3000/api/food/favorites?${searchParams.search && `search=${searchParams.search}`}&categorie=${searchParams.categorie}`, {
    headers: headers(),
  });

  const data = (await response.json()) as {
    favorites: {
      id: number;
      userId: number;
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
              forFavorite
            />
          </div>
          
          <div
            className={`w-full h-fit grid ${data?.favorites?.foods && 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4'} justify-items-center gap-x-2 gap-y-4 mt-4 justify-center`}
          >
            {data?.favorites?.foods ? (
              data?.favorites?.foods.map((food) => (
                <CardFood item={food} key={food.id} />
              ))
            ) : (
              <div
                className={`w-full h-[422px] rounded-md dark:border-background-2 flex flex-col items-center justify-center relative`}
              >
                <Image
                  src={'/image/EmptyPage.png'}
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
