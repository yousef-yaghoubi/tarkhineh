'use client';
import SwiperMain from '@/components/shared/swiper/swiper';
import { usePathname } from 'next/navigation';
import React from 'react';
import Tab from '../(foods)/menu/Tab';
import { url } from 'inspector';


function layout({ children }: { children: React.ReactElement }) {
  const pathName = usePathname();

  const arrayOfPages = [
    { id: 1, title: 'سوالات متداول از ترخینه', img: '/image/bannerFAQ.jpg', imgMobile: '/image/bannerFAQMobile.jpg', alt: '/FAQ' },
    { id: 2, title: 'قوانین ترخینه', img: '/image/bannerRuls.jpg', imgMobile: '/image/bannerRulsMobile.jpg', alt: '/ruls' },
    { id: 3, title: 'حریم شخصی کاربران', img: '/image/bannerPrivacy.jpg', imgMobile: '/image/bannerPrivacyMobile.jpg', alt: '/privacy' }
  ]

  const namesForTab =[
    {id: 1, label: 'سوالات متداول', url: '/FAQ'},
    {id: 2, label: 'قوانین', url: '/ruls'},
    {id: 3, label: 'حریم شخصی', url: '/privacy'},
  ]

  return (
    <>
      <SwiperMain slides={arrayOfPages.filter((page) => page.alt == pathName)} />
      <Tab objectLinks={namesForTab} />
      {children}
    </>
  );
}

export default layout;
