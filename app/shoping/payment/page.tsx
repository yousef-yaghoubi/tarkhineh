import React from 'react';
import SectionOfPayment from './SectionOfPayment';
import { Metadata } from 'next';
import { getBaseUrl } from '@/lib/getBaseUrl';


export const metadata: Metadata = {
  title: 'پرداخت سفارش | پرداخت امن در ترخینه',
  description: 'پرداخت آنلاین و امن برای سفارش‌های ترخینه. با اطمینان خاطر، غذای خوشمزه خود را سفارش دهید!',
  openGraph: {
    title: 'پرداخت سفارش | پرداخت امن در ترخینه',
    description: 'سفارش شما آماده پرداخت است. پرداخت را انجام دهید و منتظر تحویل غذای خوشمزه از رستوران‌های ترخینه باشید!',
    url: `${getBaseUrl()}/shoping/payment`,
    images: [
      {
        url: `/logoGreenBig.png`,
        width: 1200,
        height: 630,
        alt: `پرداخت سفارش - رستوران‌های ترخینه`,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/shoping/payment`,
  },
}


function page() {
  return (
    <>
    <SectionOfPayment/>
    </>
  );
}

export default page;
