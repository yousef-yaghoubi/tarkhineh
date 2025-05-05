'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import IconTick from '@icons/tick.svg'
import IconLeft from '@icons/arrow-left.svg'
interface PropsBadge {
  url: string;
  title: string;
  forOrderTracking?: boolean;
}

function Badge(prop: PropsBadge) {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const categorieQuery =
    searchParams.get(prop.forOrderTracking ? 'status' : 'categorie') || 'all';

  return (
    <Link
      href={
        !prop.forOrderTracking
          ? { query: { ...query, categorie: prop.url } }
          : {
              pathname: '/user/order-tracking',
              query: { ...query, status: prop.url },
            }
      }
      className={`bg-gray-3 dark:bg-background-2 h-6 md:h-8 max-w-fit px-2 flex items-center rounded-md cursor-pointer md:rounded-3xl justify-around transition-all duration-300 ${prop.url == categorieQuery ? 'text-primary bg-tint-1 dark:bg-tint-1/70' : 'caption-sm md:text-gray-8 dark:text-gray-3 hover:bg-gray-4'}`}
    >
      
      <IconTick className={`fill-red-600 ${prop.url == categorieQuery ? '!flex' : '!hidden'} w-6 h-6`}/>

      <h6
        className={`caption-sm md:overline-lg ${prop.url == categorieQuery && 'ml-2'} !min-w-max`}
      >
        {prop.title}
      </h6>
      <IconLeft className={`mr-2 ${prop.url == categorieQuery ? '!hidden' : '!flex'} fill-background-2 dark:fill-gray-3 w-4 h-4`}/>
    </Link>
  );
}

export default Badge;
