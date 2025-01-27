'use client';
import React, { useState } from 'react';
import CardFoodShopingCard from './CardFoodShopingCard';
import { useCart } from '@/components/shared/shopingCardProvider';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import IconMap from '@/components/shared/IconMap';
import { Price } from '@/components/shared/card/CardFoodNecessary';
import Button from '@/components/shared/button/Button';
import { useSession } from 'next-auth/react';
import Modal from '@/components/shared/Modal';
import { CartFoodForShopingCart } from '@/lib/indexType';
import { toast } from 'sonner';
import { WidthIcon } from '@radix-ui/react-icons';
import WithoutCart from './WithoutCart';
import QuantityFood from './QuantityFood';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';

const calcOffPrice = (cart: CartFoodForShopingCart[]) => {
  const offerCart = cart.filter((item) => item.order !== 0);
  const allOffer = [
    offerCart.map(
      (item) =>
        (item.price - (item.price * (100 - item.order)) / 100) * item.quantity
    ),
  ];
  const sum = allOffer[0].reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  return sum;
};

const calcAllPrice = (cart: CartFoodForShopingCart[]) => {
  const offerCart = cart.filter((item) => item.order !== 0);
  const allOffer = [
    offerCart.map(
      (item) => (item.price - (item.price * item.order) / 100) * item.quantity
    ),
  ];
  const sum = allOffer[0].reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  return sum;
};

function RenderCardFoods() {
  const { cart, clearCart } = useCart();
  const { status } = useSession();
  const [isOpenModal, setIsOpenModel] = useState(false);

  return (
    <>
      {cart.length == 0 ? (
        <WithoutCart />
      ) : (
        <>
          <main className="w-11/12 max-w-[704px] h-[554px] border border-gray-4 dark:border-background-2 overflow-auto rounded-md items-center hidden md:flex flex-col p-6 gap-4">
            {cart.map((food) => (
              <CardFoodShopingCard item={food} />
            ))}
          </main>
          <div className="flex md:hidden justify-center items-center w-full h-full">
            <AsideFoodsForShopingCart />
          </div>
          <div className="hidden md:flex justify-center items-center">
            <AsideFoodsForShopingCart hiddenSection={2} />
          </div>
          {/* <main className="p-6 flex flex-col md:hidden rounded-md border w-11/12 border-gray-4 dark:border-background-2">
            <div className="h-48 w-full overflow-auto">
              {cart.map((food) => (
                <div className="w-full flex justify-between px-2 items-center even:bg-gray-3 bg-gray-1 dark:bg-background-1 odd:dark:bg-background-2 h-14">
                  <div className="flex flex-col">
                    <span className="caption-md">{food.name}</span>
                    <span className="caption-sm text-gray-7 dark:text-gray-5">
                      <Price price={food.price} order={food.order} />
                    </span>
                  </div>
                  <QuantityFood id={food.id} quantity={food.quantity} />
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col mt-3 text-gray-8 dark:text-gray-1">
              <div className="flex justify-between items-center border-y border-gray-4 dark:border-background-2 py-3">
                <span className="body-sm">تخفیف محصولات</span>
                <span className="text-gray-6">
                  <Price price={calcOffPrice(cart)} order={0} />
                </span>
              </div>

              <div className="py-3 border-b border-gray-4 dark:border-background-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="body-sm">هزینه ارسال</span>
                  <span className="text-gray-6">
                    <Price price={0} order={0} />
                  </span>
                </div>
                <div className="caption-sm text-warning flex mt-2">
                  <IconMap icon="warningLg" />
                  <p className="mr-2">
                    هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی
                    شما محاسبه و به این مبلغ اضافه خواهد شد.
                  </p>
                </div>
              </div>

              <div className="flex flex-col pt-3 pb-6">
                <div className="flex justify-between">
                  <span className="body-sm">مبلغ قابل پرداخت</span>
                  <span className="text-primary">
                    <Price price={calcAllPrice(cart)} order={0} />
                  </span>
                </div>
                {status == 'unauthenticated' ? (
                  <Button
                    btn="fill"
                    theme="Primary"
                    classCustom="w-full h-10 mt-5"
                    link="/login"
                  >
                    <span
                      className="flex items-center gap-2
            "
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 12.75C9.33 12.75 6.75 10.17 6.75 7C6.75 3.83 9.33 1.25 12.5 1.25C15.67 1.25 18.25 3.83 18.25 7C18.25 10.17 15.67 12.75 12.5 12.75ZM12.5 2.75C10.16 2.75 8.25 4.66 8.25 7C8.25 9.34 10.16 11.25 12.5 11.25C14.84 11.25 16.75 9.34 16.75 7C16.75 4.66 14.84 2.75 12.5 2.75Z"
                          fill="white"
                        />
                        <path
                          d="M21.0901 22.75C20.6801 22.75 20.3401 22.41 20.3401 22C20.3401 18.55 16.8202 15.75 12.5002 15.75C8.18015 15.75 4.66016 18.55 4.66016 22C4.66016 22.41 4.32016 22.75 3.91016 22.75C3.50016 22.75 3.16016 22.41 3.16016 22C3.16016 17.73 7.35015 14.25 12.5002 14.25C17.6502 14.25 21.8401 17.73 21.8401 22C21.8401 22.41 21.5001 22.75 21.0901 22.75Z"
                          fill="white"
                        />
                      </svg>
                      <span>ورود/ثبت نام</span>
                    </span>
                  </Button>
                ) : status == 'authenticated' ? (
                  <Button
                    btn="fill"
                    theme="Primary"
                    classCustom="w-full h-10 mt-5"
                  >
                    <span
                      className="flex items-center gap-2
            "
                    >
                      <span>تکمیل اطلاعات</span>
                      <IconMap icon="arrow-left-white" />
                    </span>
                  </Button>
                ) : (
                  <Button
                    btn="fill"
                    theme="Primary"
                    classCustom="w-full h-10 mt-5"
                    loading
                  >
                    ''
                  </Button>
                )}
              </div>
            </div>
          </main> */}
        </>
      )}

      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModel(false)}
        title={<h6 className="h7">حذف محصولات</h6>}
        desc="همه محصولات سبد خرید شما حذف شود؟"
        removeShopingCart
      >
        <div className="flex w-64 justify-between">
          <button
            className="w-[117px] h-10 rounded border border-primary text-primary"
            onClick={() => setIsOpenModel(false)}
          >
            بازگشت
          </button>
          <button
            className="w-[117px] h-10 rounded bg-error-extralight text-error"
            onClick={() => {
              clearCart(), setIsOpenModel(false);
              toast.success('سبد خرید شما پاک شد.');
            }}
          >
            حذف
          </button>
        </div>
      </Modal>
    </>
  );
}

export default RenderCardFoods;
