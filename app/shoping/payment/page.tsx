import IconMap from '@/components/shared/IconMap';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import React from 'react';
import BoxOfMain from '../BoxOfMain';
import ButtonDisabeld from '../ButtonDisabeld';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';


function page() {
  return (
    <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
      <main className="w-full xl:w-1/2 h-full">
        <BoxOfMain icon="dicountShape" title="کد تخفیف">
          <>
            <input
              type="text"
              placeholder="کد تخفیف"
              className="w-full md:w-3/4 h-8 md:h-10 bg-transparent border border-gray-4 dark:border-background-2 outline-none rounded caption-md md:body-sm px-2"
            />
            <ButtonDisabeld />
          </>
        </BoxOfMain>

        <BoxOfMain icon="paymentMethod" title="روش پرداخت" className='mt-3 md:mt-6'>
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
                // onClick={() => setShowAddressBranch(false)}
              />
              <Label
                // onClick={() => setShowAddressBranch(false)}
                htmlFor="r1"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
              >
                <div>
                  <span>پرداخت اینترنتی</span>
                  <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </div>
                <IconMap icon="trukFast" />
              </Label>
            </div>

            <div
              className="flex items-center gap-2 mt-2 md:mt-0"
            >
              <RadioGroupItem
                value="inPerson"
                id="r2"
                // onClick={() => setShowAddressBranch(true)}
              />
              <Label
                // onClick={() => setShowAddressBranch(true)}
                htmlFor="r2"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
              >
                <div>
                  <span>پرداخت در محل</span>
                  <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                </div>

                <IconMap icon="shopingBag" />
              </Label>
            </div>
          </RadioGroup>
          </>
        </BoxOfMain>
      </main>
      <AsideFoodsForShopingCart linkBTN="" />
    </section>
  );
}

export default page;
