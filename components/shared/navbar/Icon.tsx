'use client'
import Image from 'next/image';
import React from 'react';

interface Props {
  alt: string;
  img: string;
  imgActive: string;
  isActive: boolean;
  quantity: number;
  className: string
}
function Icon({ alt, img, imgActive, isActive, quantity, className }: Props) {
  return (
    <div
      className={`w-6 h-6 md:w-10 md:h-10 rounded ${
        isActive ? 'bg-primary' : 'bg-tint-1'
      } justify-center flex items-center relative ${className}`}
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
    </div>
  );
}

export default Icon;
