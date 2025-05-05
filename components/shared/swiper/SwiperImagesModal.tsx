'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import IconArrowLeftBack from '@icons/arrowLeftBack.svg';
import IconArrowRightBack from '@icons/arrowRightBack.svg';
import IconCloseBack from '@icons/CloseIconDark.svg';
import clsx from 'clsx';
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

function SwiperImagesModal({
  images,
  onClose,
}: {
  images: Images;
  onClose?: () => void;
}) {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const baseClassBTN = 'absolute bottom-[1.1em] w-12 flex justify-center items-center h-[74px] z-20 text-white bg-black/0 from-black/75 to-transparent disabled:hidden sm:hidden'
  
  return (
    <>
      <button
        ref={prevRef}
        className={clsx(baseClassBTN, "custom-prev bg-gradient-to-l right-0")}
      >
        <IconArrowRightBack className=" w-6 h-6" />
      </button>
      <button
        ref={nextRef}
        className={clsx(baseClassBTN, "custom-next bg-gradient-to-r left-0")}
      >
        <IconArrowLeftBack className="w-6 h-6" />
      </button>

      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 w-full h-[441px] relative"
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== 'boolean'
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <button
          onClick={onClose ? onClose : () => router.back()}
          className="absolute justify-center items-center flex top-4 z-50 left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:top-5 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none bg-gray-8 md:bg-transparent rounded-full"
          aria-label="Close Modal"
        >
          <IconCloseBack width="24" height="24" />
        </button>

        {images?.images.map((img) => (
          <SwiperSlide key={img.id} className="w-full h-full">
            <Image src={img.src} alt={img.src} fill className="w-full h-full" />
            <div className="w-full absolute bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
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
