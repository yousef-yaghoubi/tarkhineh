import { CartFoodForShoppingCart } from '@/types'
import React from 'react'
import { Price } from '../card/cardFood/CardFoodNecessary'
import QuantityFood from '@/app/(main)/shoping/shopingCart/QuantityFood'

function MapCard({ cart }: { cart: CartFoodForShoppingCart[] }) {
    return (
        <>
            {
                cart.map((food) => (
                    <div
                        key={food.name}
                        className="w-full flex justify-between px-2 items-center even:bg-gray-3 bg-gray-1 dark:bg-background-1 odd:dark:bg-background-2 h-14"
                    >
                        <div className="flex flex-col">
                            <span className="caption-md">{food.name}</span>
                            <span className="caption-sm text-gray-7 dark:text-gray-5">
                                <Price price={food.price} order={food.order} />
                            </span>
                        </div>
                        <QuantityFood id={food.id} quantity={food.quantity} />
                    </div>
                ))
            }
        </>
    )
}

export default MapCard