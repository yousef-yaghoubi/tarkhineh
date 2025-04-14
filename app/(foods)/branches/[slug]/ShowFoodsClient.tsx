'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SliderSwiper from '@components/shared/swiper/SliderSwiper';
import { FoodType } from '@/types';

// Custom fetcher
const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function ShowFoodsClient({ branch }: { branch: string }) {
  const { data: specialOfferData, isLoading: loadingSpecial, error: errorSpecial } = useQuery({
    queryKey: ['specialOfferFoods', branch],
    queryFn: () => fetcher(`/api/food?branchName=${branch}&filter=specialOffer&page=1`),
  });

  const { data: popularFoodsData, isLoading: loadingPopular, error: errorPopular } = useQuery({
    queryKey: ['popularFoods', branch],
    queryFn: () => fetcher(`/api/food?branchName=${branch}&filter=mostPopular&page=1`),
  });

  const { data: notIraniFoodsData, isLoading: loadingNotIrani, error: errorNotIrani } = useQuery({
    queryKey: ['notIraniFoods', branch],
    queryFn: () => fetcher(`/api/food?branchName=${branch}&filter=non-Iranian&page=1`),
  });

  const specialOfferFoods = specialOfferData?.foods as FoodType[] | undefined;
  const popularFoods = popularFoodsData?.foods as FoodType[] | undefined;
  const notIraniFoods = notIraniFoodsData?.foods as FoodType[] | undefined;

  if (loadingSpecial || loadingPopular || loadingNotIrani) {
    return <div>در حال بارگذاری...</div>;
  }

  if (errorSpecial || errorPopular || errorNotIrani) {
    return <div>مشکلی در بارگذاری اطلاعات پیش آمد</div>;
  }

  return (
    <>
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
    </>
  );
}

export default ShowFoodsClient;
