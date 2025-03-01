
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import { AddressUserProps } from '@/lib/indexType';
import { useSession } from 'next-auth/react';
import React, { Dispatch, SetStateAction } from 'react';
import { toast } from 'sonner';
import { useOrder } from '../ShopingProvider';
import IconEdit from "@icons/edit-2.svg"
import IconRemove from "@icons/remove.svg"
function Address({
  prop,
  setIsOpenModel,
  setIdAddress,
  idSelectedAddress,
  setIdSelectedAddress
}: {
  prop: AddressUserProps;
  setIsOpenModel?: Dispatch<SetStateAction<boolean>>;
  setIdAddress?: Dispatch<SetStateAction<number | null>>;
  idSelectedAddress?: number | null;
  setIdSelectedAddress?: Dispatch<SetStateAction<number | null>>;
}) {
  const { data: session } = useSession();
  const {order ,updateDelivery} = useOrder()

  return (
    <div className={`min-w-72 md:min-w-80 w-full h-fit p-4 cursor-pointer rounded border ${order.delivery.type == 'delivery' && order.delivery.address == prop.address ? 'border-primary' : 'border-gray-4 dark:border-background-2'} bg-gray-3 dark:bg-background-2 flex flex-col relative`} onClick={() => {
      setIdSelectedAddress && setIdSelectedAddress(prop.id),
      updateDelivery({type: "delivery", address: prop.address})
      }}>
      <div className="flex justify-between">
        <p className="caption-sm md:body-sm">{prop.address}</p>
        <span className="w-11 flex justify-between">
          <i onClick={()=> toast.warning('این عمل در دسترس نیست.')} className='cursor-pointer h-fit'>
            <IconEdit width="24" height="24" className="!fill-[#353535] dark:!fill-gray-2"/>
          </i>
          <i className='cursor-pointer h-fit'
            onClick={() => {
              setIdAddress && setIdAddress(prop.id);
              setIsOpenModel && setIsOpenModel(true);
            }}
          >
            <IconRemove width="24" height="24" className="!fill-[#353535] dark:!fill-gray-2"/>
          </i>
        </span>
      </div>
      <div className="caption-sm md:body-sm text-gray-7 flex justify-between mt-2 w-11/12">
        <span>{prop.titleAddress}</span>
        <span>{prop.meReciver ? session?.user.name : prop.nameReciver}</span>
        <span>{convertToPersianNumbers(prop.phone)}</span>
      </div>
    </div>
  );
}

export default Address;
