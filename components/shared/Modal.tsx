'use client';
import React, { ReactNode, useRef, useState } from 'react';
import Portal from './Portal';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation]);
interface ImgArray {
  id: number;
  src: string;
}
interface Images {
  id: number;
  desc: string;
  title: string;
  images: ImgArray[];
}
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  images?: Images;
  title?: React.ReactElement;
  desc?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  images,
  title,
  desc,
}) => {
  if (!isOpen) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const prevRef = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const nextRef = useRef(null);
  if (images != undefined || null) {
    return (
      <Portal>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-background-1 rounded-sm sm:rounded-md shadow-lg  max-w-[800px] w-11/12 relative flex flex-col items-center overflow-hidden">
            <button
              ref={prevRef}
              className="custom-prev absolute right-0 bottom-[1.1em] w-12 flex justify-center items-center h-[74px] z-20 text-white bg-black/0 bg-gradient-to-l from-black/75 to-transparent disabled:hidden sm:hidden"
            >
              <Image
                src="/icons/arrowRightBack.png"
                alt="prev"
                width={24}
                height={24}
              />
            </button>
            <button
              ref={nextRef}
              className="custom-next absolute left-0 bottom-[1.1em] w-12 flex justify-center items-center h-[74px] z-20 text-white bg-black/0 bg-gradient-to-r from-black/75 to-transparent disabled:hidden sm:hidden"
            >
              <Image
                src="/icons/arrowLeftBack.png"
                alt="next"
                width={24}
                height={24}
              />
            </button>
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiper2 w-full h-[441px] relative"
              onInit={(swiper) => {
                // Assign navigation buttons on initialization
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 z-50 left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:top-5 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none bg-gray-8 md:bg-transparent rounded-full"
                aria-label="Close Modal"
              >
                <Image
                  src={'/icons/CloseIconDark.png'}
                  width={40}
                  height={40}
                  alt="close"
                />
              </button>

              {images?.images.map((img) => (
                <SwiperSlide key={img.id} className="w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.src}
                    fill
                    className="w-full h-full"
                  />
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
          </div>
        </div>
      </Portal>
    );
  } else {
    return (
      <Portal>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-background-1 rounded-sm shadow-lg  max-w-[800px] w-11/12 relative flex flex-col items-center overflow-hidden">
            <div className="bg-gray-4 dark:bg-background-2 relative w-full h-14 md:h-[86px] flex justify-center items-center">
              <button
                onClick={onClose}
                className="absolute top-4 left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:top-5 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none"
                aria-label="Close Modal"
              >
                <Image
                  src={'/icons/CloseIcon.png'}
                  width={40}
                  height={40}
                  alt="close"
                />
              </button>

              {title}
            </div>
            <div className="mt-10 mb-12 flex flex-col justify-center items-center w-full">
              <p className="caption-md md:body-md mb-3">{desc}</p>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
};

export default Modal;
