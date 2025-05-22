'use client';
import { Label } from '@/components/ui/label';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import React, { useState } from 'react';
import RenderAddresses from '../../../../components/shared/address/RenderAddresses';
import TextAreaInfo from './TextAreaInfo';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import { AddressUserProps } from '@/types';
import BoxOfMain from '../../../../components/shared/shopingCart/BoxOfMain';
import { useOrder } from '../ShopingProvider';
import IconTrukFast from '@icons/truck-fast.svg';
import IconShopingBag from '@icons/shopping-bag.svg';
import IconTruk from '@icons/truck.svg';

function SectionPage({
  userAddress,
}: {
  userAddress: AddressUserProps[] | undefined;
}) {
  const [showAddressBranch, setShowAddressBranch] = useState(false);
  const { order, updateDelivery } = useOrder();


  return (
    <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
      <main className="w-full xl:w-1/2 h-full">
        <BoxOfMain
          className=" mb-3 md:mb-6"
          title={
            <span className="flex items-center">
              <IconTruk className="w-4 h-4 md:w-6 md:h-6" /> روش تحویل سفارش
            </span>
          }
        >
          <RadioGroup
            defaultValue="delivery"
            dir="rtl"
            className="mt-4 md:mt-0 w-full flex flex-col md:flex-row md:justify-around md:items-center"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="delivery"
                id="r1"
                onClick={() => {
                  setShowAddressBranch(false);
                  updateDelivery({ type: 'delivery', address: '' });
                }}
              />
              <Label
                onClick={() => {
                  setShowAddressBranch(false);
                  updateDelivery({ type: 'delivery', address: '' });
                }}
                htmlFor="r1"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
              >
                <div>
                  <span>ارسال توسط پیک</span>
                  <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </div>
                <IconTrukFast className="w-4 md:w-6 h-4 md:h-6 fill-[#717171] dark:fill-[#cbcbcb]" />
              </Label>
            </div>

            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <RadioGroupItem
                value="inPerson"
                id="r2"
                onClick={() => {
                  setShowAddressBranch(true);
                  updateDelivery({ type: 'pickup', branch: 'ekbatan' });
                }}
              />
              <Label
                onClick={() => {
                  setShowAddressBranch(true);
                  updateDelivery({ type: 'pickup', branch: 'ekbatan' });
                }}
                htmlFor="r2"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
              >
                <div>
                  <span>تحویل حضوری</span>
                  <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </div>

                <IconShopingBag className="w-4 md:w-6 h-4 md:h-6 fill-[#717171] dark:fill-[#cbcbcb]" />
              </Label>
            </div>
          </RadioGroup>
        </BoxOfMain>

        <RenderAddresses
          showAddressBranch={showAddressBranch}
          addressesUser={userAddress}
        />

        <TextAreaInfo
          id={'description-address'}
          showIcon
          placeholder={'توضیحات سفارش (اختیاری)'}
          className={'w-full h-36 mt-3 md:mt-6 px-3 py-4 md:p-4 rounded-md'}
        />
      </main>

      <AsideFoodsForShopingCart
        hiddenSection={[]}
        linkBTN="/shoping/payment"
        BtnDisabeld={
          order.delivery.type == 'delivery' && order.delivery.address == ''
            ? true
            : false
        }
      />
    </section>
  );
}

export default SectionPage;
