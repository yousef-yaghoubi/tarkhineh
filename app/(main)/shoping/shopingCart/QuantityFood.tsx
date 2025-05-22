import { useCart } from '@/providers/shopingCardProvider';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';
import IconPlus from "@icons/plus.svg"
import IconMinuse from "@icons/minuse.svg"
import IconRemove from "@icons/remove.svg"

export default function QuantityFood({
  quantity,
  id,
}: {
  quantity: number;
  id: string;
}) {
  const { addQuantity, minuseQuantity, removeFromCart, cart, clearCart } = useCart();
  return (
    <div className="w-14 h-8 bg-tint-1 text-primary rounded mr-6 flex justify-around items-center">
      <i onClick={() => addQuantity(id)} className=" cursor-pointer">
        <IconPlus className="fill-primary" width="12" height="12"/>
      </i>
      <span>{convertToPersianNumbers(quantity.toString())}</span>
      <i
        className={`${quantity !== 1 ? 'flex' : 'hidden'} cursor-pointer`}
        onClick={() => minuseQuantity(id)}
      >
        <IconMinuse className="fill-primary" width="12" height="12"/>
      </i>
      <i
        className={`${quantity == 1 ? 'flex' : 'hidden'} cursor-pointer`}
        onClick={() => cart.length == 1 ? clearCart() : removeFromCart(id)}
      >
        <IconRemove width="16" height="16" className="fill-primary"/>
      </i>
    </div>
  );
}
