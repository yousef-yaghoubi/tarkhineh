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
            <AsideFoodsForShopingCart hiddenSection={[1]} />
          </div>
          <div className="hidden md:flex justify-center items-center">
            <AsideFoodsForShopingCart hiddenSection={[2]} />
          </div>
        
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
