import clsx from 'clsx'
import React from 'react'
import IconRight from '@icons/arrow-right.svg'
import IconLeft from '@icons/arrow-left.svg'


const baseClass = 'absolute z-20 justify-center items-center disabled:hidden bg-white p-0 border border-gray-4 hidden md:flex'

export function IconNavigationRight({ badgeSlides }: { badgeSlides?: 'type' | 'sort' }) {
    const baseClassRight = 'prevSlide right-0'
    return (
        <>
            {badgeSlides !== undefined ? (
                <button className={clsx(baseClass, baseClassRight, "top-1  w-6 h-6 rounded")}>
                    <IconRight width="32" height="32" className="fill-[#353535]" />
                </button>
            ) : (
                <button className={clsx(baseClass, baseClassRight, "top-[55%] bottom-1/2  rounded-md translate-y-1/2 w-10 h-10")}>
                    <IconRight width="32" height="32" className="fill-[#353535]" />
                </button>
            )}
        </>
    )
}

export function IconNavigationLeft({ badgeSlides }: { badgeSlides?: 'type' | 'sort' }) {
    const baseClassLeft = 'left-0 nextSlide'
    return (
        <>
            {
                badgeSlides !== undefined ? (
                    <button className={clsx(baseClass, baseClassLeft, "top-1  w-6 h-6 rounded")}>
                        <IconLeft width="32" height="32" className="fill-[#353535]" />
                    </button>
                ) : (
                    <button className={clsx(baseClass, baseClassLeft, "top-[55%] bottom-1/2 translate-y-1/2  w-10 h-10 rounded-md")}>
                        <IconLeft width="32" height="32" className="fill-[#353535]" />
                    </button>
                )
            }
        </>
    )
}