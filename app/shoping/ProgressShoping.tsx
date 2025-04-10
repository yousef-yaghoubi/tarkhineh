'use client'
import Modal from '@/components/shared/Modal';
import { useCart } from '@/providers/shopingCardProvider';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import IconShopingCard from "@icons/shopping-icon.svg"
import IconTickSquare from "@icons/tick-square.svg"
import IconWallet from "@icons/wallet-2.svg"
import IconArrowRight from "@icons/arrow-right.svg"
import IconRemove from "@icons/remove.svg"
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
            <IconShopingCard width="32" height="32"/>
          ) : (
            <IconShopingCard width="24" height="24"/>
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
            <IconTickSquare width="32" height="32" className="fill-[#417F56]"/>
          ) : pathname == '/shoping/payment' ? (
            <IconTickSquare width="24" height="24" className="fill-[#417F56]"/>
          ) : (
            <IconTickSquare width="24" heaight="24"/>
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
            <IconWallet width="32" height="32" className="fill-[#417F56]"/>
          ) : (
            <IconWallet width="24" height="24"/>
          )}
          پرداخت
        </p>
      </div>
      <div className="w-11/12 h-full md:hidden flex justify-between items-center">
        <span onClick={()=> router.back()} className='cursor-pointer'>
          <IconArrowRight width="24" height="24" className="fill-black dark:fill-white"/>
        </span>
        <span>
          {pathname == '/shoping/shopingCart' ? 'سبد خرید' : pathname == '/shoping/completion-info' ? 'تکمیل اطلاعات' : 'پرداخت'}
        </span>
        <span className='cursor-pointer' onClick={()=> setIsOpenModel(true)}>
          <IconRemove width="24" height="24" className="fill-black dark:fill-white"/>
        </span>
      </div>
    </div>

    <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModel(false)}
        title={<h6 className="h7">حذف محصولات</h6>}
        desc="همه محصولات سبد خرید شما حذف شود؟"
        state='removeShopingCart'
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
