'use client';
import React from 'react'
import { toast } from 'sonner';

const ButtonDisabeld = () => {
    return (
      <button
        className="w-[51px] h-8 md:w-24 md:h-10 caption-md md:button-lg bg-gray-4 text-gray-3 dark:bg-gray-8 dark:text-gray-6 rounded"
        onClick={() => toast.warning('این عمل در دسترس نیست.')}
      >
        ثبت کد
      </button>
    );
  };

export default ButtonDisabeld