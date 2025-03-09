'use client';
import React, { useState } from 'react';
import CardFoodShopingCard from './CardFoodShopingCard';
import { useCart } from '@/components/shared/shopingCardProvider';
import Modal from '@/components/shared/Modal';
import { toast } from 'sonner';
import WithoutCart from './WithoutCart';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';

function RenderCardFoods() {
  const { cart, clearCart } = useCart();
  const [isOpenModal, setIsOpenModel] = useState(false);

  return (
    <>
      {cart.length == 0 ? (
        <WithoutCart setBorder/>
      ) : (
        <>
          <main className="w-11/12 max-w-[704px] h-[554px] scrollbar border border-gray-4 dark:border-background-2 overflow-auto rounded-md items-center hidden md:flex flex-col p-6 gap-4">
            {cart.map((food) => (
              <CardFoodShopingCard item={food} />
            ))}
          </main>

          <div className="flex md:hidden justify-center items-center w-full h-full">
            <AsideFoodsForShopingCart
              hiddenSection={[1]}
              linkBTN="/shoping/completion-info"
            />
          </div>
          <div className="hidden md:flex justify-center items-center">
            <AsideFoodsForShopingCart
              hiddenSection={[2]}
              linkBTN="/shoping/completion-info"
            />
          </div>
        </>
      )}

      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModel(false)}
        title={<h6 className="h7">حذف محصولات</h6>}
        desc="همه محصولات سبد خرید شما حذف شود؟"
        state="removeShopingCart"
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
