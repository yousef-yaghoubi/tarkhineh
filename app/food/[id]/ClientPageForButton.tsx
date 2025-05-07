'use client';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { FoodType } from '@/types';
import React, { useState } from 'react';
import IconHeart from '@icons/Heart.svg';
import IconHeartFill from '@icons/HeartFill.svg';
import { AddFoodToFavorite } from '@/app/actions/food';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';
import AddFavorite from '@/components/shared/card/cardFood/AddFavorite';

const Button = dynamic(() => import('@/components/shared/button/Button'))
function ClientPageForButton({ food }: { food: FoodType }) {

  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='flex justify-around items-center w-full'>
        <span className="body-lg">
          {convertToPersianNumbers(food.price.toLocaleString())} تومان
        </span>

        <AddFavorite item={food} width={24} height={24} />
      </div>
      <Button
        btn="fill"
        theme="Primary"
        className="w-[152px] h-8 caption-sm md:button-lg mt-3 md:mt-4 md:w-[256px] md:h-10"
        shopingCard={food}
        onClickCustom={() => toast.success('کالا به سبدخرید اضافه شد.')}
      >
        افزودن به سبد خرید
      </Button>
    </div>
  );
}

export default ClientPageForButton;
