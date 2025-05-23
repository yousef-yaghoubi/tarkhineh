import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
const Button = dynamic(()=> import('@/components/shared/button/Button'))
function WithoutCart({ setBorder }: { setBorder?: boolean }) {
  return (
    <div
      className={`w-full h-[422px] rounded-md ${setBorder && 'border border-gray-4'} dark:border-background-2 flex flex-col items-center justify-center relative`}
    >
      <Image
        src={'/image/EmptyPage.webp'}
        alt="empty"
        width={325}
        height={312}
        className="absolute"
      />
      <span className="mt-12 body-sm sm:body-xl text-gray-6 dark:text-gray-4">
        شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
      </span>
      <Button
        btn="stroke"
        theme="Primary"
        className="w-[184px] z-10 h-10 mt-6 !bg-white dark:!bg-background-1 caption-md md:button-lg"
      >
        منوی رستوران
      </Button>
    </div>
  );
}

export default WithoutCart;
