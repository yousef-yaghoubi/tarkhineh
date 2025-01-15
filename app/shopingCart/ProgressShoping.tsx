import IconMap from '@/components/shared/IconMap';
import React from 'react';

function ProgressShoping() {
  let step: 1 | 2 | 3 | number = 1;

  return (
    <div className="w-11/12 max-w-[731px] h-10 flex justify-between my-10 items-center">
      <p
        className={`w-36 ${step == 1 ? 'h6' : 'body-sm text-gray-4'} text-primary flex gap-2 justify-center items-center`}
      >
        {step == 1 ? (
          <IconMap icon="iconShopingCardActiveLg" />
        ) : (
          <IconMap icon="iconShopingCard" />
        )}
        سبد خرید
      </p>
      <div className="w-4/12 flex flex-row">
        <div className="w-1/2 border-b-2 border-primary border-dashed h-1"></div>
        <div
          className={`w-1/2 border-b-2 ${step == 2 || step == 3 ? 'border-b-primary' : 'border-gray-4'} border-dashed h-1`}
        ></div>
      </div>
      <p
        className={`w-48 ${step == 2 ? 'h6 text-primary' : step == 3 ? 'body-sm text-primary' : 'body-sm text-gray-4'} flex gap-2 justify-center items-center`}
      >
        {step == 2 ? (
          <IconMap icon="tickSquareActiveLg" />
        ) : step == 3 ? (
          <IconMap icon="tickSquareActive" />
        ) : (
          <IconMap icon="tick-square" />
        )}
        تکمیل اطلاعات
      </p>
      <div className="w-4/12 flex flex-row">
        <div
          className={`w-1/2 border-b-2 ${step == 2 || step == 3 ? 'border-b-primary' : 'border-gray-4'} border-dashed h-1`}
        ></div>
        <div
          className={`w-1/2 border-b-2 ${step == 3 ? 'border-b-primary' : 'border-gray-4'} border-dashed h-1`}
        ></div>
      </div>
      <p
        className={`w-32 ${step == 3 ? 'h6 text-primary' : 'body-sm text-gray-4'} flex gap-2 justify-center items-center`}
      >
        {step == 3 ? (
          <IconMap icon="walletActiveLg" />
        ) : (
          <IconMap icon="wallet" />
        )}
        پرداخت
      </p>
    </div>
  );
}

export default ProgressShoping;
