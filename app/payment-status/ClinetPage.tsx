'use client';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const Button = dynamic(()=> import('@/components/shared/button/Button'))
function ClinetPage() {

  const randomEightDigitNumber = Math.floor(10000000 + Math.random() * 90000000);

  return (
    <>
      <Image
        alt="OK"
        src={'/image/tick-Primary.webp'}
        width={254}
        height={240}
        className="w-[120px] h-28 md:w-64 md:h-60"
      />
      <h1 className="h6 md:h2 text-primary">پرداخت شما با موفقیت انجام شد!</h1>
      <span className="caption-md md:body-xl text-primary">
        کد رهگیری سفارش شما: {convertToPersianNumbers(randomEightDigitNumber.toString())}
      </span>
      <div className="w-full flex justify-center gap-4 md:gap-6 mt-12 md:mt-[50px]">
        <Button
          btn="stroke"
          theme="Primary"
          className="w-2/5 max-w-[152px] md:max-w-none h-8 md:w-[184px] md:h-10"
          link='/'
        >
          بازگشت به صفحه اصلی
        </Button>
        <Button
          btn="fill"
          theme="Primary"
          className="w-2/5 max-w-[152px] md:max-w-none !rounded h-8 md:w-[184px] md:h-10"
          link='/user/order-tracking'
        >
          پیگیری سفارش
        </Button>
      </div>
    </>
  );
}

export default ClinetPage;
