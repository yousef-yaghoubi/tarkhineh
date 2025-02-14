import IconMap from '@/components/shared/IconMap';
import Image from 'next/image';
import React, { useState } from 'react';
import Address from './Address';
import Button from '@/components/shared/button/Button';
import dynamic from 'next/dynamic';
import { AddressUserProps } from '@/lib/indexType';
import Modal from '@/components/shared/Modal';
import { toast } from 'sonner';
import { DeleteAddress } from '@/app/actions/address';

const Map = dynamic(()=> import ('@/components/shared/map/ShowMap'), {
  ssr: false
})
function RenderAddresses({
  sendDataToParent,
  showAddressBranch,
  addressesUser
}: {
  sendDataToParent: (child: boolean) => void;
  showAddressBranch: boolean;
  addressesUser: AddressUserProps[] | undefined
}) {
  const [isOpenModal, setIsOpenModel] = useState(false);
  const [idAddress, setIdAddress] = useState<number | null>(null);
  return (
    <div className="flex w-full h-fit rounded-md border border-gray-4 dark:border-background-2 p-4 mt-3 md:mt-6">
      {!showAddressBranch ? (
        <div className="w-full h-fit">
          <p className="flex justify-between border-b border-gray-4 dark:border-background-2 pb-2">
            <span className="flex items-center gap-1">
              <IconMap icon="locationShoping" />
              <span className="body-sm md:body-md">آدرس ها</span>
            </span>
            <span
              className="flex items-center text-primary gap-1 cursor-pointer"
              onClick={() => sendDataToParent(true)}
            >
              <i className="rotate-45">
                <IconMap icon="closeCircel" />
              </i>
              <span className="body-sm md:body-md">افزودن آدرس</span>
            </span>
          </p>
          {!addressesUser ? (
            <div className="relative flex flex-col md:flex-row xl:flex-col 2xl:flex-row justify-center items-center h-full w-full py-3 gap-2">
              <Image
                src={'/image/EmptyPage.png'}
                alt="empty"
                width={131}
                height={127}
              />
              <p className="absolute caption-sm md:body-sm text-gray-6">
                شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
              </p>
            </div>
          ) : (
            <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 justify-center items-center h-full w-full py-3 gap-2">
              {addressesUser?.map((address) => (
                <Address key={address.id} prop={address} setIsOpenModel={setIsOpenModel} setIdAddress={setIdAddress}/>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className='flex body-sm md:body-md items-center gap-1 border-b pb-1'>
              <IconMap icon="locationShoping" />
              آدرس شعبه اکباتان
            </h3>
            <ul className='caption-sm md:caption-md text-gray-7 dark:text-gray-4 my-6'>
              <li>اکباتان، خیابان ریاحی، کوچه سیزدهم، ساختمان آیسا، طبقه همکف</li>
              <li>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</li>
              <li>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </li>
              <li>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</li>
            </ul>
            <Button btn='stroke' theme='Black' className='w-[152px] h-8 caption-md m-auto hidden md:flex'>
              مشاهده در نقشه
            </Button>
          </div>
          <div className='w-1/2 h-full hidden md:flex'>
            <Map showMiniMap={[35.71164720878694, 51.31006836891175]}/>
          </div>
        </div>
      )}

      <Modal isOpen={isOpenModal} onClose={()=> setIsOpenModel(false)} state='removeShopingCart' title={<h6 className='h7'>حذف آدرس</h6>} desc='آیا از حذف این آدرس مطمئن هستید؟'>
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
              DeleteAddress && DeleteAddress(idAddress as number);
              setIsOpenModel(false);
              toast.success('آدرس شما پاک شد');
            }}
          >
            حذف
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default RenderAddresses;
