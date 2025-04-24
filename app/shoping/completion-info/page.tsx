import React from 'react';
import SectionPage from './SectionPage';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import { getBaseUrl } from '@/lib/getBaseUrl';

export const metadata: Metadata = {
  title: 'تکمیل اطلاعات سفارش | نهایی کردن خرید در ترخینه',
  description:
    'اطلاعات سفارش خود را وارد کنید و خریدتان را نهایی کنید. ترخینه، تجربه‌ای خوشمزه و آسان برای سفارش آنلاین غذا!',
  openGraph: {
    title: 'تکمیل اطلاعات سفارش | نهایی کردن خرید در ترخینه',
    description:
      'تنها چند قدم تا دریافت غذای خوشمزه فاصله دارید! فرم سفارش را تکمیل کنید و آماده تحویل سریع از ترخینه باشید.',
    url: `${getBaseUrl()}/shoping/completion-info`,
    images: [
      {
        url: `/logoGreenBig.webp`, // پیشنهاد: تصویر کاربر در حال وارد کردن اطلاعات یا تأیید نهایی سفارش
        width: 1200,
        height: 630,
        alt: `تکمیل اطلاعات سفارش - رستوران‌های ترخینه`,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/shoping/completion-info`,
  },
};

async function page() {
  const headersList = headers();
  const customHeaders = {
    cookie: headersList.get('cookie') || '',
  };
  
  const addressUser = await fetch(
    `${getBaseUrl()}/api/address/addressesOfUser`,
    {
      cache: 'no-store',
      headers: customHeaders,
    }
  )
    .then((res) => res)
    .then((result) => result.json());

  return (
    <>
      <SectionPage userAddress={addressUser.addresses} />
    </>
  );
}

export default page;
