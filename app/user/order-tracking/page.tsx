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
import Image from 'next/image';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import moment from 'jalali-moment';
import WithoutCart from '@/app/shoping/shopingCart/WithoutCart';
import ButtonOrder from './ButtonOrder';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import { getBaseUrl } from '@/lib/getBaseUrl';

interface OrderTrackType {
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
}


export const metadata: Metadata  = {
  title: 'پیگیری سفارش | رهگیری سفارش آنلاین در ترخینه',
  description: 'وضعیت سفارش خود را در هر لحظه بررسی کنید و از زمان تحویل آن مطلع شوید. پیگیری سریع و آسان سفارشات در ترخینه.',
  openGraph: {
    title: 'پیگیری سفارش | رهگیری سفارش آنلاین در ترخینه',
    description: 'سفارش خود را به صورت لحظه‌ای پیگیری کنید و از مراحل آماده‌سازی تا تحویل آگاه باشید.',
    url: `${getBaseUrl()}/user/order-tracking`,
    images: [
      {
        url: `/logoGreenBig.png`,
        width: 1200,
        height: 630,
        alt: `پیگیری سفارش - ترخینه`,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/user/order-tracking`,
  },
}

async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const orderTrack = (await fetch(
    `${process.env.NEXTAUTH_URL}/api/orderTrack?status=${searchParams.status}`,
    { headers: headers() }
  ).then((res) => res.json())) as {
    status: number;
    message: string;
    order: OrderTrackType[] | null;
  };

  return (
    <BoxOfMain
      forUserPage
      title="سفارشات"
      className="overflow-x-hidden outline-none overflow-y-scroll scrollbar max-h-[700px]"
    >
      <div className="flex flex-col w-full gap-4">
        {orderTrack.order?.length ? (
          <>
            <div className="flex w-fit gap-2 mb-4 overflow-scroll scrollbar">
              {NavBadgeOrderTracking.map((badge) => (
                <Badge
                  title={badge.title}
                  url={badge.url}
                  key={badge.id}
                  forOrderTracking
                />
              ))}
            </div>
            {orderTrack.order?.map((order) => (
              <div key={order.id} className="w-full h-fit border border-gray-4 dark:border-background-2 rounded px-3 pt-2 pb-4 md:p-6 md:pt-4 relative flex flex-col">
                <div>
                  <h3 className="caption-md md:body-sm md:mt-2 text-gray-6">
                    شعبه اکباتان
                  </h3>

                  <span className="flex caption-sm md:caption-md items-center text-gray-7">
                    <IconCaledar className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />{' '}
                    &nbsp;
                    <span>
                      {convertToPersianNumbers(
                        `${moment(order.date).locale('fa').format('dddd DD MMMM')}،ساعت ${moment(order.date).locale('fa').format('H:mm')}`
                      )}
                    </span>
                    &nbsp; &nbsp;
                    <span className="hidden lg:flex">
                      مبلغ:{' '}
                      {convertToPersianNumbers(order.price.toLocaleString())}{' '}
                      تومان
                    </span>
                    &nbsp; &nbsp;
                    <span className="hidden lg:flex">
                      تخفیف:{' '}
                      {convertToPersianNumbers(order.discount.toLocaleString())}{' '}
                      تومان
                    </span>
                  </span>
                  <span className="flex caption-sm md:caption-md items-center text-gray-7">
                    <IconLocation className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />
                    &nbsp;
                    <span>
                      شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
                    </span>
                  </span>
                  <span className="flex caption-sm md:caption-md lg:hidden items-center text-gray-7">
                    <IconWallet className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />
                    &nbsp;
                    <span className="flex">مبلغ: 228،500 تومان</span>&nbsp;
                    &nbsp;
                    <span className="flex">تخفیف: 28،500 تومان</span>
                  </span>
                </div>

                <div className="w-fit h-fit flex flex-col absolute top-2 left-3 md:top-4 md:left-6">
                  <div className="flex gap-2">
                    <div className="w-fit px-3 py-[2px] caption-sm md:caption-md  bg-gray-3 text-gray-8 rounded flex items-center justify-center">
                      {order.sendMethod.name == 'delivery'
                        ? 'ارسال توسط پیک'
                        : 'تحویل حضوری'}
                    </div>

                    <div
                      className={`w-fit px-3 py-[2px] caption-sm md:caption-md  ${order.status.name == 'current' ? 'bg-warning-extralight text-warning' : order.status.name == 'delivered' ? 'bg-tint-1 text-primary' : 'bg-error-extralight text-error'} rounded flex items-center justify-center`}
                    >
                      {order.status.name == 'current'
                        ? 'جاری'
                        : order.status.name == 'delivered'
                          ? 'تحویل شده'
                          : 'لغو شده'}
                    </div>
                  </div>
                  {order.status.name == 'current' && (
                    <span className="flex items-center gap-1 justify-end mt-3 md:mt-4">
                      <IconClock className="w-3 h-3 md:h-4 md:w-4 fill-gray-7" />
                      <span className="caption-sm md:caption-md text-gray-7">
                        تحویل تا{' '}
                        <span className="text-primary">
                          {convertToPersianNumbers(
                            moment(order.date)
                              .locale('fa')
                              .add(1, 'hour')
                              .format('H:mm')
                          )}
                        </span>
                      </span>
                    </span>
                  )}
                </div>

                {order.status.name == 'current' && (
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
                        className={`w-1/2 border-b-2 border-gray-4 border-dashed h-1`}
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
                )}

                <div className="flex w-full gap-4 overflow-auto mt-4 scrollbar">
                  {order.foods.map((food) => (
                    <div key={food.food.name} className="flex flex-col min-w-[92px] h-[92px] md:min-w-[123px] md:h-[125px] border border-gray-4 dark:border-background-2 rounded-md overflow-hidden">
                      <div className="relative w-full h-1/2 md:h-20">
                        <Image alt="foodImg" src={food.food.image} fill />
                        <div className="w-fit h-3 md:h-4 bg-white absolute bottom-1 left-1 rounded-[2px] md:rounded flex items-center justify-center caption-sm md:caption-md text-primary p-1">
                          {convertToPersianNumbers(food.quantity.toString())}×
                        </div>
                      </div>
                      <div className="caption-sm flex flex-col justify-center items-center my-1 text-gray-8 dark:text-gray-3">
                        <span>{food.food.name}</span>
                        <span>
                          {convertToPersianNumbers(
                            (
                              food.food.price -
                              (food.food.price * food.food.order) / 100
                            ).toLocaleString()
                          )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <ButtonOrder order={order} />
              </div>
            ))}
          </>
        ) : (
          <WithoutCart />
        )}
      </div>
    </BoxOfMain>
  );
}

export default page;
