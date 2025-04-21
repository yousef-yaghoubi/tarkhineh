import { headers } from 'next/headers';
import React from 'react';
import RenderAddressesClient from './RenderAddressesClient';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { Metadata } from 'next';

export const metadata: Metadata  = {
  title: 'آدرس‌های من | مدیریت آدرس‌ها در ترخینه',
  description: 'آدرس‌های خود را در ترخینه مدیریت کنید تا سفارش‌های شما سریع‌تر و دقیق‌تر ارسال شوند.',
  openGraph: {
    title: 'آدرس‌های من | مدیریت آدرس‌ها در ترخینه',
    description: 'آدرس‌های تحویل غذای خود را مدیریت کنید و تجربه‌ای راحت‌تر از سفارش آنلاین داشته باشید.',
    url: `${getBaseUrl()}/user/myAddresses`,
    images: [
      {
        url: `/logoGreenBig.webp`,
        width: 1200,
        height: 630,
        alt: `مدیریت آدرس‌ها - ترخینه`,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/user/myAddresses`,
  },
}

async function page() {
  const {addresses: getAddresses} = await fetch(
    `${getBaseUrl()}/api/address/addressesOfUser`,
    {
      headers: headers(),
    }
  ).then((res) => res).then((result) => result.json());

  return (
    <>
      <RenderAddressesClient address={getAddresses} />
    </>
  );
}

export default page;
