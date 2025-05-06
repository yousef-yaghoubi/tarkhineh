import React from 'react'
import Button from '../button/Button'
import { toast } from 'sonner'
import IconLocation from '@icons/location.svg';
import dynamic from 'next/dynamic';


const Leaflet = dynamic(() => import('@/components/shared/map/ShowMap'), {
    ssr: false,
  });

function ShowStaticAddress() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className="flex body-sm md:body-md items-center gap-1 border-b pb-1">
              <IconLocation className="w-4 h-4 md:w-6 md:h-6 fill-black dark:fill-white" />
              آدرس شعبه اکباتان
            </h3>
            <ul className="caption-sm md:caption-md text-gray-7 dark:text-gray-4 my-6">
              <li>
                اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف
              </li>
              <li>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</li>
              <li>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </li>
              <li>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</li>
            </ul>
            <Button
              btn="stroke"
              theme="Black"
              className="w-[152px] h-8 caption-md m-auto hidden md:flex"
              onClickCustom={() => toast.warning('این عمل در دسترس نیست.')}
            >
              مشاهده در نقشه
            </Button>
          </div>
          <div className="w-1/2 h-full hidden md:flex">
            <Leaflet showMiniMap={[35.71164720878694, 51.31006836891175]} />
          </div>
        </div>
  )
}

export default ShowStaticAddress