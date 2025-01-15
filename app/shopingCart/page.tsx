import React from 'react';
import ProgressShoping from './ProgressShoping';
import CardFoodShopingCard from './CardFoodShopingCard';
import RenderCardFoods from './RenderCardFoods';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';

function page() {
  return (
    <div className="flex flex-col items-center">
      <ProgressShoping />

      <section className="flex justify-around w-11/12 max-w-[1300px] mb-12">
        <RenderCardFoods/>
        
      </section>
    </div>
  );
}

export default page;
