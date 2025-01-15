import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';
import React from 'react';
import Button from '../button/Button';
import { FoodType } from '@/lib/indexType';
import IconMap from '../IconMap';
import Link from 'next/link';
import { OrderBadge, Price, PriceOrder } from './CardFoodNecessary';

function CardFood({
  item,
  isShowForMenu,
}: {
  item: FoodType;
  isShowForMenu?: boolean;
}) {
  if (isShowForMenu !== true) {
    return (
      <div className="w-[168px] md:w-72 h-[231px] md:h-[417px] overflow-hidden rounded-sm relative hover:shadow-shadow-10 transition-shadow duration-300 flex flex-col items-center bg-white dark:bg-background-1">
        <Link href={`/product/${item.id}`}>
          <Image
            src="/image/imageFood.jpg"
            alt="food"
            fill
            className="w-full !h-[109px] md:!h-[240px]"
          />
        </Link>
        <div className="absolute bottom-0 h-[calc(100%_-_109px)] md:h-[calc(100%_-_240px)] w-full flex flex-col items-center border border-gray-4 dark:border-background-2 !border-t-0 rounded-b">
          <Link href={`/product/${item.id}`}>
            <span className="caption-md mt-1 md:h7 md:mt-2">{item.name}</span>
          </Link>

          <div className="flex justify-between w-full h-10 md:h-[51px] px-2 mt-1 md:mt-4">
            <div className="w-1/2 h-full flex flex-col justify-between">
              <div className="relative flex items-center">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M8.00016 14.9336C7.7935 14.9336 7.5935 14.9069 7.42683 14.8469C4.88016 13.9736 0.833496 10.8736 0.833496 6.29356C0.833496 3.96023 2.72016 2.06689 5.04016 2.06689C6.16683 2.06689 7.22016 2.50689 8.00016 3.29356C8.78016 2.50689 9.8335 2.06689 10.9602 2.06689C13.2802 2.06689 15.1668 3.96689 15.1668 6.29356C15.1668 10.8802 11.1202 13.9736 8.5735 14.8469C8.40683 14.9069 8.20683 14.9336 8.00016 14.9336ZM5.04016 3.06689C3.2735 3.06689 1.8335 4.51356 1.8335 6.29356C1.8335 10.8469 6.2135 13.3802 7.7535 13.9069C7.8735 13.9469 8.1335 13.9469 8.2535 13.9069C9.78683 13.3802 14.1735 10.8536 14.1735 6.29356C14.1735 4.51356 12.7335 3.06689 10.9668 3.06689C9.9535 3.06689 9.0135 3.54023 8.40683 4.36023C8.22016 4.61356 7.7935 4.61356 7.60683 4.36023C6.98683 3.53356 6.0535 3.06689 5.04016 3.06689Z"
                    fill="#ADADAD"
                  />
                </svg>

                <span className="caption-sm hidden md:flex text-gray-5">
                  افزودن به علاقمندی ها
                </span>
              </div>

              <div className="w-full h-1/2 flex items-center">
                <IconMap icon="starRate" key={'starRate'} />
                <span className="caption-sm md:button-sm flex">
                  {convertToPersianNumbers(item.rating.toString())}
                  &nbsp;
                  <span className="caption-sm text-gray-5 items-center hidden md:flex">
                    (
                    {convertToPersianNumbers(
                      item._count.commentsFood.toLocaleString()
                    )}{' '}
                    امتیاز)
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end relative w-1/2">
              <div
                className={`w-[4em] h-1/2 items-center justify-between ${item.order == 0 ? 'hidden' : 'flex'} absolute top-0 left-0`}
              >
                <PriceOrder price={item.price} />
                <OrderBadge order={item.order} />
              </div>

              <div className="w-full h-1/2 caption-sm md:body-md absolute left-0 bottom-0 flex justify-end">
                <Price price={item.price} order={item.order} />
              </div>
            </div>
          </div>

          <Button
            btn="fill"
            theme="Primary"
            btnSize="w-[152px] h-8 caption-sm md:button-lg mt-3 md:mt-4 md:w-[256px] md:h-10"
            shopingCard={item.id}
          >
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    );
  } else {
    const starFill = Math.round(item.rating);
    const starStroke = 5 - starFill;

    const arrayStarFill = Array.from({ length: starFill }, (_, i) => i + 1);
    const arrayStarStroke = Array.from({ length: starStroke }, (_, i) => i + 1);
    return (
      <div className="w-4/5 min-w-80 h-[100px] md:w-4/5 md:h-[158px] md:min-w-[600px] border border-gray-4 dark:border-background-2 rounded flex relative overflow-hidden hover:shadow-cardFood transition-shadow duration-300">
        <Link href={`/product/${item.id}`}> 
        <Image
          src={'/image/imageFood.jpg'}
          alt="food"
          fill
          className="!w-[92px] !h-full md:!w-[169px]"
          />
          </Link>
        <div className="w-[calc(100%_-_92px)] md:w-[calc(100%_-_169px)] absolute left-0 h-full p-2 md:pr-8 md:py-2 md:pl-4">
          <div className="flex justify-between items-center">
            <Link href={`/product/${item.id}`}>
            <span className="caption-md md:h7">{item.name}</span>
            </Link>
            <div
              className={`${item.order !== 0 ? 'flex md:hidden' : 'hidden'} w-16 gap-1 items-center justify-between`}
            >
              <PriceOrder price={item.price} />
              <OrderBadge order={item.order} />
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:flex"
            >
              <path
                d="M8.00016 14.9336C7.7935 14.9336 7.5935 14.9069 7.42683 14.8469C4.88016 13.9736 0.833496 10.8736 0.833496 6.29356C0.833496 3.96023 2.72016 2.06689 5.04016 2.06689C6.16683 2.06689 7.22016 2.50689 8.00016 3.29356C8.78016 2.50689 9.8335 2.06689 10.9602 2.06689C13.2802 2.06689 15.1668 3.96689 15.1668 6.29356C15.1668 10.8802 11.1202 13.9736 8.5735 14.8469C8.40683 14.9069 8.20683 14.9336 8.00016 14.9336ZM5.04016 3.06689C3.2735 3.06689 1.8335 4.51356 1.8335 6.29356C1.8335 10.8469 6.2135 13.3802 7.7535 13.9069C7.8735 13.9469 8.1335 13.9469 8.2535 13.9069C9.78683 13.3802 14.1735 10.8536 14.1735 6.29356C14.1735 4.51356 12.7335 3.06689 10.9668 3.06689C9.9535 3.06689 9.0135 3.54023 8.40683 4.36023C8.22016 4.61356 7.7935 4.61356 7.60683 4.36023C6.98683 3.53356 6.0535 3.06689 5.04016 3.06689Z"
                fill="#ADADAD"
              />
            </svg>
          </div>
          <div className="mt-2 md:mt-0 flex justify-between">
            <p className="caption-sm md:body-sm text-gray-8 dark:text-gray-4 w-8/12 whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal md:overflow-auto md:text-balance">
              {item.desc}
            </p>
            <div className="text-gray-8 dark:text-gray-4 flex flex-col items-end">
              <div
                className={`${item.order !== 0 ? 'hidden md:flex' : 'hidden'} w-24 md:w-[5.5em] items-center justify-between`}
              >
                <PriceOrder price={item.price} classCustom="!text-base" />
                <OrderBadge order={item.order} classCustom="md:caption-md" />
              </div>
              <span className="caption-sm md:body-lg">
                <Price order={item.order} price={item.price} />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <IconMap icon="heartGray" />
            <div className="flex items-center md:w-full md:justify-between">
              <div className="flex w-20 md:w-28 ml-2">
                {arrayStarStroke.map((star) => (
                  <IconMap icon="starStrokeLg" key={star} />
                ))}
                {arrayStarFill.map((star) => (
                  <IconMap icon="starRateLg" key={star} />
                ))}
              </div>

              <Button
                btn="fill"
                theme="Primary"
                btnSize="w-[100px] md:w-[244px] h-8 md:h-10 caption-sm md:button-lg"
                shopingCard={item.id}
              >
                افزودن به سبدخرید
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFood;
