import Badge from '@/components/shared/badge/Badge';
import BoxOfMain from '@/components/shared/shopingCart/BoxOfMain';
import { NavBadgeOrderTracking } from '@/lib/dataPublic';
import React from 'react';
import IconCaledar from '@icons/calendar.svg';
import IconLocation from '@icons/location.svg';
import IconClock from '@icons/clock.svg';
import IconHome from '@icons/home.svg';
import IconTrukFast from '@icons/truck-fast.svg';
import IconTickCircle from '@icons/tick-circle.svg';
import IconWallet from '@icons/wallet-2.svg';
import { GetOrderTracking } from '@/app/actions/orderTracking';

async function page() {
  const orderTrack = await GetOrderTracking()
  console.log(orderTrack.order)
  return (
    <BoxOfMain forUserPage title="سفارشات">
      <div className="flex flex-col w-full gap-4">
        <div className="flex w-fit gap-2 mb-4">
          {NavBadgeOrderTracking.map((badge) => (
            <Badge
              title={badge.title}
              url={badge.url}
              key={badge.id}
              forOrderTracking
            />
          ))}
        </div>
        <div className="w-full h-[354px] border border-gray-4 rounded px-3 pt-2 pb-4 md:p-6 md:pt-4 relative">
          <div>
            <h3 className="caption-md md:body-sm md:mt-2 text-gray-6">
              شعبه اکباتان
            </h3>
            <span className="flex caption-sm md:caption-md items-center text-gray-7">
              <IconCaledar className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />{' '}
              &nbsp;
              <span>شنبه 8 مرداد، ساعت 18:45</span>&nbsp; &nbsp;
              <span className='hidden lg:flex'>مبلغ: 228،500 تومان</span>&nbsp; &nbsp;
              <span className='hidden lg:flex'>تخفیف: 28،500 تومان</span>
            </span>
            <span className="flex caption-sm md:caption-md items-center text-gray-7">
              <IconLocation className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />
              &nbsp;
              <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
            </span>
            <span className="flex caption-sm md:caption-md lg:hidden items-center text-gray-7">
              <IconWallet className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />
              &nbsp;
              <span className='flex'>مبلغ: 228،500 تومان</span>&nbsp; &nbsp;
              <span className='flex'>تخفیف: 28،500 تومان</span>
            </span>
          </div>

          <div className="w-fit h-fit flex flex-col absolute top-2 left-3 md:top-4 md:left-6">
            <div className="flex gap-2">
              <div className="w-fit px-3 py-[2px] caption-sm md:caption-md  bg-gray-3 text-gray-8 rounded flex items-center justify-center">
                ارسال توسط پیک
              </div>
              <div className="w-fit px-3 py-[2px] caption-sm md:caption-md  bg-warning-extralight text-warning rounded flex items-center justify-center">
                جاری
              </div>
            </div>
            <span className="flex items-center gap-1 justify-end mt-3 md:mt-4">
              <IconClock className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />
              <span className="caption-sm md:caption-md text-gray-7">
                تحویل تا <span className="text-primary">۱۸:۴۵</span>
              </span>
            </span>
          </div>

          <div className="w-full h-fit mt-4 md:mt-3 flex justify-between items-center">
            <p
              className={`min-w-20 lg:min-w-32 xl:min-w-40 caption-md xl:h6 text-primary flex gap-2 justify-center items-center`}
            >
              <IconHome className="w-6 md:w-8 h-6 md:h-8" />
              <span className="hidden lg:flex">در حال آماده‌سازی</span>
            </p>

            <div className="w-full flex flex-row">
              <div className="w-1/2 border-b-2 border-primary border-dashed h-1"></div>
              <div
                className={`w-1/2 border-b-2 ${false ? 'border-b-primary' : 'border-gray-4'} border-dashed h-1`}
              ></div>
            </div>

            <p
              className={`min-w-20 lg:min-w-32 xl:min-w-40 caption-sm xl:body-sm text-gray-4 flex gap-2 justify-center items-center`}
            >
              <IconTrukFast className="w-4 md:w-6 h-4 md:h-6" />
              <span className="hidden lg:flex">ارسال توسط پیک</span>
            </p>

            <div className="w-full flex flex-row">
              <div
                className={`w-1/2 border-b-2 border-gray-4 border-dashed h-1`}
              ></div>
              <div
                className={`w-1/2 border-b-2 border-gray-4 border-dashed h-1`}
              ></div>
            </div>

            <p
              className={`min-w-20 lg:min-w-32 xl:min-w-40 caption-sm xl:body-sm text-gray-4 flex gap-2 justify-center items-center`}
            >
              <IconTickCircle className="w-4 md:w-6 h-4 md:h-6" />
              <span className="hidden lg:flex">تحویل سفارش</span>
            </p>
          </div>
        </div>
      </div>
    </BoxOfMain>
  );
}

export default page;
