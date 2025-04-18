import SearchBox from '@components/shared/searchBox/SearchBox';
import Image from 'next/image';
import React from 'react';
import { FoodType } from '@/types';
import dynamic from 'next/dynamic';
import CardFoodLoading from '@components/shared/card/CardFoodLoading';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { Metadata } from 'next';

const CardFood = dynamic(() => import('@components/shared/card/CardFood'), {
  loading: () => <CardFoodLoading />,
});

interface SearchParams {
  search: string;
}


export const metadata: Metadata = {
  title: 'جستجوی غذا | پیدا کردن غذاهای خوشمزه در منوی ترخینه',
  description: 'با استفاده از قابلیت جستجو، غذاهای مورد علاقه‌تان را در منوی متنوع ترخینه پیدا کنید. از پیش‌غذا تا غذای اصلی، همه در دسترس شماست!',
  openGraph: {
    title: 'جستجوی غذا | پیدا کردن غذاهای خوشمزه در منوی ترخینه',
    description: 'با جستجوی سریع در منوی ترخینه، غذای دلخواه خود را پیدا کنید و تجربه‌ای لذت‌بخش داشته باشید.',
    url: `${getBaseUrl()}/search`,
    images: [
      {
        url: `/logoGreenBig.png`, 
        width: 1200,
        height: 630,
        alt: 'جستجوی غذا - رستوران‌های ترخینه',
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/search`,
  },
}

async function page({ searchParams }: { searchParams: SearchParams }) {
  const { search } = searchParams;
  const { foods } = (await fetch(
    `${getBaseUrl()}/api/food/search?search=${search}`
  ).then((result) => result.json())) as { foods: FoodType[] | undefined };

  return (
    <section className="flex flex-col items-center">
      {!foods?.length ? (
        <p className="body-xl mb-4 mt-12">موردی با این مشخصات پیدا نکردیم!</p>
      ) : (
        <h4 className="h4 mb-6 mt-12">
          نتایج جستجو برای: <span className="text-primary">{search}</span>
        </h4>
      )}

      <SearchBox classes="w-5/6 max-w-[392px]" />

      {!foods?.length ? (
        <Image
          src={'/image/MatchNotFound.png'}
          alt="not found"
          width={390}
          height={345}
          className="mt-14 mb-12 px-4"
        />
      ) : (
        <section className="mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 w-full sm:max-w-[90%] justify-items-center gap-y-4 md:gap-y-8 mb-10">
          {foods.map((food) => (
            <CardFood item={food} key={food.id} />
          ))}
        </section>
      )}
    </section>
  );
}

export default page;
