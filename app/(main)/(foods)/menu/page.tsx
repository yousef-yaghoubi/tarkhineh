import React from 'react';
import HeaderMenu from './HeaderMenu';
import InfiniteScroll from './InfiniteScroll';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'منوی رستوران ترخینه | سفارش آنلاین غذاهای ایرانی و سنتی',
  description: 'با منوی متنوع رستوران ترخینه آشنا شوید. انواع غذاهای ایرانی و سنتی با کیفیت عالی و ارسال سریع. همین حالا سفارش دهید!',
  openGraph: {
    title: 'منوی رستوران ترخینه | سفارش آنلاین غذاهای ایرانی و سنتی',
    description: 'کشف طعم‌های اصیل ایرانی در منوی رستوران ترخینه. از پیش‌غذا تا دسر، هر آنچه می‌خواهید اینجاست!',
    url:`${getBaseUrl()}/menu`,
  },
  alternates: {
    canonical: `${getBaseUrl()}/menu`,
  },
}

async function page() {  
  return (
    <div>
      <HeaderMenu />
      <InfiniteScroll/>
    </div>
  );
}

export default page;
