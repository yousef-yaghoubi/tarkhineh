import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import CardFoodBackDrop from './CardFoodBackDrop'

function CardTarkhinehGardiSmall({ onClickCustom, img, title, showBTN, openModal, desc }: { onClickCustom: () => void, img: string, title: string, showBTN?: boolean, openModal: () => void, desc: string }) {
    return (
        <div
            className={clsx('w-11/12 min-w-72 !h-20 md:min-w-[170px] md:!w-44 md:!h-[260px] rounded-sm border-gray-4 dark:border-[rgb(64,65,66)] selection:border-primary transition-all overflow-hidden border flex justify-between mt-3 hover:shadow-cards duration-300', showBTN !== undefined ? 'group sm:w-72 sm:h-[344px] sm:flex-col' : ' md:w-72 md:h-[344px] md:flex-col')}
            onClick={onClickCustom}
        >
            <div
                className={clsx('relative w-[114px] h-full duration-300 transition-all', showBTN !== undefined ? 'sm:w-full sm:h-[230px] sm:group-hover:h-[190px]' : 'md:w-full md:h-[230px] md:group-hover:h-[190px] ')}
            >
                <Image src={img} alt={title} fill className="w-full h-full" />
                <Image
                    src="/image/zoomPicture.webp"
                    alt="zoom"
                    width={16}
                    height={16}
                    className={clsx('absolute bottom-2 right-2', showBTN !== undefined ? 'sm:hidden' : 'hidden')}
                    onClick={showBTN !== undefined ? openModal : undefined}
                />

                <div
                    className="w-full h-full z-30 !bg-[rgba(0,0,0,0.6)] absolute top-0 flex opacity-0  duration-500 transition-all ease-in-out  justify-center items-center sm:group-hover:opacity-100 cursor-pointer"
                    onClick={showBTN !== undefined ? openModal : undefined}
                >
                    <CardFoodBackDrop />
                </div>
            </div>

            <div className="w-[calc(100%_-_114px)] h-[110px] group-hover:h-[154px] flex items-center flex-col px-2 py-2 sm:w-full duration-300 transition-all">
                <span
                    className={`caption-md ${showBTN !== undefined ? 'sm:button-lg' : 'sm:caption-md'
                        }`}
                >
                    شعبه {title}
                </span>
                <p
                    className={`caption-sm text-gray-7 px-1 text-center mt-2 ${showBTN !== undefined ? ' sm:caption-lg' : 'sm:caption-sm'}`}
                >
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default CardTarkhinehGardiSmall