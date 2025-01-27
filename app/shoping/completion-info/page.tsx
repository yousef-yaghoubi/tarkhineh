import React from 'react';
import ProgressShoping from '../shopingCart/ProgressShoping';
import RenderCardFoods from '../shopingCart/RenderCardFoods';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import IconMap from '@/components/shared/IconMap';
import RenderAddresses from './RenderAddresses';
import TextAreaInfo from './TextAreaInfo';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';

function page() {
  return (
    <div className="flex flex-col items-center">
      <ProgressShoping />

      <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
        <main className="w-full xl:w-1/2 h-full">
          <div className="w-full h-[133px] rounded-md border flex flex-col md:flex-row md:justify-between md:items-center border-gray-4 px-4 py-2">
            <h3 className="py-2 border-b md:border-0 border-gray-4 flex gap-x-1 items-center md:w-1/3">
              <IconMap icon="truk" />
              روش تحویل سفارش
            </h3>

            <RadioGroup
              defaultValue="default"
              dir="rtl"
              className="mt-4 md:mt-0 md:w-2/3 flex flex-col md:flex-row md:justify-around md:items-center"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="default" id="r1" />
                <Label
                  htmlFor="r1"
                  className="flex gap-1 text-gray-7 items-center caption-md md:body-sm"
                >
                  <div>
                    <span>ارسال توسط پیک</span>
                    <span className="hidden md:flex caption-sm">
                      توسط پیک رستوران ارسال شود.
                    </span>
                  </div>
                  <IconMap icon="trukFast" />
                </Label>
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label
                  htmlFor="r2"
                  className="flex gap-1 text-gray-7 items-center caption-md md:body-sm"
                >
                  <div>
                    <span>تحویل حضوری</span>
                    <span className="hidden md:flex caption-sm">
                      توسط پیک رستوران ارسال شود.
                    </span>
                  </div>

                  <IconMap icon="shopingBag" />
                </Label>
              </div>
            </RadioGroup>
          </div>
          <RenderAddresses />

          <TextAreaInfo />
        </main>

        <AsideFoodsForShopingCart hiddenSection={[1,2]} />
      </section>
    </div>
  );
}

export default page;
