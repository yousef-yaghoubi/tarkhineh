'use client';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { FoodType } from '@/types';
import React, { useState } from 'react';
import IconHeart from '@icons/Heart.svg';
import IconHeartFill from '@icons/HeartFill.svg';
import { AddFoodToFavorite } from '@/app/actions/food';
import { toast } from 'sonner';
import dynamic from 'next/dynamic';

const Button = dynamic(()=> import('@/components/shared/button/Button'))
function ClientPageForButton({ food }: { food: FoodType }) {
  const [isRedHeart, setIsRedHeart] = useState(food.isFavorite);


  const handleAddFoodToFavorite = async (id: string) => {
    const addFood = await AddFoodToFavorite(id);

    if (addFood.status == 200) {
      setIsRedHeart(false);
      toast.success(addFood.message as string);
    } else if (addFood.status == 201) {
      setIsRedHeart(true);
      toast.success(addFood.message as string);
    } else {
      toast.warning(addFood.message as string);
    }
  };

  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='flex justify-around items-center w-full'>
        <span className="body-lg">
          {convertToPersianNumbers(food.price.toLocaleString())} تومان
        </span>

        <div
          onClick={() => {
            handleAddFoodToFavorite(food.id);
          }}
        >
          {isRedHeart ? (
            <IconHeartFill className="w-8 h-8 fill-red-600 cursor-pointer" />
          ) : (
            <IconHeart className="w-8 h-8 fill-[#ADADAD] cursor-pointer" />
          )}
        </div>
      </div>
      <Button
        btn="fill"
        theme="Primary"
        className="w-[152px] h-8 caption-sm md:button-lg mt-3 md:mt-4 md:w-[256px] md:h-10"
        shopingCard={food}
        onClickCustom={()=> toast.success('کالا به سبدخرید اضافه شد.')}
      >
        افزودن به سبد خرید
      </Button>
    </div>
  );
}

export default ClientPageForButton;
