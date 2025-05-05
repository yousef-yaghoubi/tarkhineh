'use client'
import { toast } from "sonner";
import Button from "../../button/Button";
import { FoodType } from "@/types";

export function RenderAddToCartButton({ className, item }: { className: string, item: FoodType }) {
    return (
        <Button
            btn="fill"
            theme="Primary"
            className={className}
            shopingCard={item}
            onClickCustom={() => toast.success('کالا به سبدخرید اضافه شد.')}
        >
            افزودن به سبد خرید
        </Button>
    )
};