import IconMap from '@/components/shared/IconMap';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import Image from 'next/image';
import React from 'react';
import QuantityFood from './QuantityFood';

function PriceOrder({
  price,
  classCustom,
}: {
  price: number;
  classCustom?: string;
}) {
  return (
    <span
      className={`text-[16px] line-through text-gray-5 ${classCustom && classCustom} `}
    >
      {convertToPersianNumbers(price.toString())}
    </span>
  );
}
function OrderBadge({
  order,
  classCustom,
}: {
  order: number;
  classCustom?: string;
}) {
  return (
    <div
      className={`w-8 h-4 bg-error-extralight rounded-md caption-sm text-error flex justify-center items-center ${classCustom}`}
    >
      %{convertToPersianNumbers(order.toString())}
    </div>
  );
}

function Price({ price, order }: { price: number; order: number }) {
  return (
    <>
      {order !== 0 &&
        convertToPersianNumbers(
          (price - price * (order / 100)).toLocaleString()
        )}{' '}
      {order == 0 && convertToPersianNumbers(price.toLocaleString())}
      تومان
    </>
  );
}


function CardFoodShopingCard() {
  const starFill = Math.round(3.5);
  const starStroke = 5 - starFill;

  const arrayStarFill = Array.from({ length: starFill }, (_, i) => i + 1);
  const arrayStarStroke = Array.from({ length: starStroke }, (_, i) => i + 1);

  return (
    <div className="bg-withe dark:bg-background-2 w-11/12 max-w-[656px] rounded-md h-[158px] overflow-hidden relative">
      <Image
        src={'/image/imageFood.jpg'}
        alt="food"
        width={169}
        height={158}
        className="h-full"
      />

      <div className="w-[calc(100%_-_169px)] h-full absolute left-0 top-0 grid grid-cols-customCardShopingCard px-8 py-4  text-gray-8 dark:text-gray-2">
        <span className="h-full h7 col-start-1 col-end-4">
          پاستا سبزیجات
        </span>
        <span className="h-full justify-end flex col-start-4 col-end-6">
          <IconMap icon="removeIcon" />
        </span>
        <p className="h-full body-sm flex items-center col-start-1 col-end-5">
          پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده
        </p>

        <div
          className={`h-full flex items-center justify-end`}
        >
          <div className={` ${true ? 'flex' : 'hidden'} gap-1 items-center justify-between`}>
            <PriceOrder price={13000} />
            <OrderBadge order={2} />
          </div>
        </div>

        <div className="h-full flex col-start-1 col-end-4 items-center">
          {arrayStarStroke.map((star) => (
            <IconMap icon='starStrokeLg' key={star}/>
          ))}
          {arrayStarFill.map((star) => (
            <IconMap icon='starRateLg' key={star}/>
          ))}
          <QuantityFood quantity={2}/>
        </div>
        <span className="h-full body-lg flex justify-end col-start-4 col-end-6">
          <Price order={2} price={13000} />
        </span>
      </div>
    </div>
  );
}

export default CardFoodShopingCard;
