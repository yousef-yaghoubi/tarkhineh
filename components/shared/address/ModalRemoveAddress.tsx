'use client'
import React from 'react'
import Modal from '../Modal';
import { DeleteAddress } from '@/app/actions/address';
import { toast } from 'sonner';

function ModalRemoveAddress({isOpenModal, setIsOpenModal, idAddressForRemove}: {isOpenModal: boolean, setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>, idAddressForRemove: string | null}) {
    return (
        <Modal
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            state="removeShopingCart"
            title={<h6 className="h7">حذف آدرس</h6>}
            desc="آیا از حذف این آدرس مطمئن هستید؟"
        >
            <div className="flex w-64 justify-between">
                <button
                    className="w-[117px] h-10 rounded border border-primary text-primary"
                    onClick={() => setIsOpenModal(false)}
                >
                    بازگشت
                </button>
                <button
                    className="w-[117px] h-10 rounded bg-error-extralight text-error"
                    onClick={() => {
                        if (DeleteAddress) DeleteAddress(idAddressForRemove as string);
                        setIsOpenModal(false);
                        toast.success('آدرس شما پاک شد');
                    }}
                >
                    حذف
                </button>
            </div>
        </Modal>
    )
}

export default ModalRemoveAddress