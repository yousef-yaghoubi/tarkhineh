import IconMap from '@/components/shared/IconMap';
import Modal from '@/components/shared/Modal';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { AddressUserProps } from '@/lib/indexType';
import { getSession, useSession } from 'next-auth/react';
import React, { Dispatch, SetStateAction, useState } from 'react';

function Address({
  prop,
  setIsOpenModel,
  setIdAddress,
}: {
  prop: AddressUserProps;
  setIsOpenModel?: Dispatch<SetStateAction<boolean>>;
  setIdAddress?: Dispatch<SetStateAction<number | null>>;
}) {
  const { data: session } = useSession();

  return (
    <div className="min-w-72 md:min-w-80 w-full md:h-[115px] h-24 p-4 rounded border border-gray-4 dark:border-background-2 selection:border-primary bg-gray-3 dark:bg-background-2 flex flex-col relative">
      <div className="flex justify-between">
        <p className="caption-sm md:body-sm">{prop.address}</p>
        <span className="w-11 flex justify-between">
          <i>
            <IconMap icon="editShoping" />
          </i>
          <i className='cursor-pointer'
            onClick={() => {
              setIdAddress && setIdAddress(prop.id);
              setIsOpenModel && setIsOpenModel(true);
            }}
          >
            <IconMap icon="removeIconShoping" />
          </i>
        </span>
      </div>
      <div className="caption-sm md:body-sm text-gray-7 flex justify-between mt-2 absolute bottom-4 w-11/12">
        <span>{prop.titleAddress}</span>
        <span>{prop.meReciver ? session?.user.name : prop.nameReciver}</span>
        <span>{convertToPersianNumbers(prop.phone)}</span>
      </div>
    </div>
  );
}

export default Address;
