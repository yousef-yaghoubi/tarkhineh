import Image from 'next/image'
import React from 'react'

function CardFoodBackDrop() {
    return (
        <div className="relative w-[52px] h-[52px] flex justify-center items-center">
            <Image
                src="/icons/backIcon1.png"
                alt="back1"
                width={58}
                height={58}
                className="absolute"
            />
            <Image
                src="/icons/backIcon2.png"
                alt="back1"
                width={42}
                height={42}
                className="absolute"
            />
            <Image
                src="/icons/gallery.png"
                alt="gallery"
                width={32}
                height={32}
                className="absolute"
            />
        </div>
    )
}

export default CardFoodBackDrop