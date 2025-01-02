import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';


interface FoodType{
  id: number;
  name: string;
  image: string;
  desc : string;
  price: number;
  order: number;
  rating: number;
  _count : {
    commentsFood: number
  }
}


function CardFoodBranch({item}:{item: FoodType}) {
  return (
    <div className="w-[168px] md:w-72 h-[231px] md:h-[417px] overflow-hidden rounded-sm relative hover:md:shadow-shadow-10  flex flex-col items-center bg-white dark:bg-background-1">
      <Image
        src="/image/imageFood.jpg"
        alt="food"
        fill
        className="w-full !h-[109px] md:!h-[240px]"
      />
      <div className="absolute bottom-0 h-[calc(100%_-_109px)] md:h-[calc(100%_-_240px)] w-full flex flex-col items-center border border-gray-4 dark:border-background-2 !border-t-0 rounded-b">
        <span className="caption-md mt-1 md:h7 md:mt-2">{item.name}</span>

        <div className="flex justify-between w-full h-10 md:h-[51px] px-2 mt-1 md:mt-4">
          <div className="w-1/2 h-full flex flex-col justify-between">
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
                {convertToPersianNumbers(item.rating.toString())}
                &nbsp;
                <span className="caption-sm text-gray-5 items-center hidden md:flex">
                  ({convertToPersianNumbers(item._count.commentsFood.toLocaleString())}{' '}
                  امتیاز)
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end relative w-1/2">
            <div className={`w-[68px] h-1/2 items-center justify-between ${item.order == 0 ? 'hidden' : 'flex'} absolute top-0 left-0`}>
              <span className="text-[10px] line-through text-gray-5">
                {convertToPersianNumbers(item.price.toString())}
                {/* {item.price} */}
              </span>
              <div className="w-8 h-4 bg-error-extralight rounded-md caption-sm text-error flex justify-center items-center">
                %{convertToPersianNumbers(item.order.toString())}
              </div>
            </div>

            <div className="w-full h-1/2 caption-sm md:body-md absolute left-0 bottom-0 flex justify-end">
              {item.order !== 0 && convertToPersianNumbers((item.price - (item.price * (item.order / 100))).toLocaleString())}
              {item.order == 0 && convertToPersianNumbers(item.price.toLocaleString())}
              تومان
            </div>
          </div>
        </div>

        <Button
          btn="fill"
          theme="Primary"
          btnSize="w-[152px] h-8 caption-sm mt-3 md:mt-4 md:w-[256px] md:h-10"
        >افزودن به سبد خرید</Button>
      </div>
    </div>
  );
}

export default CardFoodBranch;
