import React from 'react'
import Button from '../button/Button'
import IconUser from '@icons/profileIcon.svg'
import IconArrowLeft from '@icons/arrow-left.svg';
import { useSession } from 'next-auth/react';
import { PropAsideFoodsForShopingCart } from '@/types/prop';
function ConditionalButton({ linkBTN, BtnDisabeld, onClickCustom }: PropAsideFoodsForShopingCart) {
    const { status } = useSession()
    return (
        <>
            {status == 'unauthenticated' ? (
                <Button
                    key={'button for login'}
                    btn="fill"
                    theme="Primary"
                    className="w-full h-10 mt-5"
                    link="/login"
                >
                    <span
                        className="flex items-center gap-2"
                    >
                        <IconUser width={24} height={24} />
                        <span>ورود/ثبت نام</span>
                    </span>
                </Button>
            ) : status == 'authenticated' ? (
                <Button
                    key={'button for completion'}
                    btn="fill"
                    theme="Primary"
                    className="w-full h-10 mt-5"
                    link={linkBTN}
                    disabled={BtnDisabeld}
                    onClickCustom={() => onClickCustom && onClickCustom()}
                >
                    <span
                        className="flex items-center gap-2"
                    >
                        <span>تکمیل اطلاعات</span>
                        <IconArrowLeft width="24" height="24" fill="white" />
                    </span>
                </Button>
            ) : (
                <Button
                    key={'button for loading'}
                    btn="fill"
                    theme="Primary"
                    className="w-full h-10 mt-5"
                    loading
                >
                    <></>
                </Button>
            )}
        </>
    )
}

export default ConditionalButton