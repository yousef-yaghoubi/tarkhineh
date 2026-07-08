'use client';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';

const Button = dynamic(() => import('@/components/shared/button/Button'));
function ClinetPage({ status }: { status: 'OK' | 'NOK' }) {
  const randomEightDigitNumber = Math.floor(
    10000000 + Math.random() * 90000000
  );

  return (
    <>
      <Image
        alt={status}
        src={
          status == 'OK'
            ? '/image/tick-Primary.webp'
            : '/image/Cancel-Error.webp'
        }
        width={254}
        height={240}
        className="w-[120px] h-28 md:w-64 md:h-60"
      />
      {status == 'OK' ? (
        <h1 className="h6 md:h2 mt-6 md:mt-12 text-primary">
          پرداخت شما با موفقیت انجام شد!
        </h1>
      ) : (
        <h1 className="h6 md:h2 mt-6 md:mt-12 text-error">
          پرداخت شما ناموفق بود!
        </h1>
      )}

      {status == 'OK' && (
        <span className="caption-md md:body-xl text-primary">
          کد رهگیری سفارش شما:{' '}
          {convertToPersianNumbers(randomEightDigitNumber.toString())}
        </span>
      )}
      <div className="w-full flex justify-center gap-4 md:gap-6 mt-12 md:mt-[50px]">
        <Button
          btn="stroke"
          theme="Primary"
          className="w-2/5 max-w-[152px] md:max-w-none h-8 md:w-[184px] md:h-10"
          link="/"
        >
          بازگشت به صفحه اصلی
        </Button>

        {status == 'OK' && (
          <Button
            btn="fill"
            theme="Primary"
            className="w-2/5 max-w-[152px] md:max-w-none !rounded h-8 md:w-[184px] md:h-10"
            link="/user/order-tracking"
          >
            پیگیری سفارش
          </Button>
        )}
      </div>
    </>
  );
}

export default ClinetPage;
