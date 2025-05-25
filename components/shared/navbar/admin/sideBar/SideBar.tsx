'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/public/logoGreenBig.webp'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { iconSideBarAdmin } from '@/lib/indexIcon'
const SideBarElements = [
    { id: 1, title: 'صفحه اصلی', route: '/', icon: "IconHome" },
    { id: 2, title: "پنل ادمین", route: "/admin", icon: "IconDashboard" },
    { id: 3, title: "محصولات", route: "/admin/foods", icon: "IconFoods" },
    { id: 4, title: "کامنت ها", route: "/admin/comments", icon: "IconComments" },
    { id: 5, title: "کاربران", route: "/admin/users", icon: "IconUsers" },

]
function SideBar() {
    const pathName = usePathname();
    const classNameLink = (link: string) => {
        return pathName === link ? 'font-bold bg-tint-3 dark:bg-primary text-base md:text-lg' : 'text-sm md:text-base font-normal';
    }
    const classNameIcon = (link: string) => {
        return pathName === link ? 'w-6 h-6 ml-2 fill-shade-2 dark:fill-tint-3' : 'w-5 h-5 ml-2';
    }

    const classNameBase = 'w-full h-10 pr-2 flex rounded items-center'

    return (
        <aside className='hidden lg:flex bg-white fixed dark:bg-background-2 h-[100dvh] min-h-96 p-5 w-1/6 min-w-48 flex-col'>
            <div className='p-2 rounded'>
                <div className='w-full h-[10dvh] min-h-[51px] relative '>
                    <Image alt='logo' src={logo} className='' fill />
                </div>
            </div>

            <ul className=' mt-5 gap-y-2 flex flex-col'>
                {SideBarElements.map((link) => {
                    const Icon = iconSideBarAdmin[
                        link.icon as keyof typeof iconSideBarAdmin
                    ] as React.ElementType;
                    return (
                        <li key={link.id} className={clsx(classNameLink(link.route),classNameBase, 'transition-all duration-300')}>
                            {Icon && <Icon className={clsx(classNameIcon(link.route))} />}
                            <Link href={link.route} className='w-full'>{link.title}</Link>
                        </li>
                    )
                }
                )}
            </ul>

        </aside>
    )
}

export default SideBar