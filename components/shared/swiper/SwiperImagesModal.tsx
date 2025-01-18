'use client';
import React, { useRef, useState } from 'react';
import IconMap from '../IconMap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

SwiperCore.use([Navigation]);
interface Images {
  id: number;
  desc: string;
  title: string;
  images: {
    id: number;
    src: string;
  }[];
}

function SwiperImagesModal({ images, onClose }: {images: Images, onClose?: ()=> void}) {
    const router = useRouter()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const prevRef = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const nextRef = useRef(null);
  return (
    <>
      <button
        ref={prevRef}
        className="custom-prev absolute right-0 bottom-[1.1em] w-12 flex justify-center items-center h-[74px] z-20 text-white bg-black/0 bg-gradient-to-l from-black/75 to-transparent disabled:hidden sm:hidden"
      >
        <IconMap icon="arrowRightBack" />
      </button>
      <button
        ref={nextRef}
        className="custom-next absolute left-0 bottom-[1.1em] w-12 flex justify-center items-center h-[74px] z-20 text-white bg-black/0 bg-gradient-to-r from-black/75 to-transparent disabled:hidden sm:hidden"
      >
        <IconMap icon="arrowLeftBack" />
      </button>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 w-full h-[441px] relative"
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <button
          onClick={onClose ? onClose : ()=> router.back()}
          className="absolute top-4 z-50 left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:top-5 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none bg-gray-8 md:bg-transparent rounded-full"
          aria-label="Close Modal"
        >
          <IconMap icon="closeIconDark" />
        </button>

        {images?.images.map((img) => (
          <SwiperSlide key={img.id} className="w-full h-full">
            <Image src={img.src} alt={img.src} fill className="w-full h-full" />
            <div className="w-full absolute bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper !absolute w-auto h-24 bottom-2 items-center"
        centeredSlides={window.innerWidth > 400 ? false : true}
      >
        <div>
          {images?.images.map((img) => (
            <SwiperSlide
              key={img.id}
              className="!w-[64px] !h-[64px] rounded-sm mx-4 overflow-hidden"
            >
              <div className="w-full h-full bg-black/25 absolute z-10 transparentDiv"></div>
              <Image src={img.src} alt={img.src} fill />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}

export default SwiperImagesModal;
