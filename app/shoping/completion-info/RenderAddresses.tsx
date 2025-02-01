import IconMap from '@/components/shared/IconMap';
import Image from 'next/image';
import React from 'react';
import Address from './Address';
import Button from '@/components/shared/button/Button';

function RenderAddresses({
  sendDataToParent,
  showAddressBranch,
}: {
  sendDataToParent: (child: boolean) => void;
  showAddressBranch: boolean;
}) {
  const empty = false;
  return (
    <div className="flex w-full h-fit rounded-md border border-gray-4 dark:border-background-2 p-4 mt-3 md:mt-6">
      {showAddressBranch !== true ? (
        <div className="w-full h-fit">
          <p className="flex justify-between border-b border-gray-4 dark:border-background-2 pb-2">
            <span className="flex items-center gap-1">
              <IconMap icon="locationShoping" />
              <span className="body-sm md:body-md">آدرس ها</span>
            </span>
            <span
              className="flex items-center text-primary gap-1 cursor-pointer"
              onClick={() => sendDataToParent(true)}
            >
              <i className="rotate-45">
                <IconMap icon="closeCircel" />
              </i>
              <span className="body-sm md:body-md">افزودن آدرس</span>
            </span>
          </p>
          {empty ? (
            <div className="relative flex flex-col md:flex-row xl:flex-col 2xl:flex-row justify-center items-center h-full w-full py-3 gap-2">
              <Image
                src={'/image/EmptyPage.png'}
                alt="empty"
                width={131}
                height={127}
              />
              <p className="absolute caption-sm md:body-sm text-gray-6">
                شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
              </p>
            </div>
          ) : (
            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 justify-center items-center h-full w-full py-3 gap-2">
              <Address />
              <Address />
              <Address />
              <Address />
            </div>
          )}
        </div>
      ) : (
        <div className="flex px-4 justify-between">
          <div>
            <h3 className='flex body-sm md:body-md'>
              <IconMap icon="locationShoping" />
              آدرس شعبه اکباتان
            </h3>
            <ul className='caption-sm md:caption-md text-gray-7 dark:text-gray-4 my-6'>
              <li>اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف</li>
              <li>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</li>
              <li>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </li>
              <li>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</li>
            </ul>
            <Button btn='stroke' theme='Black' className='w-[152px] h-8 caption-md m-auto'>
              مشاهده در نقشه
            </Button>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default RenderAddresses;
