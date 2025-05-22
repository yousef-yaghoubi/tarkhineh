import SwiperMain from '@/components/shared/swiper/swiper';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import IconProfile from '@icons/profileIcon.svg';
import IconDiagram from '@icons/diagram.svg';
import IconHome from '@icons/home-wifi.svg';
import IconMenuBoard from '@icons/menu-board.svg';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { Metadata } from 'next';
const listOfIcons: { id: number; title: string; icon: ReactElement }[] = [
  {
    id: 1,
    title: 'پرسنلی مجرب و حرفه ای',
    icon: <IconProfile className="w-4 h-4 md:w-12 md:h-12" />,
  },
  {
    id: 2,
    title: 'کیفیت بالای غداها',
    icon: <IconDiagram className="w-4 h-4 md:w-12 md:h-12" />,
  },
  {
    id: 3,
    title: 'محیطی دلنشین و آرام',
    icon: <IconHome className="w-4 h-4 md:w-12 md:h-12" />,
  },
  {
    id: 4,
    title: 'منوی متنوع',
    icon: <IconMenuBoard className="w-4 h-4 md:w-12 md:h-12" />,
  },
];

export const metadata: Metadata = {
  title: 'درباره ما | آشنایی با داستان و ارزش‌های رستوران‌های ترخینه',
  description: 'با داستان شکل‌گیری، ارزش‌ها و مسیر رشد رستوران‌های زنجیره‌ای ترخینه آشنا شوید. کیفیت، اصالت و مهمان‌نوازی در ترخینه.',
  openGraph: {
    title: 'درباره ما | آشنایی با داستان و ارزش‌های رستوران‌های ترخینه',
    description: 'ترخینه با سال‌ها تجربه در ارائه غذاهای اصیل ایرانی، داستان موفقیت و تعهد خود به کیفیت را با شما به اشتراک می‌گذارد.',
    url: `${getBaseUrl()}/about`,
    images: [
      {
        url: `/logoGreenBig.webp`,
        width: 1200,
        height: 630,
        alt: 'درباره ما - رستوران‌های ترخینه',
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/about-us`,
  },
}
function page() {
  return (
    <div>
      <SwiperMain
        slides={[
          {
            id: 1,
            title: 'درباره ترخینه بیشتر بدانید!',
            alt: 'ترخینه',
            img: '/image/bannerAboutPage.webp',
            imgMobile: '/image/bannerAboutPageMobile.webp',
          },
        ]}
      />

      <div className="my-4 md:my-12 mx-5 md:mx-[108px]">
        <h3 className="h6 md:h4">درباره ما</h3>
        <div className="inline-block h-[27em] mt-1 w-full md:mt-6 caption-sm md:body-xl text-justify text-gray-7">
          <div className="w-1/2 relative h-[120px] md:h-[14em] lg:h-full float-left mr-4 md:mr-6">
            <Image
              src={'/image/aboutImg.webp'}
              className="rounded md:rounded-md"
              alt="درباره ما"
              fill
            />
          </div>
          رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این
          سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش
          برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب رضایت
          مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این
          زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با نوسانات
          قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه
          شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری
          جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را
          دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و
          آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان
          می‌باشند. چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی
          شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید
          آن روز که همه ایرانیان سالم و سلامت باشند.
        </div>
      </div>

      <div className="w-full h-20 md:h-44 bg-gray-3 dark:bg-background-2 flex justify-around items-center md:divide-x-2 md:divide-x-reverse divide-gray-4 dark:divide-background-1">
        {listOfIcons.map((detials) => (
          <div
            key={detials.id}
            className="h-[52px] w-fit md:w-1/4 md:h-[136px] flex flex-col justify-evenly items-center"
          >
            {detials.icon}
            <span className="text-gray-7 caption-sm md:body-lg">
              {detials.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
