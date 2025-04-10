import CardTarkhineGardi from '@/components/shared/card/CardTarkhineGardi';
import SwiperMain from '@/components/shared/swiper/swiper';
import { branchs } from '@/lib/dataPublic';
import React from 'react';

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
        {branchs.map((branch) => (
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
