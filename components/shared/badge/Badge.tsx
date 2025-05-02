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

      {/* <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className={`mr-2 ${prop.url == categorieQuery ? 'hidden' : 'flex'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
          className="fill-background-2 dark:fill-gray-3"
        />
      </svg> */}
      <IconLeft className={`mr-2 ${prop.url == categorieQuery ? '!hidden' : '!flex'} fill-background-2 dark:fill-gray-3 w-4 h-4`}/>
    </Link>
  );
}

export default Badge;
