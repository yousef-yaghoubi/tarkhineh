'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Button from '../button/Button'
import TextAreaInfo from '@/app/(main)/shoping/completion-info/TextAreaInfo'
import InputCustom from '../input/InputCustom'
import Modal from '../Modal'
import { useOrder } from '@/app/(main)/shoping/ShopingProvider'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaAddress } from '@/validators/zod'
import { z } from 'zod'
import { SendAddress } from '@/app/actions/address'
import { toast } from 'sonner'

const Leaflet = dynamic(() => import('@/components/shared/map/ShowMap'), {
    ssr: false,
});


type AddressFormType = z.infer<typeof SchemaAddress>;
function ModalAddAddress({ isOpenModalAddAddress, setIsOpenModalAddAddress }: { isOpenModalAddAddress: boolean, setIsOpenModalAddAddress: Dispatch<SetStateAction<boolean>> }) {
    const { order, updateDelivery } = useOrder();
    const [checkedInput, setCheckedInput] = useState(false);
    const [stepShowAddAddress, setStepShowAddAddress] = useState(1);
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

                    {checkedInput == false ? (
                        <>
                            <InputCustom
                                key={'nameRecipient'}
                                type={'text'}
                                id={'nameRecipient'}
                                classNameParent={'w-full md:max-w-[552px]'}
                                {...register('nameRecipient')}
                                error={!checkedInput && 'nameRecipient' in errors ? errors.nameRecipient : undefined}
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
                                error={!checkedInput && 'phoneRecipient' in errors ? errors.phoneRecipient : undefined}
                                placeholder={'شماره تماس تحویل گیرنده'}
                                className={'h-8 md:h-10'}
                            />
                        </>
                    ) : (
                        <>
                            <InputCustom
                                dir="ltr"
                                key={'phone'}
                                id={'phone'}
                                type={'text'}
                                placeholder={'شماره همراه'}
                                classNameParent={'w-full md:max-w-[552px]'}
                                {...register('phone')}
                                error={checkedInput && 'phone' in errors ? errors.phone : undefined}
                                defaultValue={'09'}
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
                            type='button'
                        >
                            ویرایش آدرس انتخابی
                        </Button>

                        <Button
                            btn={'fill'}
                            className={'h-8 md:h-10 !w-5/12 md:min-w-[266px]'}
                            theme={'Primary'}
                            type='submit'
                        >
                            ثبت آدرس
                        </Button>
                    </div>
                </form>
            )}
        </Modal>
    )
}

export default ModalAddAddress