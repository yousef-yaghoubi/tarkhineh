'use client'
import React from 'react'
import Modal from '../Modal';
import { branches } from '@/lib/dataPublic';
import CardTarkhineGardi from '../card/CardTarkhineGardi';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
function ModalBranch({ showChooseModal, closeModal, urlMenu }: { showChooseModal: boolean, closeModal: () => void, urlMenu?: string }) {
    const router = useRouter()
    return (
        <Modal
            isOpen={showChooseModal}
            onClose={closeModal}
            title={<h3 className="caption-lg md:h7">انتخاب شعبه</h3>}
            desc="برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:"
        >
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
                {branches.map((branch) => (
                    <CardTarkhineGardi
                        key={branch.id}
                        showType="small"
                        desc={branch.desc}
                        title={branch.title}
                        img={branch.images[0].src}
                        id={branch.id}
                        onClickCustom={() => {
                            Cookies.set('branches', branch.title);
                            router.push(`/menu?type=${urlMenu}`);
                            closeModal();
                        }}
                    />
                ))}
            </div>
        </Modal>
    )
}

export default ModalBranch