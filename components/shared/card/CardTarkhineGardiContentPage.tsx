import React, { Dispatch, SetStateAction } from 'react'
import Button from '../button/Button'
import { toast } from 'sonner'
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian'
import CardFoodBackDrop from './CardFoodBackDrop'
import Image from 'next/image'
import { ModalComponent } from './CardTarkhinehGardi'
import Cookies from 'js-cookie';

function CardTarkhinehGardiContentPage({ title, img, desc, hrefBTN, id, isModalOpen, setIsModalOpen }: { title: string, img: string, desc: string, hrefBTN?: string, id: number, isModalOpen: boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>> }) {
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="group h-fit min-h-[252px] md:h-[280px] w-10/12 rounded border border-gray-4 dark:border-background-2 flex flex-col md:flex-row overflow-hidden relative">
            <div className="relative w-full h-[112px] md:w-1/2 md:h-full">
                <Image alt={title} src={img} fill />
                <div
                    className="w-full h-full z-30 !bg-[rgba(0,0,0,0.6)] absolute top-0 flex opacity-0  duration-500 transition-all ease-in-out  justify-center items-center sm:group-hover:opacity-100 cursor-pointer"
                    onClick={openModal}
                >
                    <CardFoodBackDrop />
                </div>
            </div>

            <div className="flex flex-col w-full h-[calc(100%_-_112px)] md:w-1/2 md:h-full text-center">
                <div className="mt-1 md:mt-6 flex flex-col items-center">
                    <h5 className="text-gray-8 dark:text-gray-3 caption-md md:h6 lg:h7">شعبه {title}</h5>
                    <span className="mt-1 md:mt-6 text-gray-7 caption-sm md:body-sm lg:body-md xl:body-lg">
                        آدرس: {desc}
                    </span>
                    <span
                        className="mt-1 text-gray-7 caption-sm md:body-sm lg:body-md xl:body-lg"
                        dir="rtl"
                    >
                        شماره تماس:{' '}
                        <span dir="ltr">
                            {convertToPersianNumbers('021-54891250-51')}
                        </span>
                    </span>
                    <span className="mt-1 text-gray-7 caption-sm md:body-sm lg:body-md xl:body-lg">
                        ساعت کاری: همه‌روزه از ساعت 12 تا 23 بجز روزهای تعطیل
                    </span>
                </div>

                <div className="caption-sm md:button-lg flex md:invisible md:opacity-0 md:-bottom-6 md:group-hover:visible md:group-hover:bottom-4 transition-all duration-500 md:group-hover:opacity-100 w-full mt-3 md:mt-[22px] justify-evenly md:absolute md:w-1/2">
                    <Button
                        btn="stroke"
                        theme="Primary"
                        className="w-2/5 h-6 md:h-10"
                        link={`/branches/${hrefBTN}`}
                        onClickCustom={() => Cookies.set('branches', `${title}`)}
                    >
                        صفحه شعبه
                    </Button>
                    <Button
                        btn="fill"
                        theme="Primary"
                        className="w-2/5 h-6 md:h-10"
                        onClickCustom={() => toast.warning('این عمل دردسترس نیست.')}
                    >
                        دیدن در نقشه
                    </Button>
                </div>
            </div>

            <ModalComponent closeModal={closeModal} id={id} isModalOpen={isModalOpen} />
        </div>
    )
}

export default CardTarkhinehGardiContentPage