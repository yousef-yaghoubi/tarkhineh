import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '../main/ChangeTheme'

function NavBar() {
    return (
        <nav className='p-3 w-full flex justify-between items-center'>
            <div className='flex'>
                <Image alt='profil' src={'/image/profile.webp'} className='rounded-full' width={64} height={64} />
                <div className='flex flex-col justify-center mr-2'>
                    <span className='font-bold text-primary'>یوسف یعقوبی</span>
                    <span className='text-primary/70 font-semibold'>ادمین</span>
                </div>
            </div>

            <div>
                <ModeToggle/>
            </div>
        </nav>
    )
}

export default NavBar