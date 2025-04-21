import SwiperMain from '@/components/shared/swiper/swiper';
import React from 'react';
import IconCenter from '@icons/centerBank.svg';
import IconWalletOpen from '@icons/openWallet.svg';
import IconDiagramGreen from '@icons/diagramGreen.svg';
import IconBookGreen from '@icons/bookGreen.svg';
import IconLi from '@icons/Rectangle4.svg';
import InputCustom from '@/components/shared/input/InputCustom';
import ClientButton from './ClientButton';
import { Metadata } from 'next';
import { getBaseUrl } from '@/lib/getBaseUrl';

const listOfLogos = [
  {
    id: 1,
    icon: (
      <IconCenter className="w-24 h-24 md:w-36 md:h-36 fill-white dark:fill-background-2" />
    ),
    title: 'بیش از 20 شعبه فعال در سراسر کشور',
  },
  {
    id: 2,
    icon: (
      <IconWalletOpen className="w-24 h-24 md:w-36 md:h-36 fill-white dark:fill-background-2" />
    ),
    title: 'تسهیلات راه‌اندازی رستوران و تجهیز آن',
  },
  {
    id: 3,
    icon: (
      <IconDiagramGreen className="w-24 h-24 md:w-36 md:h-36 fill-white dark:fill-background-2" />
    ),
    title: 'طرح‌های تشویقی ارتقای فروش',
  },
  {
    id: 4,
    icon: (
      <IconBookGreen className="w-24 h-24 md:w-36 md:h-36 fill-white dark:fill-background-2" />
    ),
    title: 'اعطای دستورالعمل پخت غذاها',
  },
];

const lis = [
  { id: 1, title: 'استفاده از برند شناخته شده ترخینه' },
  { id: 2, title: 'مشاوره در امور حقوقی، مالی و مالیاتی' },
  { id: 3, title: 'به حداقل رساندن ریسک سرمایه گذاری' },
  { id: 4, title: 'پشتیبانی بازاریابی و منابع انسانی' },
  { id: 5, title: 'تسریع روند بازگشت سرمایه' },
  { id: 6, title: 'دریافت مشاوره جهت تامین مواد اولیه و تجهیزات' },
  { id: 7, title: 'مشاوره های تخصصی جهت مدیریت رستوران' },
  { id: 8, title: 'طرح های تشویقی برای ارتقا فروش' },
];

export const metadata: Metadata = {
  title: 'اعطای نمایندگی ترخینه | فرصت همکاری با رستوران‌های زنجیره‌ای ترخینه',
  description:
    'به خانواده بزرگ ترخینه بپیوندید! اطلاعات کامل درباره شرایط اخذ نمایندگی رستوران‌های زنجیره‌ای ترخینه را اینجا ببینید.',
  openGraph: {
    title:
      'اعطای نمایندگی ترخینه | فرصت همکاری با رستوران‌های زنجیره‌ای ترخینه',
    description:
      'فرصتی عالی برای سرمایه‌گذاری مطمئن با دریافت نمایندگی ترخینه. شرایط همکاری، مزایا و فرم درخواست نمایندگی را بررسی کنید.',
    url: `${getBaseUrl()}/represent`,
  },
  alternates: {
    canonical: `${getBaseUrl()}/represent`,
  },
};

function BorderButton() {
  return (
    <div className="w-3/4 border-b border-gray-4 h-1 mb-6 mt-6 md:mt-12 md:mb-12"></div>
  );
}

function page() {
  return (
    <div className="flex flex-col items-center">
      <SwiperMain
        slides={[
          {
            id: 1,
            img: '/image/bannerRePresent.webp',
            alt: 'نمایندگی',
            imgMobile: '/image/bannerRePresent.webp',
            title: 'همین الان به خانواده بزرگ ترخینه بپیوندید!',
          },
        ]}
      />

      <div className="mt-6 md:mt-12 mx-2 grid grid-cols-2 md:grid-cols-4 max-w-[925px] gap-[8%]">
        {listOfLogos.map((logo) => (
          <div
            className="flex flex-col items-center justify-center"
            key={logo.id}
          >
            {logo.icon}
            <p className="text-center mt-4 caption-md md:body-lg">
              {logo.title}
            </p>
          </div>
        ))}
      </div>

      <BorderButton />

      <div className="max-w-[925px] flex flex-col">
        <h4 className="h6 md:h4 text-center">مزیت دریافت نمایندگی</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mt-6">
          {lis.map((li) => (
            <li className="flex gap-x-1 items-center" key={li.id}>
              <IconLi width="16" height="16" className="fill-transparent" />
              {li.title}
            </li>
          ))}
        </ul>
      </div>

      <BorderButton />

      <div className="max-w-[925px] w-full flex flex-col">
        <h4 className="h6 md:h4 text-center">دریافت مشاوره</h4>
        <form className="w-full gap-x-6 gap-y-3 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          <InputCustom
            type="text"
            classNameParent="h-10 w-full"
            placeholder="نام و نام خانوادگی"
            id="name"
          />
          <InputCustom
            type="text"
            classNameParent="h-10 w-full"
            placeholder="شماره تماس"
            id="phone"
          />
          <InputCustom
            type="text"
            classNameParent="h-10 w-full"
            placeholder="زمان ایدهآل"
            id="time"
          />
          <ClientButton />
        </form>
      </div>
    </div>
  );
}

export default page;
