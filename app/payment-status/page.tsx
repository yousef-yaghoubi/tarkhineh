import React from 'react';
import Celebrate from './Celebration';
import ClinetPage from './ClinetPage';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ترخینه | پرداخت موفق',
  description:
    'سفارش آنلاین غذاهای سنتی ایرانی با بهترین کیفیت از ترخینه. تجربه‌ای بی‌نظیر از طعم خانه!',
};

async function page({
  searchParams,
}: {
  searchParams: { status: 'OK' | 'NOK' };
}) {
  const requestHeaders = headers();
  const referer = requestHeaders.get('referer') || '';
  const allowedDomain = getBaseUrl() as string; // دومین مجاز

  // اگه رفرر وجود نداشته باشه یا معتبر نباشه، ریدایرکت کن
  if (!referer.includes(allowedDomain)) {
    redirect('/'); // انتقال به صفحه اصلی
  }

  const statusData = await searchParams.status;
  return (
    <div className="h-[calc(100vh_-_64px)] md:h-[calc(100vh_-_115px)] w-screen flex flex-col justify-center items-center relative">
      <ClinetPage status={statusData} />
      {statusData == 'OK' && <Celebrate />}
    </div>
  );
}

export default page;
