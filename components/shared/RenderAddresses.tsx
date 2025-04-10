'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Address from '../../app/shoping/completion-info/Address';
import Button from '@/components/shared/button/Button';
import dynamic from 'next/dynamic';
import { AddressUserProps } from '@/types';
import Modal from '@/components/shared/Modal';
import { toast } from 'sonner';
import { DeleteAddress, SendAddress } from '@/app/actions/address';
import IconLocation from '@icons/location.svg';
import IconCloseCircle from '@icons/close-circle.svg';
import { OrderProvider, useOrder } from '@/app/shoping/ShopingProvider';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaAddress } from '@/validators/zod';
import { z } from 'zod';
import TextAreaInfo from '@/app/shoping/completion-info/TextAreaInfo';
import InputCustom from './input/InputCustom';
import { usePathname } from 'next/navigation';

const Leaflet = dynamic(() => import('@/components/shared/map/ShowMap'), {
  ssr: false,
});

// const Map = dynamic(() => import('@/components/shared/map/ShowMap'), {
//   ssr: false,
// });

type AddressFormType = z.infer<typeof SchemaAddress>;

function RenderAddresses({
  sendDataToParent,
  showAddressBranch,
  addressesUser,
}: {
  sendDataToParent: (child: boolean) => void;
  showAddressBranch: boolean;
  addressesUser: AddressUserProps[] | undefined;
}) {
  const [isOpenModal, setIsOpenModel] = useState(false);
  const [idAddressForRemove, setIdAddressForRemove] = useState<number | null>(
    null
  );
  const [idAddressForSelect, setIdAddressForSelect] = useState<number | null>(
    null
  );
  const [isOpenModalAddAddress, setIsOpenModalAddAddress] = useState(false);
  const [stepShowAddAddress, setStepShowAddAddress] = useState(1);
  const [checkedInput, setCheckedInput] = useState(false);
  const { order, updateDelivery } = useOrder();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormType>({
    resolver: zodResolver(SchemaAddress),
    defaultValues: {
      checkbox: checkedInput,
    },
  });
  const pathName = usePathname();

  const submitAddress = async (e: AddressFormType) => {
    const submitAdd = await SendAddress(e);
    setIsOpenModalAddAddress(false);
    if (submitAdd.status == 200) {
      toast.success(submitAdd.message);
    } else {
      toast.warning(submitAdd.message);
    }
  };
  return (
    // <OrderProvider>
    <div className="flex w-full h-fit rounded-md border border-gray-4 dark:border-background-2 p-4">
      {!showAddressBranch ? (
        <div className="w-full h-fit">
          <p className="flex justify-between border-b border-gray-4 dark:border-background-2 pb-2">
            <span className="flex items-center gap-1">
              <IconLocation className="w-4 h-4 md:w-6 md:h-6 fill-black dark:fill-white" />
              <span className="body-sm md:body-md">آدرس ها</span>
            </span>

            <span
              className="flex items-center text-primary gap-1 cursor-pointer"
              onClick={() => setIsOpenModalAddAddress(true)}
            >
              <i className="rotate-45">
                <IconCloseCircle className="w-4 h-4 fill-primary" />
              </i>
              <span className="body-sm md:body-md">افزودن آدرس</span>
            </span>
          </p>
          {addressesUser == undefined || addressesUser.length < 1 ? (
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
            <div
              className={`relative grid grid-cols-1 ${pathName == '/user/myAddresses' ? 'md:grid-cols-1' : 'md:grid-cols-2'} xl:grid-cols-1 2xl:grid-cols-2 justify-center h-full w-full py-3 gap-2`}
            >
              {addressesUser?.map((address) => (
                <Address
                  key={address.id}
                  prop={address}
                  setIsOpenModel={setIsOpenModel}
                  setIdAddress={setIdAddressForRemove}
                  idSelectedAddress={idAddressForSelect}
                  setIdSelectedAddress={setIdAddressForSelect}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
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
      )}

      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModel(false)}
        state="removeShopingCart"
        title={<h6 className="h7">حذف آدرس</h6>}
        desc="آیا از حذف این آدرس مطمئن هستید؟"
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
              DeleteAddress && DeleteAddress(idAddressForRemove as number);
              setIsOpenModel(false);
              toast.success('آدرس شما پاک شد');
            }}
          >
            حذف
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenModalAddAddress}
        onClose={() => setIsOpenModalAddAddress(false)}
        title={<h6 className="h7">افزودن آدرس</h6>}
        state="showMap"
      >
        {stepShowAddAddress == 1 ? (
          <div className="w-full h-full">
            <Leaflet
              setStateShow={setStepShowAddAddress}
              stateAddress={
                order.delivery.type === 'delivery' ? order.delivery.address : ''
              }
              setStateAddress={true}
            />
          </div>
        ) : (
          <form
            key={'form'}
            className={
              'w-full h-full flex flex-col items-center p-6 relative overflow-auto'
            }
            onSubmit={handleSubmit(submitAddress)}
          >
            <InputCustom
              type={'text'}
              key={'titleAddress'}
              id={'titleAddress'}
              classNameParent={'w-full md:max-w-[552px]'}
              placeholder={'عنوان آدرس'}
              className={'h-8 md:h-10'}
              {...register('title')}
              error={errors.title}
            />
            <div className={'mb-2 mt-3 md:mt-4 w-full'}>
              <input
                key={'checkbox'}
                type={'checkbox'}
                checked={checkedInput}
                {...register('checkbox')}
                id={'checkboxInput'}
                width={'w-full'}
                onChange={(e) => setCheckedInput(e.target.checked)}
                className={
                  'text-primary rounded checked:bg-primary checked:accent-primary appearance-auto border border-primary'
                }
              />
              <label
                htmlFor={'checkboxInput'}
                className={'caption-sm md:body-sm mr-1'}
              >
                تحویل گیرنده خودم هستم
              </label>
            </div>

            {checkedInput ? (
              <>
                <InputCustom
                  dir="ltr"
                  key={'phone'}
                  id={'phone'}
                  type={'text'}
                  placeholder={'شماره همراه'}
                  classNameParent={'w-full md:max-w-[552px]'}
                  {...register('phone')}
                  //@ts-ignore
                  error={errors.phone}
                  defaultValue={'09'}
                />
              </>
            ) : (
              <>
                <InputCustom
                  key={'nameRecipient'}
                  type={'text'}
                  id={'nameRecipient'}
                  classNameParent={'w-full md:max-w-[552px]'}
                  {...register('nameRecipient')}
                  // @ts-ignore
                  error={errors.nameRecipient}
                  placeholder={'نام و نام خانوادگی تحویل گیرنده'}
                  className={'h-8 md:h-10'}
                />
                <InputCustom
                  dir="ltr"
                  key={'phoneRecipient'}
                  type={'text'}
                  id={'phoneRecipient'}
                  classNameParent={'w-full md:max-w-[552px] mt-3 md:mt-4'}
                  {...register('phoneRecipient')}
                  //@ts-ignore
                  error={errors.phoneRecipient}
                  placeholder={'شماره تماس تحویل گیرنده'}
                  className={'h-8 md:h-10'}
                />
              </>
            )}

            <TextAreaInfo
              id={'accurate-address'}
              key={'address'}
              placeholder={'آدرس دقیق شما'}
              {...register('address')}
              value={
                order.delivery.type === 'delivery' ? order.delivery.address : ''
              }
              onChange={(e) =>
                updateDelivery({ type: 'delivery', address: e.target.value })
              }
              className={
                'w-full h-[100px] md:h-[165px] mt-3 md:mt-4 px-1 py-4 md:p-1 rounded'
              }
            />
            {errors.address?.message && (
              <span className={'text-red-600 text-sm'}>
                {errors.address.message}
              </span>
            )}
            <div
              className={
                'w-full flex justify-around gap-6 md:gap-5 mt-6 md:mt-4 absolute bottom-4'
              }
            >
              <Button
                btn={'text'}
                className={'h-8 md:h-10 !w-5/12 md:min-w-[266px]'}
                theme={'Primary'}
                onClickCustom={() => setStepShowAddAddress(1)}
              >
                ویرایش آدرس انتخابی
              </Button>

              <Button
                btn={'fill'}
                className={'h-8 md:h-10 !w-5/12 md:min-w-[266px]'}
                theme={'Primary'}
              >
                ثبت آدرس
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
    // </OrderProvider>
  );
}

export default RenderAddresses;
