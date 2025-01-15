import IconMap from "@/components/shared/IconMap"
import { convertToPersianNumbers } from "@/lib/convertNumberToPersian"

export default function QuantityFood({quantity}: {quantity: number}){
    return(
      <div className='w-14 h-8 bg-tint-1 text-primary rounded mr-6 flex justify-around items-center'>
        <IconMap icon='plusPrimary'/>
        <span>{convertToPersianNumbers(quantity.toString())}</span>
        <IconMap icon={quantity == 1 ? 'removePrimaryIcon' : 'minusePrimary'}/>
      </div>
    )
  }