import SwiperMain from '@components/shared/swiper/swiper';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import React from 'react';
import IconLocation from '@icons/location.svg';
import IconCall from '@icons/call-calling.svg';
import IconClock from '@icons/clock.svg';

interface Details {
  address: string;
  images: {
    images: {
      id: number;
      alt: string;
      img: string;
      imgMobile: string;
    }[];
  };
  phones: {
    phones: string[];
  };
  durition: string;
}

function SwiperDeatail({ address, images, phones, durition }: Details) {
  return (
    <div className="w-full flex flex-col items-center relative h-[14.2em] md:h-[27.2em]">
      <SwiperMain slides={images?.images} />
      <div className="w-11/12 max-w-80 h-[60px] md:max-w-[810px] md:h-[130px] md:top-[303px] top-[166px] rounded-sm border md:border-[3px] border-primary bg-white absolute z-20 p-2 grid grid-cols-2 md:grid-cols-3 dark:bg-background-2 dark:text-gray-4">
        
        <div className="flex col-span-2 md:col-span-1 md:flex-col items-center">
          <IconLocation className="ml-1 w-4 h-4 md:!w-8 md:!h-8 md:mt-4" />

          <span className="caption-sm md:body-md text-center md:mt-2">
            {address}
          </span>
        </div>

        <div className="flex md:col-span-1 md:flex-col items-center">
          <IconCall className="ml-1 w-4 h-4 md:!w-8 md:!h-8 md:mt-4" />
          {phones?.phones.map((num, i) => (
            <span
              className={`caption-sm md:body-md text-center md:mt-2 ${i == 1 ? 'hidden md:flex' : 'flex'}`}
              key={num}
            >
              {convertToPersianNumbers(num)}
            </span>
          ))}
        </div>

        <div className="flex md:col-span-1 md:flex-col items-center -mr-12">
          <IconClock className="ml-1 w-4 h-4 md:!w-8 md:!h-8 md:mt-4" />
          <span className="caption-sm md:body-md text-center md:mt-2">
            {convertToPersianNumbers(durition)}
          </span>
        </div>

      </div>
    </div>
  );
}

export default SwiperDeatail;
