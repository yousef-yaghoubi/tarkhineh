'use client';
import IconMap from '@/components/shared/IconMap';
import {Label} from '@/components/ui/label';
import {RadioGroupItem, RadioGroup} from '@/components/ui/radio-group';
import React, {useState} from 'react';
import RenderAddresses from './RenderAddresses';
import TextAreaInfo from './TextAreaInfo';
import AsideFoodsForShopingCart from '@/components/shared/shopingCart/AsideFoodsForShopingCart';
import Modal from '@/components/shared/Modal';

const LeafletMap = dynamic(() => import('@/components/shared/map/ShowMap'), {
    ssr: false,
});
import dynamic from 'next/dynamic';
import InputCustom from "@/components/shared/input/InputCustom";
import Button from "@/components/shared/button/Button";

function SectionPage() {
    const [isOpenModal, setIsOpenModel] = useState(false);
    const [showAddressBranch, setShowAddressBranch] = useState(false);
    const [stepShowAddAddress, setStepShowAddAddress] = useState(1);
    const [checkedInput, setCheckedInput] = useState(false);
    const handleDataFromChild = (child: boolean) => {
        setIsOpenModel(child);
    };

    return (
        <section
            className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1500px] mb-12">
            <main className="w-full xl:w-1/2 h-full">
                <div
                    className="w-full h-[133px] rounded-md border flex flex-col md:flex-row md:justify-between md:items-center border-gray-4 dark:border-background-2 px-4 py-2">
                    <h3 className="py-2 border-b md:border-0 border-gray-4 dark:border-background-2 flex gap-x-1 items-center md:w-1/3">
                        <IconMap icon="truk"/>
                        روش تحویل سفارش
                    </h3>

                    <RadioGroup
                        defaultValue="default"
                        dir="rtl"
                        className="mt-4 md:mt-0 md:w-2/3 flex flex-col md:flex-row md:justify-around md:items-center"
                    >
                        <div
                            className="flex items-center gap-2"
                            onClick={() => setShowAddressBranch(false)}
                        >
                            <RadioGroupItem value="default" id="r1"/>
                            <Label
                                htmlFor="r1"
                                className="flex gap-1 text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
                            >
                                <div>
                                    <span>ارسال توسط پیک</span>
                                    <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                                </div>
                                <IconMap icon="trukFast"/>
                            </Label>
                        </div>

                        <div
                            className="flex items-center gap-2 mt-2 md:mt-0"
                            onClick={() => setShowAddressBranch(true)}
                        >
                            <RadioGroupItem value="comfortable" id="r2"/>
                            <Label
                                htmlFor="r2"
                                className="flex gap-1 text-gray-7 dark:text-gray-4 items-center caption-md md:body-sm"
                            >
                                <div>
                                    <span>تحویل حضوری</span>
                                    <span className="hidden md:flex caption-sm">
                    توسط پیک رستوران ارسال شود.
                  </span>
                                </div>

                                <IconMap icon="shopingBag"/>
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                <RenderAddresses
                    showAddressBranch={showAddressBranch}
                    sendDataToParent={handleDataFromChild}
                />

                <TextAreaInfo id={"description-address"} showIcon placeholder={"توضیحات سفارش (اختیاری)"} className={"w-full h-36 mt-3 md:mt-6 px-3 py-4 md:p-4 rounded-md"}/>
            </main>

            <AsideFoodsForShopingCart hiddenSection={[]} linkBTN="/shoping/payment"/>

            <Modal
                isOpen={isOpenModal}
                onClose={() => setIsOpenModel(false)}
                title={<h6 className="h7">افزودن آدرس</h6>}
                state="showMap"
            >
                {stepShowAddAddress == 1 ? (
                    <div className="w-full h-full">
                        <LeafletMap setStateShow={setStepShowAddAddress}/>
                    </div>
                ) : (
                    <div className={"w-full h-full flex flex-col items-center p-6 relative"}>
                        <InputCustom type={'text'} id={"titleAddress"} width={'w-full md:max-w-[552px]'}
                                     placeholder={'عنوان آدرس'} className={'h-8 md:h-10'}/>
                        <div className={"mb-2 mt-3 md:mt-4 w-full"}>
                            <input type={'checkbox'} onChange={(e) => setCheckedInput(e.target.checked)}
                                   id={"checkboxInput"} width={'w-full'}
                                   className={'text-primary rounded checked:bg-primary checked:accent-primary appearance-auto border border-primary'}/>
                            <label htmlFor={"checkboxInput"} className={"caption-sm md:body-sm mr-1"}>تحویل گیرنده خودم
                                هستم</label>
                        </div>
                        {checkedInput ? (<>
                            <InputCustom type={'text'} placeholder={'شماره همراه'} width={'w-full md:max-w-[552px]'}
                                         id={'phone'}/>
                        </>) : (
                            <>
                                <InputCustom type={'text'} id={"name"} width={'w-full md:max-w-[552px]'}
                                             placeholder={'نام و نام خانوادگی تحویل گیرنده'} className={'h-8 md:h-10'}/>
                                <InputCustom type={'text'} id={"phone"} width={'w-full md:max-w-[552px] mt-3 md:mt-4'}
                                             placeholder={'شماره تماس تحویل گیرنده'} className={'h-8 md:h-10'}/>
                            </>
                        )}
                        <TextAreaInfo id={"accurate-address"}  placeholder={"آدرس دقیق شما"} className={"w-full h-[100px] md:h-[182px] mt-3 md:mt-4 px-1 py-4 md:p-1 rounded"}/>
                        <div className={"w-full flex justify-around gap-6 md:gap-5 mt-6 md:mt-4 absolute bottom-4"}>
                            <Button btn={"text"} className={"h-8 md:h-10 !w-5/12 md:min-w-[266px]"} theme={"Primary"}>ویرایش آدرس انتخابی</Button>
                            <Button btn={"fill"} className={"h-8 md:h-10 !w-5/12 md:min-w-[266px]"} theme={"Primary"}>ثبت آدرس</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    )
        ;
}

export default SectionPage;
