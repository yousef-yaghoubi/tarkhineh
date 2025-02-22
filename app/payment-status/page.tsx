import React from 'react';
import Celebrate from './Celebration';
import ClinetPage from './ClinetPage';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

function page() {

  const requestHeaders = headers();
  const referer = requestHeaders.get("referer") || "";
  const allowedDomain = process.env.NEXTAUTH_URL as string; // دومین مجاز

  // اگه رفرر وجود نداشته باشه یا معتبر نباشه، ریدایرکت کن
  if (!referer.includes(allowedDomain)) {
    redirect("/"); // انتقال به صفحه اصلی
  }

  return (
    <div className="h-[calc(100vh_-_64px)] md:h-[calc(100vh_-_115px)] w-screen flex flex-col justify-center items-center relative">
      <ClinetPage/>
      <Celebrate />
    </div>
  );
}

export default page;
