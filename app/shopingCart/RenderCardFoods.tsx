'use client';
import React from 'react';
import CardFoodShopingCard from './CardFoodShopingCard';
import { useCart } from '@/components/shared/shopingCardProvider';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import IconMap from '@/components/shared/IconMap';
import { Price } from '@/components/shared/card/CardFoodNecessary';

function RenderCardFoods() {
  const { cart } = useCart();
  const idCart = cart.map((item) => item.id);

  const num = 180000;
  return (
    <>
      <div className="w-[704px] h-[554px] border border-slate-300 overflow-auto rounded-md items-center flex flex-col p-6 gap-4">
        {cart.map((food) => (
          <CardFoodShopingCard />
        ))}
      </div>
      <aside className="w-[496px] h-[323px] border border-gray-4 rounded-md p-6 text-gray-8">
        <div className="flex justify-between items-center border-b border-gray-4 pb-3">
          <span>
            سبد خرید ({convertToPersianNumbers(cart.length.toString())})
          </span>
          <IconMap icon="removeIcon" />
        </div>
        <div className="flex justify-between items-center border-b border-gray-4 py-3">
          <span>تخفیف محصولات</span>
          <span className='text-gray-6'>
            <Price price={num} order={0} />
          </span>
        </div>
        <div></div>
        <div></div>
      </aside>
    </>
  );
}

export default RenderCardFoods;
