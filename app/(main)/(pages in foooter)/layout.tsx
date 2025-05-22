'use client';
import SwiperMain from '@/components/shared/swiper/swiper';
import { usePathname } from 'next/navigation';
import React from 'react';
import Tab from '../(foods)/menu/Tab';


function Layout({ children }: { children: React.ReactElement }) {
  const pathName = usePathname();

  const arrayOfPages = [
    { id: 1, title: 'سوالات متداول از ترخینه', img: '/image/bannerFAQ.webp', imgMobile: '/image/bannerFAQMobile.webp', alt: '/FAQ' },
    { id: 2, title: 'قوانین ترخینه', img: '/image/bannerRuls.webp', imgMobile: '/image/bannerRulsMobile.webp', alt: '/ruls' },
    { id: 3, title: 'حریم شخصی کاربران', img: '/image/bannerPrivacy.webp', imgMobile: '/image/bannerPrivacyMobile.webp', alt: '/privacy' }
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

export default Layout;
