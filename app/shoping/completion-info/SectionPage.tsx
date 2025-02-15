'use client';
import IconMap from '@/components/shared/IconMap';
import { Label } from '@/components/ui/label';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import React, { useState } from 'react';
import RenderAddresses from './RenderAddresses';
import TextAreaInfo from './TextAreaInfo';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import Modal from '@/components/shared/Modal';

const LeafletMap = dynamic(() => import('@/components/shared/map/ShowMap'), {
  ssr: false,
});

import dynamic from 'next/dynamic';
import InputCustom from '@/components/shared/input/InputCustom';
import Button from '@/components/shared/button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaAddress } from '@/lib/zod';
import { z } from 'zod';
// import Address from './Address';
import { SendAddress } from '@/app/actions/address';
import { AddressUserProps } from '@/lib/indexType';
import { toast } from 'sonner';
import BoxOfMain from '../BoxOfMain';

type AddressFormType = z.infer<typeof SchemaAddress>;

function SectionPage({
  userAddress,
}: {
  userAddress: AddressUserProps[] | undefined;
}) {
  const [isOpenModal, setIsOpenModel] = useState(false);
  const [showAddressBranch, setShowAddressBranch] = useState(false);
  const [stepShowAddAddress, setStepShowAddAddress] = useState(1);
  const [checkedInput, setCheckedInput] = useState(false);
  const [addressUser, setAddressUser] = useState<string>('');
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

  const handleDataFromChild = (child: boolean) => {
    setIsOpenModel(child);
  };
  const submitAddress = async (e: AddressFormType) => {
    const submitAdd = await SendAddress(e);
    setIsOpenModel(false);
    if (submitAdd.status == 200) {
      toast.success(submitAdd.message);
    } else {
      toast.warning(submitAdd.message);
    }
  };

  return (
    <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
      <main className="w-full xl:w-1/2 h-full">
 
        <BoxOfMain icon="truk" title="روش تحویل سفارش">
          <RadioGroup
            defaultValue="online"
            dir="rtl"
            className="mt-4 md:mt-0 w-full flex flex-col md:flex-row md:justify-around md:items-center"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem
                value="online"
                id="r1"
                onClick={() => setShowAddressBranch(false)}
              />
              <Label
                onClick={() => setShowAddressBranch(false)}
                htmlFor="r1"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
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
              <RadioGroupItem
                value="inPerson"
                id="r2"
                onClick={() => setShowAddressBranch(true)}
              />
              <Label
                onClick={() => setShowAddressBranch(true)}
                htmlFor="r2"
                className="flex gap-1 cursor-pointer text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
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
        </BoxOfMain>

        <RenderAddresses
          showAddressBranch={showAddressBranch}
          sendDataToParent={handleDataFromChild}
          addressesUser={userAddress}
        />

        <TextAreaInfo
          id={'description-address'}
          showIcon
          placeholder={'توضیحات سفارش (اختیاری)'}
          className={'w-full h-36 mt-3 md:mt-6 px-3 py-4 md:p-4 rounded-md'}
        />
      </main>

      <AsideFoodsForShopingCart hiddenSection={[]} linkBTN="/shoping/payment" />

      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModel(false)}
        title={<h6 className="h7">افزودن آدرس</h6>}
        state="showMap"
      >
        {stepShowAddAddress == 1 ? (
          <div className="w-full h-full">
            <LeafletMap
              setStateShow={setStepShowAddAddress}
              stateAddress={addressUser}
              setStateAddress={setAddressUser}
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
              width={'w-full md:max-w-[552px]'}
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
                  width={'w-full md:max-w-[552px]'}
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
                  width={'w-full md:max-w-[552px]'}
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
                  width={'w-full md:max-w-[552px] mt-3 md:mt-4'}
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
              value={addressUser}
              onChange={(e) => setAddressUser(e.target.value)}
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
    </section>
  );
}

export default SectionPage;
