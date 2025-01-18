import IconMap from '@/components/shared/IconMap';
import { useCart } from '@/components/shared/shopingCardProvider';
import { convertToPersianNumbers } from '@/lib/convertNumberToPersian';

export default function QuantityFood({
  quantity,
  id,
}: {
  quantity: number;
  id: number;
}) {
  const { addQuantity, minuseQuantity, removeFromCart, cart, clearCart } = useCart();
  console.log(cart.length)
  return (
    <div className="w-14 h-8 bg-tint-1 text-primary rounded mr-6 flex justify-around items-center">
      <i onClick={() => addQuantity(id)} className=" cursor-pointer">
        <IconMap icon="plusPrimary" />
      </i>
      <span>{convertToPersianNumbers(quantity.toString())}</span>
      <i
        className={`${quantity !== 1 ? 'flex' : 'hidden'} cursor-pointer`}
        onClick={() => minuseQuantity(id)}
      >
        <IconMap icon={'minusePrimary'} />
      </i>
      <i
        className={`${quantity == 1 ? 'flex' : 'hidden'} cursor-pointer`}
        onClick={() => cart.length == 1 ? clearCart() : removeFromCart(id)}
      >
        <IconMap icon={'removePrimaryIcon'} />
      </i>
    </div>
  );
}
