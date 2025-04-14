import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { ProfileRoute } from '@/lib/dataPublic';
import Image from 'next/image';
import React from 'react';
import LinkMenuBar from './LinkMenuBar';
import { useSession } from 'next-auth/react';
import { Skeleton } from '@components/ui/skeleton';

function MenuBar() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col w-full md:w-72 lg:min-w-72 h-80 border rounded border-gray-4 dark:border-background-2 px-2 py-4">
      <div className="flex w-full h-12 md:h-[88px] items-end">
        <div className="h-full relative md:w-16 md:h-16 w-12 rounded-full overflow-hidden border border-gray-4 dark:border-background-2">
          {session?.user.image ? (
            <Image alt="profile" src={session?.user.image as string} fill />
          ) : (
            <Skeleton className="h-full md:w-16 md:h-16 w-12" />
          )}
        </div>

        <div className="flex flex-col h-fit mr-2 md:mr-4 lg:mr-6">
          {session?.user.name ? (
            <span className="body-sm md:body-md text-gray-8 dark:text-gray-3">
              {session?.user.name}
            </span>
          ) : (
            <Skeleton className="w-24 h-7" />
          )}
          {status == "authenticated" && session?.user.phone ? (
            <span className="caption-sm md:caption-md text-gray-7 dark:text-gray-5">
              {session?.user.phone &&
                convertToPersianNumbers(session?.user.phone as string)}
            </span>
          ) :  status == "loading" ? (
            <Skeleton className="w-20 h-5 mt-1"/>
          ) : (
            <span className="w-20 h-5 mt-1">
              
            </span>
          )}
        </div>
      </div>

      <hr className="mt-2 mb-2 w-full bg-gray-6 dark:bg-background-2 h-[1px] border-none" />

      <div className="w-full">
        {ProfileRoute.map((route) => (
          <LinkMenuBar route={route} key={route.url} />
        ))}
      </div>
    </div>
  );
}

export default MenuBar;
