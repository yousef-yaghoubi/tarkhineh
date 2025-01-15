import React from 'react';
import ProgressShoping from './ProgressShoping';
import CardFoodShopingCard from './CardFoodShopingCard';

function page() {
  return (
    <div className="flex flex-col items-center">
      <ProgressShoping />

      <section className="flex justify-around w-11/12 max-w-[1300px] mb-12">
        <section className="w-[704px] h-[554px] bg-slate-500 rounded-md overflow-y-scroll justify-center flex p-6">
            <CardFoodShopingCard/>
        </section>
        <section className="w-[496px] h-[323px] bg-slate-500 rounded-md p-6"></section>
      </section>
    </div>
  );
}

export default page;
