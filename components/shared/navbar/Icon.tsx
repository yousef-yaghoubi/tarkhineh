'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '../Modal';
import SearchBox from '../searchBox/SearchBox';
import { useRouter } from 'next/navigation';

interface Props {
  alt: string;
  img: string;
  imgActive: string;
  isActive: boolean;
  quantity: number;
  className: string;
}
function Icon({ alt, img, imgActive, isActive, quantity, className }: Props) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className={`w-6 h-6 md:w-10 md:h-10 rounded ${
          isActive ? 'bg-primary' : 'bg-tint-1'
        } justify-center flex items-center relative ${className}`}
        onClick={() => {
          alt == 'profile' && router.push('/login');
          alt == 'search' && openModal();
        }}
      >
        {quantity != 0 && (
          <div
            className={`absolute -top-1.5 -right-1 ${
              isActive ? 'bg-withe' : 'bg-tint-6'
            } rounded-full w-4 h-4 text-xs flex justify-center items-center ${
              isActive ? 'text-primary' : 'text-white'
            }`}
          >
            {quantity}
          </div>
        )}
        <div className="w-6 h-6 flex justify-center items-center">
          <Image
            src={isActive ? imgActive : img}
            alt={alt}
            width={window.innerWidth < 770 ? 18 : 24}
            height={window.innerWidth < 770 ? 18 : 24}
          />
        </div>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={<h3 className="caption-lg md:h7">جستجو</h3>}
        desc="لطفا متن خود را تایپ و سپس دکمه Enter را بزنید."
      >
        <SearchBox classes="w-[90%] max-w-[409px]" />
      </Modal>
    </>
  );
}

export default Icon;
