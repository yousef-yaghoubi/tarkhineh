import IconMap from '@/components/shared/IconMap';
import Image from 'next/image';
import React from 'react';
import Address from './Address';

function RenderAddresses() {
  const empty = false;
  return (
    <div className="flex w-full h-fit rounded-md border border-gray-4 p-4 mt-3 md:mt-6">
      <div className="w-full">
        <p className="flex justify-between border-b border-gray-4 pb-2">
          <span className="flex items-center gap-1">
            <IconMap icon="locationShoping" />
            <span className="body-sm md:body-md">آدرس ها</span>
          </span>
          <span className="flex items-center text-primary gap-1">
            <i className="rotate-45">
              <IconMap icon="closeCircel" />
            </i>
            <span className="body-sm md:body-md">افزودن آدرس</span>
          </span>
        </p>
        <div className="relative flex flex-col md:flex-row xl:flex-col 2xl:flex-row justify-center items-center h-full w-full py-3 gap-2">
          {empty ? (
            <>
              <Image
                src={'/image/EmptyPage.png'}
                alt="empty"
                width={131}
                height={127}
              />
              <p className="absolute caption-sm md:body-sm text-gray-6">
                شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
              </p>
            </>
          ) : (
            <>
              <Address />
              <Address />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RenderAddresses;
