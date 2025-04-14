import { arraySlideMain } from '@/lib/dataPublic';
import dynamic from 'next/dynamic';
import React from 'react';

const Swiper = dynamic(()=> import('@components/shared/swiper/swiper'))

function layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Swiper slides={arraySlideMain} pagination showBtn/>
      {children}
    </>
  );
}

export default layout;
