import React from 'react'
import { toast } from 'sonner';
import Modal from './Modal';
import { DeleteAddress } from '@/app/actions/address';
import { useCart } from '@/providers/shopingCardProvider';
import { DeleteBackFood, DeleteFood } from '@/app/actions/food';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type RemoveType = 'address' | 'shoppingCart' | 'food' | 'foodBack';

interface ModalRemovingProps {
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    idForRemoving: string | null;
    typeRemove: RemoveType;
}

const getRemoveTexts = (type: RemoveType) => {
    const texts = {
        address: {
            title: 'حذف آدرس',
            target: 'آیا از حذف این آدرس اطمینان دارید؟',
            success: 'آدرس شما با موفقیت پاک شد'
        },
        shoppingCart: {
            title: 'حذف محصولات',
            target: 'آیا از حذف محصولات سبد خرید اطمینان دارید؟',
            success: 'محصولات شما با موفقیت پاک شد'
        },
        food: {
            title: 'حذف محصول',
            target: 'آیا از حذف این محصول اطمینان دارید؟',
            success: 'محصول شما با موفقیت پاک شد'
        },
        foodBack: {
            title: 'بازگرداندن محصول',
            target: 'آیا از بازگرداندن این محصول اطمینان دارید؟',
            success: 'محصول شما با موفقیت بازگردانی شد'
        }
    };
    return texts[type];
};



function ModalRemoving({ isOpenModal, setIsOpenModal, idForRemoving, typeRemove }: ModalRemovingProps) {
    const { clearCart } = useCart();
    const queryClient = useQueryClient();
    const texts = getRemoveTexts(typeRemove);
    const removeMutation = useMutation({
        mutationFn: async () => {
            switch (typeRemove) {
                case 'address':
                    if (!idForRemoving) throw new Error('آیدی آدرس موجود نیست');
                    return await DeleteAddress(idForRemoving);
                case 'shoppingCart':
                    clearCart();
                    return Promise.resolve();
                case 'food':
                    if (!idForRemoving) throw new Error('آیدی محصول موجود نیست');
                    return await DeleteFood(idForRemoving);
                case 'foodBack':
                    if (!idForRemoving) throw new Error('آیدی محصول موجود نیست');
                    return await DeleteBackFood(idForRemoving);
                default:
                    throw new Error('نوع حذف نامشخص');
            }
        },
        onSuccess: () => {
            // invalidate کردن query های مربوطه
            if (typeRemove === 'food') {
                queryClient.invalidateQueries({ queryKey: ['foods'] });
            } else if (typeRemove === 'foodBack') {
                queryClient.invalidateQueries({ queryKey: ['foods'] });
            }

            setIsOpenModal(false);
            toast.success(texts.success);
        },
        onError: (error) => {
            console.error('خطا در حذف:', error);
            toast.error('خطا در حذف! دوباره تلاش کنید.');
        }
    });

    const getButtonText = () => {
        if (typeRemove === 'foodBack') {
            return removeMutation.isPending ? 'در حال بازگردانی...' : 'بازگردانی';
        }
        return removeMutation.isPending ? 'در حال حذف...' : 'حذف';
    };

    const handleRemove = () => {
        removeMutation.mutate();
    };

    return (
        <Modal
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
            state="removeShopingCart"
            title={<h6 className="h7">{texts.title}</h6>}
            desc={texts.target}
        >
            <div className="flex w-64 justify-between">
                <button
                    className="w-[117px] h-10 rounded border border-primary text-primary disabled:opacity-50"
                    onClick={() => setIsOpenModal(false)}
                    disabled={removeMutation.isPending}
                >
                    بازگشت
                </button>
                <button
                    className="w-[117px] h-10 rounded bg-error-extralight text-error disabled:opacity-50"
                    onClick={handleRemove}
                    disabled={removeMutation.isPending}
                >
                    {getButtonText()}
                </button>
            </div>
        </Modal>
    )
}

export default ModalRemoving