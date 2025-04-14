'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import { toast } from 'sonner';

const Button = dynamic(()=> import('@components/shared/button/Button'))
function ClientButton() {
  return (
    <Button
      btn="fill"
      theme="Primary"
      className="h-10 w-[148px] button-lg mt-6 justify-self-center sm:col-span-2 md:col-span-3 mb-4"
      onClickCustom={() => toast.warning('این عمل در دسترس نیست.')}
      type='reset'
    >
      درخواست مشاوره
    </Button>
  );
}

export default ClientButton;
