'use client';
import React from 'react';
import MainOfPaymentPage from './MainOfPaymentPage';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import { useOrder } from '../ShopingProvider';
import { useCart } from '@/providers/shopingCardProvider';
import { useRouter } from 'next/navigation';

function SectionOfPayment() {
  const { order } = useOrder();
  const { cart, clearCart } = useCart();
  const router = useRouter();

  async function handlePayment() {
    if (order.payment.type == 'cash_on_delivery') {
      router.replace('/payment-status');
    } else {
      const res = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: order.fee.price,
          order,
          cart,
        }),
      });

      const data = await res.json();

      if (data.paymentUrl) {
        router.replace(data.paymentUrl);
      }
    }
  }

  return (
    <>
      <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
        <MainOfPaymentPage />
        <AsideFoodsForShopingCart
          linkBTN={''}
          onClickCustom={async () => {
            await handlePayment();
            // clearCart();
          }}
        />
      </section>
    </>
  );
}

export default SectionOfPayment;
