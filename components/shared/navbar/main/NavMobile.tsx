'use client'

import Image from 'next/image';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import IconNavbar from '@icons/menu.svg';
import { useNavContext } from '@/providers/navProvider';
import ChildrenNavMobile from './ChildrenNavMobile';
import ModalBranch from './ModalBranch';

function NavMobile() {
    const { open, setOpen, setShowChooseModal,showChooseModal, urlMenu } = useNavContext()
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="md:!hidden" asChild>
                    <IconNavbar width="24" height="24" className="fill-primary" />
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className="bg-white dark:bg-background-1 border-none p-0 menuMobile"
                >
                    <SheetTitle></SheetTitle>
                    <>
                        <Image
                            src={'/image/topFrameMenuMobile.webp'}
                            alt="header menu"
                            fill
                            className="w-full !h-[94px] md:hidden !relative mb-2 z-10"
                        />
                        <ChildrenNavMobile />
                    </>
                </SheetContent>
            </Sheet>
            <ModalBranch showChooseModal={showChooseModal} closeModal={() => setShowChooseModal(false)} urlMenu={urlMenu}/>
        </>
    )
}

export default NavMobile