'use client'
import IconMap from '@/components/shared/IconMap';
import Modal from '@/components/shared/Modal';
import { useCart } from '@/components/shared/shopingCardProvider';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

function ProgressShoping() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpenModal, setIsOpenModel] = useState(false);
  const {clearCart} = useCart()
  
  return (
    <>
    <div className="w-11/12 max-w-[731px] h-10 my-10 flex justify-center">
      <div className="w-full h-full hidden md:flex justify-between items-center">
        <p
          className={`w-36 ${pathname == '/shoping/shopingCart' ? 'h6' : 'body-sm text-gray-4'} text-primary flex gap-2 justify-center items-center`}
        >
          {pathname == '/shoping/shopingCart' ? (
            <IconMap icon="iconShopingCardActiveLg" />
          ) : (
            <IconMap icon="iconShopingCard" />
          )}
          سبد خرید
        </p>
        <div className="w-4/12 flex flex-row">
          <div className="w-1/2 border-b-2 border-primary border-dashed h-1"></div>
          <div
            className={`w-1/2 border-b-2 ${pathname == '/shoping/completion-info' || pathname == '/shoping/payment' ? 'border-b-primary' : 'border-gray-4'} border-dashed h-1`}
          ></div>
        </div>
        <p
          className={`w-48 ${pathname == '/shoping/completion-info' ? 'h6 text-primary' : pathname == '/shoping/payment' ? 'body-sm text-primary' : 'body-sm text-gray-4'} flex gap-2 justify-center items-center`}
        >
          {pathname == '/shoping/completion-info' ? (
            <IconMap icon="tickSquareActiveLg" />
          ) : pathname == '/shoping/payment' ? (
            <IconMap icon="tickSquareActive" />
          ) : (
            <IconMap icon="tick-square" />
          )}
          تکمیل اطلاعات
        </p>
        <div className="w-4/12 flex flex-row">
          <div
            className={`w-1/2 border-b-2 ${pathname == '/shoping/completion-info' || pathname == '/shoping/payment' ? 'border-b-primary' : 'border-gray-4'} border-dashed h-1`}
          ></div>
          <div
            className={`w-1/2 border-b-2 ${pathname == '/shoping/payment' ? 'border-b-primary' : 'border-gray-4'} border-dashed h-1`}
          ></div>
        </div>
        <p
          className={`w-32 ${pathname == '/shoping/payment' ? 'h6 text-primary' : 'body-sm text-gray-4'} flex gap-2 justify-center items-center`}
        >
          {pathname == '/shoping/payment' ? (
            <IconMap icon="walletActiveLg" />
          ) : (
            <IconMap icon="wallet" />
          )}
          پرداخت
        </p>
      </div>
      <div className="w-11/12 h-full md:hidden flex justify-between items-center">
        <span onClick={()=> router.back()} className='cursor-pointer'>
          <IconMap icon="arrow-right-white" />
        </span>
        <span>
          {pathname == '/shoping/shopingCart' ? 'سبد خرید' : pathname == '/shoping/completion-info' ? 'تکمیل اطلاعات' : 'پرداخت'}
        </span>
        <span className='cursor-pointer' onClick={()=> setIsOpenModel(true)}>
          <IconMap icon="removeIcon" />
        </span>
      </div>
    </div>

    <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModel(false)}
        title={<h6 className="h7">حذف محصولات</h6>}
        desc="همه محصولات سبد خرید شما حذف شود؟"
        removeShopingCart
      >
        <div className="flex w-64 justify-between">
          <button
            className="w-[117px] h-10 rounded border border-primary text-primary"
            onClick={() => setIsOpenModel(false)}
          >
            بازگشت
          </button>
          <button
            className="w-[117px] h-10 rounded bg-error-extralight text-error"
            onClick={() => {
              clearCart(), setIsOpenModel(false);
              toast.success('سبد خرید شما پاک شد.');
            }}
          >
            حذف
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ProgressShoping;
