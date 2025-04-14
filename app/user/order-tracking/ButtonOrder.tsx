'use client';
import { AgainSubmitOrderTrack, CancelOrderTrack } from '@/app/actions/orderTracking';
import dynamic from 'next/dynamic';
import React from 'react';
import { toast } from 'sonner';

const Button = dynamic(()=> import('@components/shared/button/Button'))
function ButtonOrder({
  order,
}: {
  order: {
    id: number;
    price: number;
    foods: {
      quantity: number;
      food: {
        order: number;
        name: string;
        image: string;
        price: number;
      };
    }[];
    discount: number;
    date: Date;
    sendMethod: {
      name: string;
      id: number;
    };
    status: {
      id: number;
      name: string;
    };
  };
}) {
  return (
    <Button
      btn="stroke"
      theme="Primary"
      className={`w-24 h-8 md:w-[123px] flex self-center md:self-end mt-4 caption-md ${order.status.name == 'current' ? 'border-red-600 text-red-600 hover:!border-red-800 hover:!text-red-800' : ''}`}
      onClickCustom={
        order.status.name == 'current'
          ? async () => {
              const response = await CancelOrderTrack(order.id);
              if (response.status == 200) {
                toast.success(response.message);
              } else {
                toast.error(response.message);
              }
            }
          : async() => {
            const response = await AgainSubmitOrderTrack(order.id);
            if (response.status == 201) {
              toast.success(response.message);
            } else {
              toast.error(response.message);
            }
            }
      }
    >
      {order.status.name == 'current' ? 'لغو سفارش' : 'سفارش مجدد'}
    </Button>
  );
}

export default ButtonOrder;
