'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

interface PropsBadge {
  url: string;
  title: string;
}
function Badge(prop: PropsBadge) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params =
    searchParams.get('type') !== null && searchParams.get('type') !== undefined
      ? `?type=${searchParams.get('type')}`
      : '';
  const query = Object.fromEntries(searchParams.entries());
  const pathNameWithQuery = `${pathName}${params}`;
  const categorieQuery = searchParams.get('categorie');

  return (
    <Link
      href={{ pathname: '/menu', query: { ...query, categorie: prop.url } }}
      className={`bg-gray-3 h-6 md:h-8 max-w-fit px-2 flex items-center rounded-md cursor-pointer md:rounded-3xl justify-around transition-all duration-300 ${prop.url == categorieQuery ? 'text-primary bg-tint-1' : 'caption-sm md:text-gray-8 hover:bg-gray-4'}`}
    >
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        className={prop.url == categorieQuery ? 'flex' : 'hidden'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0799 15.58C10.8799 15.58 10.6899 15.5 10.5499 15.36L7.71994 12.53C7.42994 12.24 7.42994 11.76 7.71994 11.47C8.00994 11.18 8.48994 11.18 8.77994 11.47L11.0799 13.77L16.2199 8.62998C16.5099 8.33998 16.9899 8.33998 17.2799 8.62998C17.5699 8.91998 17.5699 9.39998 17.2799 9.68998L11.6099 15.36C11.4699 15.5 11.2799 15.58 11.0799 15.58Z"
          fill="#417F56"
        />
      </svg>

      <h6 className={`overline-lg ${prop.url == categorieQuery && 'ml-2'} !min-w-max`}>{prop.title}</h6>
      
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className={`mr-2 ${prop.url == categorieQuery ? 'hidden' : 'flex'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95003 13.93C6.89003 12.87 6.89003 11.13 7.95003 10.07L14.47 3.55002C14.76 3.26002 15.24 3.26002 15.53 3.55002C15.82 3.84002 15.82 4.32002 15.53 4.61002L9.01003 11.13C8.53003 11.61 8.53003 12.39 9.01003 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z"
          fill="#353535"
        />
      </svg>
    </Link>
  );
}

export default Badge;
