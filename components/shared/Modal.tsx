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
import IconMap from './IconMap';
import SwiperImagesModal from './swiper/SwiperImagesModal';

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
  if (images !== undefined) {
    return (
      <Portal>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-background-1 rounded-sm sm:rounded-md shadow-lg  max-w-[800px] w-11/12 relative flex flex-col items-center overflow-hidden">
            <SwiperImagesModal images={images} onClose={onClose}/>
          </div>
        </div>
      </Portal>
    );
  } else {
    return (
      <Portal>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-background-1 rounded-sm shadow-lg  max-w-[800px] w-11/12 relative flex flex-col items-center overflow-hidden">
            <div className="bg-gray-3 dark:bg-background-2 relative w-full h-14 md:h-[86px] flex justify-center items-center">
              <button
                onClick={onClose}
                className="absolute top-4 left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:top-5 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none"
                aria-label="Close Modal"
              >
                <IconMap icon='closeIcon'/>
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
