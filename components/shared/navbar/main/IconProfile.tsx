'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ProfileRoute } from '@/lib/dataPublic';
import { icons, iconsProfile } from '@/lib/indexIcon';
import React from 'react'
import IconArrowDown from '@icons/arrow-down.svg';
import Link from 'next/link';

function IconProfile({ icon, isActive }: {
    icon: keyof typeof icons,
    isActive: boolean
}) {
    const IconComponent = icons[icon];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:!outline-none focus:!border-none !outline-none !border-none flex items-center">
                <div className="w-[18px] md:w-6 h-[18px] md:h-6 flex justify-center items-center relative">
                    <IconComponent
                        fill={isActive ? 'white' : '#417F56'}
                        width="24"
                        height="24"
                    />
                </div>
                <IconArrowDown
                    fill={isActive ? 'white' : '#417F56'}
                    width="16"
                    height="16"
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className={`bg-white dark:bg-background-2 dark:border-background-1 ml-4 mt-2`}
            >
                {ProfileRoute.map((route) => {
                    const IconProf = iconsProfile[route.icon as keyof typeof iconsProfile] as React.ElementType;
                    return (
                        <DropdownMenuItem asChild
                            dir="rtl"
                            key={route.id}
                            className="hover:!bg-slate-100 dark:hover:!bg-background-1"
                        >
                            <Link href={route.url}>
                                {IconProf && (
                                    <IconProf
                                        className="fill-black dark:fill-white"
                                        width="16"
                                        height="16"
                                    />
                                )}
                                <span className="pr-1">{route.title}</span>
                            </Link>
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default IconProfile