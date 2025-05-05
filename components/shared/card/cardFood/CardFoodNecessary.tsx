import { convertToPersianNumbers } from "@/lib/convertNumberToPersian";
import { FoodType } from "@/types";
import { ComponentProps } from "react";
import IconStar from '@icons/StarRate.svg';

export function PriceOrder({
  price,
  className,
}: {
  price: number;
  className?: ComponentProps<"div">["className"];
}) {
  return (
    <span
      className={`text-[10px] line-through text-gray-5 ${className && className} `}
    >
      {convertToPersianNumbers(price.toLocaleString())}
    </span>
  );
}

export function OrderBadge({
  order,
  className,
}: {
  order: number;
  className?: ComponentProps<"div">["className"];
}) {
  return (
    <div
      className={`w-8 h-4 bg-error-extralight rounded-md caption-sm text-error flex justify-center items-center ${className}`}
    >
      %{convertToPersianNumbers(order.toString())}
    </div>
  );
}

export function Price({ price, order }: { price: number; order: number }) {
  return (
    <>
      {order !== 0 &&
        convertToPersianNumbers(
          (price - price * (order / 100)).toLocaleString()
        )}{' '}
      {order == 0 && convertToPersianNumbers(price.toLocaleString())}
      {' '}
      تومان
    </>
  );
}

export function RenderRatingForCardFoodBranch ({item}: {item: FoodType}) {
  return (
      <div className="w-full h-1/2 flex items-center">
          <IconStar className="w-4 h-4" />
          <span className="caption-sm md:button-sm flex">
              {convertToPersianNumbers(item.rating.toString())}
              &nbsp;
              <span className="caption-sm text-gray-5 items-center hidden md:flex">
                  (
                  {convertToPersianNumbers(item._count.commentsFood.toLocaleString())} امتیاز)
              </span>
          </span>
      </div>
  )
}