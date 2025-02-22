'use client';
import React from 'react';
import MainOfPaymentPage from './MainOfPaymentPage';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import { SendOrder } from '@/app/actions/orderTracking';
import { useOrder } from '../ShopingProvider';
import { useCart } from '@/components/shared/shopingCardProvider';

function SectionOfPayment() {
  const { order } = useOrder();
  const { cart, clearCart } = useCart();

  return (
    <>
      <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
        <MainOfPaymentPage />
        <AsideFoodsForShopingCart
          linkBTN="/payment-status"
          onClickCustom={async() => {
            await SendOrder({ order, cart });
            clearCart();
          }}
        />
      </section>
    </>
  );
}

export default SectionOfPayment;
