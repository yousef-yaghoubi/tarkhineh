import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';

function CardFoodBranch() {
  const rate = 5;
  const discount = 20;
  const priceDis = 175000;
  const price = 150000;
  const quantityRate = 62;
  return (
    <div className="w-[168px] md:w-72 h-[231px] md:h-[417px] overflow-hidden rounded-sm relative hover:md:shadow-shadow-10  flex flex-col items-center bg-white dark:bg-background-1">
      <Image
        src="/image/imageFood.jpg"
        alt="food"
        fill
        className="w-full !h-[109px] md:!h-[240px]"
      />
      <div className="absolute bottom-0 h-[calc(100%_-_109px)] md:h-[calc(100%_-_240px)] w-full flex flex-col items-center border border-gray-4 !border-t-0 rounded-b">
        <span className="caption-md mt-1 md:h7 md:mt-2">غذای گیاهی</span>

        <div className="flex justify-between w-full h-10 md:h-[51px] px-2 mt-1 md:mt-4">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="relative flex items-center">
              <Image
                src={'/icons/Heart.svg'}
                alt="like"
                width={16}
                height={16}
                className="!w-4 !h-4 ml-1"
              />
              <span className="caption-sm hidden md:flex text-gray-5">
                افزودن به علاقمندی ها
              </span>
            </div>

            <div className="w-full h-1/2 flex items-center">
              <Image
                src={'/icons/starRate.svg'}
                alt="rate"
                width={16}
                height={16}
                className="!w-4 !h-4"
              />
              <span className="caption-sm md:button-sm flex">
                {convertToPersianNumbers(rate.toString())}
                &nbsp;
                <span className="caption-sm text-gray-5 items-center hidden md:flex">
                  ({convertToPersianNumbers(quantityRate.toLocaleString())}{' '}
                  امتیاز)
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end">
            <div className="w-[68px] h-1/2 flex items-center justify-between">
              <span className="text-[10px] line-through text-gray-5">
                {convertToPersianNumbers(priceDis.toString())}
              </span>
              <div className="w-8 h-4 bg-error-extralight rounded-md caption-sm text-error flex justify-center items-center">
                %{convertToPersianNumbers(discount.toString())}
              </div>
            </div>

            <div className="w-full h-1/2 caption-sm md:body-md">
              {convertToPersianNumbers(price.toLocaleString())}
              تومان
            </div>
          </div>
        </div>

        <Button
          btn="fill"
          theme="Primary"
          title="افزودن به سبد خرید"
          btnSize="w-[152px] h-8 caption-sm mt-3 md:mt-4 md:w-[256px] md:h-10"
        />
      </div>
    </div>
  );
}

export default CardFoodBranch;
