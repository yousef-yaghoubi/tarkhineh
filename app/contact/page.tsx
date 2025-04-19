import CardTarkhineGardi from '@/components/shared/card/CardTarkhineGardi';
import SwiperMain from '@/components/shared/swiper/swiper';
import { branches } from '@/lib/dataPublic';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { Metadata } from 'next';
import React from 'react';




export const metadata: Metadata = {
  title: 'تماس با ما | ارتباط با رستوران‌های زنجیره‌ای ترخینه',
  description: 'از طریق فرم تماس یا اطلاعات تماس موجود، با تیم ترخینه در ارتباط باشید. ما همیشه آماده پاسخگویی به شما هستیم.',
  openGraph: {
    title: 'تماس با ما | ارتباط با رستوران‌های زنجیره‌ای ترخینه',
    description: 'سوال یا پیشنهادی دارید؟ از طریق فرم تماس یا شماره‌های تماس، با تیم پشتیبانی ترخینه در ارتباط باشید.',
    url: `${getBaseUrl()}/contact`,
    images: [
      {
        url: `/logoGreenBig.png`,
        width: 1200,
        height: 630,
        alt: 'تماس با ما - رستوران‌های ترخینه',
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/contact`,
  },
}

function page() {
  return (
    <div>
      <SwiperMain
        slides={[
          {
            id: 1,
            alt: 'contact to tarkhine',
            img: '/image/bannerContact.jpg',
            imgMobile: '/image/bannerContactMobile.jpg',
            title: 'با ترخینه در تماس باشید.',
          },
        ]}
      />

      <div className='w-full flex flex-col items-center my-6 gap-y-7'>
        {branches.map((branch) => (
          <CardTarkhineGardi
            key={branch.id}
            desc={branch.desc}
            id={branch.id}
            img={branch.images[0].src}
            title={branch.title}
            hrefBTN={branch.nickName}
            showType="contactPage"
          />
        ))}
      </div>
    </div>
  );
}

export default page;
