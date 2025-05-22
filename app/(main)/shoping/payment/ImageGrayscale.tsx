'use client';
import Image from 'next/image';
import React, { ComponentProps } from 'react';
import { useOrder } from '../ShopingProvider';

function ImageGrayscale({
  src,
  id,
}: {
  src: string;
  id: ComponentProps<'div'>['id'];
}) {
  const {order, updatePayment} = useOrder();
  return (
    <div
      id={id}
      className={`w-16 h-16 md:w-24 md:h-24 group flex justify-center items-center rounded border ${order.payment.type == 'online' && order.payment.banck == id ? 'border-primary shadow-bank-primary' : 'border-gray-4 dark:border-background-2'}`}
      onClick={() => updatePayment({type: 'online', banck: id as 'saman' | 'tejarat' | 'saderat'})}
    >
      <div
        className={`!w-3/4 !h-3/4 transition-all duration-500 filter grayscale ${order.payment.type == 'online' && order.payment.banck == id ? 'filter-none' : 'group-hover:filter-none'} overflow-hidden relative rounded-lg`}
      >
        <Image
          src={src}
          alt="Hover to colorize"
          fill
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default ImageGrayscale;
