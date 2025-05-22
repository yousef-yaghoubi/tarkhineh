'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Address from '../../../app/(main)/shoping/completion-info/Address';
import { AddressUserProps } from '@/types';
import IconLocation from '@icons/location.svg';
import IconCloseCircle from '@icons/close-circle.svg';
import { usePathname } from 'next/navigation';
import ModalAddAddress from './ModalAddAddress';
import ModalRemoveAddress from './ModalRemoveAddress';
import ShowStaticAddress from './ShowStaticAddress';

function RenderAddresses({
  showAddressBranch,
  addressesUser,
}: {
  showAddressBranch: boolean;
  addressesUser: AddressUserProps[] | undefined;
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [idAddressForRemove, setIdAddressForRemove] = useState<string | null>(
    null
  );
  const [isOpenModalAddAddress, setIsOpenModalAddAddress] = useState(false);
  const pathName = usePathname();

  return (
    <div className="flex w-full h-fit rounded-md border border-gray-4 dark:border-background-2 p-4">
      {!showAddressBranch ? (
        <div className="w-full h-fit">
          <p className="flex justify-between border-b border-gray-4 dark:border-background-2 pb-2">
            <span className="flex items-center gap-1">
              <IconLocation className="w-4 h-4 md:w-6 md:h-6 fill-black dark:fill-white" />
              <span className="body-sm md:body-md">آدرس ها</span>
            </span>

            <span
              className="flex items-center text-primary gap-1 cursor-pointer"
              onClick={() => setIsOpenModalAddAddress(true)}
            >
              <i className="rotate-45">
                <IconCloseCircle className="w-4 h-4 fill-primary" />
              </i>
              <span className="body-sm md:body-md">افزودن آدرس</span>
            </span>
          </p>
          {addressesUser == undefined || addressesUser.length < 1 ? (
            <div className="relative flex flex-col md:flex-row xl:flex-col 2xl:flex-row justify-center items-center h-full w-full py-3 gap-2">
              <Image
                src={'/image/EmptyPage.webp'}
                alt="empty"
                width={131}
                height={127}
              />
              <p className="absolute caption-sm md:body-sm text-gray-6">
                شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!
              </p>
            </div>
          ) : (
            <div
              className={`relative grid grid-cols-1 ${pathName == '/user/myAddresses' ? 'md:grid-cols-1' : 'md:grid-cols-2'} xl:grid-cols-1 2xl:grid-cols-2 justify-center h-full w-full py-3 gap-2`}
            >
              {addressesUser?.map((address) => (
                <Address
                  key={address.id}
                  prop={address}
                  setIsOpenModal={setIsOpenModal}
                  setIdAddress={setIdAddressForRemove}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <ShowStaticAddress/>
      )}

      <ModalRemoveAddress idAddressForRemove={idAddressForRemove} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/> 
      <ModalAddAddress isOpenModalAddAddress={isOpenModalAddAddress} setIsOpenModalAddAddress={setIsOpenModalAddAddress}/>
    </div>
  );
}

export default RenderAddresses;
