'use client';
import React, { ReactNode, useRef, useState } from 'react';
import Portal from './Portal';
import IconMap from './IconMap';
import SwiperImagesModal from './swiper/SwiperImagesModal';

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
  removeShopingCart?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  images,
  title,
  desc,
  removeShopingCart,
}) => {
  if (!isOpen) return null;
  if (images !== undefined) {
    return (
      <Portal>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-background-1 rounded-sm sm:rounded-md shadow-lg  max-w-[800px] w-11/12 relative flex flex-col items-center overflow-hidden">
            <SwiperImagesModal images={images} onClose={onClose} />
          </div>
        </div>
      </Portal>
    );
  } else {
    return (
      <Portal>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div
            className={`bg-white dark:bg-background-1 rounded-sm shadow-lg  max-w-[800px] ${removeShopingCart == true ? '!w-[392px] h-56' : 'w-11/12'}  relative flex flex-col items-center overflow-hidden`}
          >
            <div
              className={` ${removeShopingCart == true ? 'bg-gray-1 h-16 items-center' : 'bg-gray-3 dark:bg-background-2 h-14 md:h-[86px]'} relative w-full flex justify-center items-center`}
            >
              <button
                onClick={onClose}
                className={`absolute ${removeShopingCart == true ? 'top-[0.8em]' : 'top-4 md:top-5 '} left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none`}
                aria-label="Close Modal"
              >
                <span
                  className={`flex ${removeShopingCart == true ? 'md:flex' : 'md:hidden'}`}
                >
                  <IconMap icon="closeIcon" />
                </span>
                <span
                  className={`${removeShopingCart == true ? 'hidden' : 'hidden md:flex'}`}
                >
                  <IconMap icon="closeIconLg" />
                </span>
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
