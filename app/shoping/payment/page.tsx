import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import React from 'react';
import MainOfPaymentPage from './MainOfPaymentPage';


function page() {
  return (
    <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
      <MainOfPaymentPage />
      <AsideFoodsForShopingCart linkBTN="" />
    </section>
  );
}

export default page;
