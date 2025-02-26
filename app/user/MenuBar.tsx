import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { ProfileRoute } from '@/lib/dataPublic';
import Image from 'next/image';
import React from 'react';
import LinkMenuBar from './LinkMenuBar';
import { getServerSession } from 'next-auth';
import { authOption } from '../api/auth/[...nextauth]/route';

async function MenuBar() {
  const session = await getServerSession(authOption);
  const phone = '09058972658';
  return (
    <div className="flex flex-col w-72 h-80 border rounded border-gray-4 dark:border-background-2 px-2 py-4">
      <div className="flex w-full h-12 md:h-[88px] items-end">
        <div className="h-full relative md:w-20 w-12 rounded-full overflow-hidden border border-gray-4 dark:border-background-2">
          <Image alt="profile" src={session?.user.image as string} fill />
        </div>

        <div className="flex flex-col h-fit mr-2 md:mr-6">
          <span className="body-sm md:body-md text-gray-8 dark:text-gray-3">
            {session?.user.name}
          </span>
          <span className="caption-sm md:caption-md text-gray-7 dark:text-gray-5">
            {convertToPersianNumbers(phone)}
          </span>
        </div>
      </div>

      <hr className="mt-2 mb-2 w-full bg-gray-6 dark:bg-background-2 h-[1px] border-none" />

      <div className="w-full">
        {ProfileRoute.map((route) => (
          <LinkMenuBar route={route} />
        ))}
      </div>
    </div>
  );
}

export default MenuBar;
