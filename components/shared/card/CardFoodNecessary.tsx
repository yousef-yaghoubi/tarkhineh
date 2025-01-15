import { convertToPersianNumbers } from "@/lib/convertNumberToPersian";

export function PriceOrder({
  price,
  classCustom,
}: {
  price: number;
  classCustom?: string;
}) {
  return (
    <span
      className={`text-[10px] line-through text-gray-5 ${classCustom && classCustom} `}
    >
      {convertToPersianNumbers(price.toLocaleString())}
    </span>
  );
}

export function OrderBadge({
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

export function Price({ price, order }: { price: number; order: number }) {
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
