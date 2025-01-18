import IconMap from '@/components/shared/IconMap';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';
import React from 'react';
import QuantityFood from './QuantityFood';
import {
  OrderBadge,
  Price,
  PriceOrder,
} from '@/components/shared/card/CardFoodNecessary';
import { CartFoodForShopingCart } from '@/lib/indexType';

function CardFoodShopingCard({ item }: { item: CartFoodForShopingCart }) {
  const starFill = Math.round(item.rating);
  const starStroke = 5 - starFill;

  const arrayStarFill = Array.from({ length: starFill }, (_, i) => i + 1);
  const arrayStarStroke = Array.from({ length: starStroke }, (_, i) => i + 1);

  return (
    <>
      <div className="bg-withe dark:bg-background-1 w-full max-w-[656px] rounded-md  overflow-clip !h-[158px] relative border border-gray-4 dark:border-background-2">
        <Image
          src={item.image}
          alt="food"
          width={169}
          height={158}
          className="h-[158px] !object-cover"
        />

        <div className="w-[calc(100%_-_169px)] h-full absolute left-0 top-0 grid grid-cols-customCardShopingCard px-8 py-4  text-gray-8 dark:text-gray-2">
          <span className="h-full h7 col-start-1 col-end-4">{item.name}</span>
          <span className="h-full justify-end flex col-start-4 col-end-6">
            <IconMap icon="removeIcon" />
          </span>
          <p className="h-full body-sm flex items-center col-start-1 col-end-5">
            {item.desc}
          </p>

          <div className={`h-full flex items-center justify-end`}>
            <div
              className={` ${true ? 'flex' : 'hidden'} gap-1 w-[4.2em] items-center justify-between`}
            >
              <PriceOrder price={item.price} />
              <OrderBadge order={item.order} />
            </div>
          </div>

          <div className="h-full flex col-start-1 col-end-4 items-center">
            {arrayStarStroke.map((star) => (
              <IconMap icon="starStrokeLg" key={star} />
            ))}
            {arrayStarFill.map((star) => (
              <IconMap icon="starRateLg" key={star} />
            ))}
            <QuantityFood quantity={item.quantity} id={item.id} />
          </div>
          <span className="h-full body-lg flex justify-end col-start-4 col-end-6">
            <Price order={item.order} price={item.price} />
          </span>
        </div>
      </div>
    </>
  );
}

export default CardFoodShopingCard;
