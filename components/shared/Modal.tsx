'use client';
import React, { ReactNode} from 'react';
import Portal from './Portal';
import SwiperImagesModal from './swiper/SwiperImagesModal';
import IconClose from "@icons/CloseIcon.svg"
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
  state?: 'removeShopingCart' | 'showMap' 
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  images,
  title,
  desc,
  state,
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
            className={`bg-white dark:bg-background-1 rounded-sm shadow-lg w-11/12 ${state && state == 'removeShopingCart' ? '!max-w-[392px] h-56' : state && state == 'showMap' ? 'max-w-[600px] !h-[90%] max-h-[596px]' : 'max-w-[800px]'}  relative flex flex-col items-center overflow-hidden`}
          >
            <div
              className={` ${state && state == 'removeShopingCart' ? 'bg-gray-1 h-16 items-center' : 'bg-gray-3 dark:bg-background-2 h-14 md:h-[86px]'} relative w-full flex justify-center items-center`}
            >
              <button
                onClick={onClose}
                className={`absolute ${state && state == 'removeShopingCart' ? 'top-[0.8em]' : 'top-4 md:top-5 '} left-4 w-6 h-6 sm:h-10 sm:w-10 sm:top-[0.4em] sm:left-[0.4em] md:w-10 md:left-5 text-gray-600 hover:text-gray-800 focus:outline-none`}
                aria-label="Close Modal"
              >
                <span>
                  <IconClose className="w-6 h-6 md:w-10 md:h-10 fill-gray-7"/>
                </span>
              </button>
              {title}
            </div>
            
            <div className={`${state && state == 'showMap' ? 'inset-0 h-full' : 'mt-10 mb-12'} flex flex-col justify-center items-center w-full`}>
              <p className={`caption-md md:body-md ${desc?.length ? 'mb-3' : 'inset-0'}`}>{desc}</p>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
};

export default Modal;
