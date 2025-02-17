'use client'
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import React from 'react';
import MainOfPaymentPage from './MainOfPaymentPage';
import { useOrder } from '../ShopingProvider';
import { useCart } from '@/components/shared/shopingCardProvider';
import { SendAddress } from '@/app/actions/address';
import { SendOrder } from '@/app/actions/orderTracking';


function page() {
  const {order} = useOrder()
  const {cart} = useCart()
  return (
    <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
      <MainOfPaymentPage />
      <AsideFoodsForShopingCart linkBTN="" onClickCustom={()=> SendOrder({order, cart})}/>
    </section>
  );
}

export default page;
