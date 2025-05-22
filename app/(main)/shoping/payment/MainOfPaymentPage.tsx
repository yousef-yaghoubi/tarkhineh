'use client';
import React, { useState } from 'react';
import BoxOfMain from '@/components/shared/shopingCart/BoxOfMain';
import ButtonDisabeld from '../ButtonDisabeld';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import ImageGrayscale from './ImageGrayscale';
import { useOrder } from '../ShopingProvider';
import IconPaymentPos from '@icons/card-pos.svg'
import IconWallet from '@icons/wallet-2.svg'
import IconDiscountShape from "@icons/discount-shape.svg"
import IconCardBank from "@icons/card.svg"
import IconPaymentMethod from "@icons/payment-method.svg"
import IconWarning from "@icons/warning-2.svg"

function MainOfPaymentPage() {
  const [sendMethodOnline, setSendMethodOnline] = useState(true);
  const {updatePayment} = useOrder()

  return (
    <main className="w-full xl:w-1/2 h-full">
      <BoxOfMain title={<span className='flex items-center'><IconDiscountShape className="fill-[#353535] dark:fill-white w-4 h-4 md:w-6 md:h-6 ml-1"/> کد تخفیف </span>}>
        <>
          <input
            type="text"
            placeholder="کد تخفیف"
            className="w-full md:w-3/4 h-8 md:h-10 bg-transparent border border-gray-4 dark:border-background-2 outline-none rounded caption-md md:body-sm px-2"
          />
          <ButtonDisabeld />
        </>
      </BoxOfMain>

      <BoxOfMain
        title={<span className='flex items-center'><IconPaymentMethod className="fill-[#353535] dark:fill-white w-4 h-4 md:w-6 md:h-6 ml-1"/>روش پرداخت</span>}
        className="mt-3 md:mt-6"
      >
        <>
          <RadioGroup
            defaultValue="online"
            dir="rtl"
            className="mt-4 md:mt-0 w-full flex flex-col md:flex-row md:justify-around md:items-center"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="online"
                id="r1"
                onClick={() => {
                  setSendMethodOnline(true)
                  updatePayment({type: 'online', banck: 'saman'})
                }}
              />
              <Label
                onClick={() => {
                  setSendMethodOnline(true)
                  updatePayment({type: 'online', banck: 'saman'})
                }}
                htmlFor="r1"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
              >
                <div>
                  <span>پرداخت اینترنتی</span>
                  <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </div>
                <IconPaymentPos className="w-4 h-4 md:w-6 md:h-6 fill-[#717171] dark:fill-[#cbcbcb]"/>

              </Label>
            </div>

            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <RadioGroupItem
                value="cash_on_delivery"
                id="r2"
                onClick={() => {
                  setSendMethodOnline(false)
                  updatePayment({type: 'cash_on_delivery'})
                }}
              />
              <Label
                onClick={() => {
                  setSendMethodOnline(false)
                  updatePayment({type: 'cash_on_delivery'})
                }}
                htmlFor="r2"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
              >
                <div>
                  <span>پرداخت در محل</span>
                  <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </div>
                <IconWallet className="w-4 h-4 md:w-6 md:h-6 fill-[#717171] dark:fill-[#cbcbcb]"/>
              </Label>
            </div>
          </RadioGroup>
        </>
      </BoxOfMain>

      {sendMethodOnline ? (
        <BoxOfMain
          title={<span className='flex items-center'><IconCardBank className="w-4 h-4 md:w-6 md:h-6 ml-1"/> درگاه پرداخت</span>}
          className="mt-3 md:mt-6 !h-48 md:!items-start"
        >
          <div className="w-full flex flex-col mt-4 md:mt-6 h-full">
            <div className="w-full flex justify-around">
              <ImageGrayscale
                src="/image/tejaratBank.webp"
                id="tejarat"
              />
              <ImageGrayscale
                src="/image/saderatBank.webp"
                id="saderat"
              />
              <ImageGrayscale
                src="/image/samanBank.webp"
                id="saman"
              />
            </div>
            <p className="flex flex-col items-center mt-2 md:mt-1">
              <span className="caption-sm md:caption-md text-gray-7">
                پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
              </span>
              <span className="caption-sm text-gray-7">
                (لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)
              </span>
            </p>
          </div>
        </BoxOfMain>
      ) : (
        <BoxOfMain title={<span className='flex items-center'><IconWarning className="fill-[#353535] dark:fill-white w-4 h-4 md:w-6 md:h-6 ml-1"/>قابل توجه</span>} className="mt-3 md:mt-6 bg-gray-1 dark:bg-background-2">
            <p className='caption-sm text-gray-7'>
            هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.
            </p>
        </BoxOfMain>
      )}
    </main>
  );
}

export default MainOfPaymentPage;
