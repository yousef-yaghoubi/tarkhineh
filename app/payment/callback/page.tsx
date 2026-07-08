'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '@/providers/shopingCardProvider';

export default function Callback() {
  const search = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();

  useEffect(() => {
    const authority = search.get('Authority');
    const status = search.get('Status');

    console.log(status);
    if (status !== 'OK') {
      router.push(`/payment-status?status=NOK`);
    }

    fetch('/api/payment/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authority }),
    })
      .then((res) => res.json())
      .then(({ success }) => {
        if (success) {
          clearCart();
          router.push(`/payment-status?status=OK`);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <span className="loader text-primary" />
      در حال بررسی پرداخت...
    </div>
  );
}
