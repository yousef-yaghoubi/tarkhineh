'use client'
import Link from 'next/link';
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { iconsNav } from '@/lib/indexIcon';
import Cookies from 'js-cookie';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { navStats } from '@/lib/dataPublic';
import { useNavContext } from '@/providers/navProvider';

function ChildrenNavMobile() {
    const searchParams = useSearchParams();
    const query = Object.fromEntries(searchParams.entries());
    const firstLinks = navStats.slice(0, 1);
    const accordionLinks = navStats.filter((stats) => stats.subMain);
    const secondLinks = navStats.slice(2).filter((stats) => !stats.subMain);
    const pathName = usePathname();
    const router = useRouter()
    const { branchName, setOpen, setUrlMenu, sessionCookie, setShowChooseModal } = useNavContext()
    
    return (
        <>
            {firstLinks.map((stats) => {
                const IconNav = iconsNav[
                    stats.icon as keyof typeof iconsNav
                ] as React.ElementType;

                return (
                    <Link
                        prefetch
                        key={stats.id}
                        href={stats.route}
                        className={`md:border-0 mx-4 md:mx-0 flex h-[39px] justify-start items-center ${stats.id == 6
                            ? 'border-0'
                            : 'border-b border-gray-4 dark:border-gray-7'
                            } ${stats.route == pathName
                                ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary dark:border-primary'
                                : 'caption-sm sm:body-sm lg:body-xl'
                            }`}
                    >
                        <IconNav
                            width="16"
                            height="16"
                            className="ml-1 fill-background-1 dark:fill-gray-3"
                        />
                        {stats.label}
                    </Link>
                );
            })}

            <Accordion type="single" collapsible dir="rtl" className="mx-4">
                {accordionLinks.map((stats) => {
                    const IconNav = iconsNav[
                        stats.icon as keyof typeof iconsNav
                    ] as React.ElementType;
                    const isActive =
                        stats.subMain?.find((sub) => sub.routeQuery == pathName) ||
                        stats.route == pathName;

                    return (
                        <AccordionItem
                            key={stats.id}
                            value={`item-${stats.id}`}
                            className="border-none hover:!no-underline"
                        >
                            <AccordionTrigger
                                className={`pt-3 pb-2 hover:!no-underline border-b md:border-0 ${isActive
                                    ? '!border-b border-primary dark:border-primary caption-md sm:body-md text-primary'
                                    : 'caption-sm border-gray-4 dark:border-gray-7 sm:body-sm '
                                    }`}
                            >
                                <div className="flex items-center">
                                    <IconNav
                                        width="16"
                                        height="16"
                                        className="ml-1 fill-background-1 dark:fill-gray-3"
                                    />
                                    <span>
                                        {stats.label === 'شعبه'
                                            ? branchName
                                            : stats.subMain?.find(
                                                (sub) =>
                                                    sub.routeQuery === searchParams.get('type')
                                            )?.label || stats.label}
                                    </span>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent
                                dir="rtl"
                                className="flex justify-start flex-col"
                            >
                                {stats?.subMain?.map((sub) => {
                                    const isSubActive =
                                        stats.label !== 'شعبه'
                                            ? searchParams.get('type') === sub.routeQuery
                                            : pathName === sub.routeQuery;

                                    return (
                                        <Link
                                            key={sub.id}
                                            href={
                                                stats.label === 'شعبه'
                                                    ? sub.routeQuery
                                                    : {
                                                        pathname: '/menu',
                                                        query: { ...query, type: sub.routeQuery },
                                                    }
                                            }
                                            onClick={() => {
                                                if (stats.label === 'شعبه') {
                                                    Cookies.set('branches', `${sub.label}`, {
                                                        path: '/',
                                                    });
                                                }

                                                if (stats.label === 'منو') {
                                                    if (sessionCookie) {
                                                        router.push(`/menu?type=${sub.routeQuery}`);
                                                    } else {
                                                        setOpen(false);
                                                        setShowChooseModal(true);
                                                    }
                                                }

                                                setUrlMenu(sub.routeQuery);
                                            }}
                                            className={`w-fit mr-2 pt-2 caption-sm sm:body-sm ${isSubActive
                                                ? 'border-primary dark:border-primary'
                                                : ''
                                                }`}
                                        >
                                            {sub.label}
                                        </Link>
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>

            {secondLinks.map((stats) => {
                const IconNav = iconsNav[
                    stats.icon as keyof typeof iconsNav
                ] as React.ElementType;

                return (
                    <Link
                        prefetch
                        key={stats.id}
                        href={stats.route}
                        className={`md:border-0 mx-4 md:mx-0 flex h-[39px] justify-start items-center ${stats.id == 6
                            ? 'border-0'
                            : 'border-b border-gray-4 dark:border-gray-7'
                            } ${stats.route == pathName
                                ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary dark:border-primary'
                                : 'caption-sm sm:body-sm lg:body-xl'
                            }`}
                    >
                        <IconNav
                            width="16"
                            height="16"
                            className="ml-1 fill-background-1 dark:fill-gray-3"
                        />
                        {stats.label}
                    </Link>
                );
            })}
        </>
    )
}

export default ChildrenNavMobile