'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Callback() {
  const search = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const authority = search.get('Authority');
    const status = search.get('Status');

    if (status !== 'OK') {
      return;
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
          router.push('/payment-status');
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
