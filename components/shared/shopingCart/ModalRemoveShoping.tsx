'use client'
import React, { Dispatch, SetStateAction } from 'react'
import Modal from '../Modal'
import { useCart } from '@/providers/shopingCardProvider'

function ModalRemoveShoping({ isOpenModal, setIsOpenModal }: { isOpenModal: boolean, setIsOpenModal: Dispatch<SetStateAction<boolean>> }) {
    const { clearCart } = useCart()
    return (
        <Modal
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            state="removeShopingCart"
            title={<h3 className="caption-lg md:h7">حذف محصولات</h3>}
            desc="همه محصولات سبد خرید شما حذف شود؟"
        >
            <div className="flex justify-between gap-4 md:gap-5">
                <button
                    className="w-32 h-8 md:w-[117px] md:h-10 rounded border border-primary text-primary"
                    onClick={() => setIsOpenModal(false)}
                >
                    بازگشت
                </button>
                <button
                    className="w-32 h-8 md:w-[117px] md:h-10 !bg-error-extralight rounded text-error"
                    onClick={() => {
                        clearCart(),
                        setIsOpenModal(false)
                    }}
                >
                    حذف
                </button>
            </div>
        </Modal>
    )
}

export default ModalRemoveShoping