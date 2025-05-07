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
import { usePathname, useSearchParams } from 'next/navigation';
import { navStats } from '@/lib/dataPublic';
import { useNavContext } from '@/providers/navProvider';
import clsx from 'clsx';
import { SubNavItem } from './SubNavItem';

function ChildrenNavMobile() {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const firstLinks = navStats.slice(0, 1);
    const accordionLinks = navStats.filter((stats) => stats.subMain);
    const secondLinks = navStats.slice(2).filter((stats) => !stats.subMain);
    const { branchName } = useNavContext()

    const LinkCustom = ({ linkState }: {
        linkState: {
            id: number;
            label: string;
            route: string;
            icon: string;
            subMain?: undefined;
        } | {
            id: number;
            label: string;
            route: string;
            subMain: {
                id: number;
                label: string;
                routeQuery: string;
            }[];
            icon: string;
        }
    }) => {
        const IconNav = iconsNav[
            linkState.icon as keyof typeof iconsNav
        ] as React.ElementType;
        return (
            <Link
                prefetch
                key={linkState.id}
                href={linkState.route}
                className={`md:border-0 mx-4 md:mx-0 flex h-[39px] justify-start items-center ${linkState.id == 6
                    ? 'border-0'
                    : 'border-b border-gray-4 dark:border-gray-7'
                    } ${linkState.route == pathName
                        ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary dark:border-primary'
                        : 'caption-sm sm:body-sm lg:body-xl'
                    }`}
            >
                <IconNav
                    width="16"
                    height="16"
                    className="ml-1 fill-background-1 dark:fill-gray-3"
                />
                {linkState.label}
            </Link>
        )
    }
    return (
        <>
            {firstLinks.map((stats) => (
                <LinkCustom linkState={stats} key={stats.id} />
            ))}

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
                                className={clsx('pt-3 pb-2 hover:!no-underline border-b md:border-0', isActive
                                    ? '!border-b border-primary dark:border-primary caption-md sm:body-md text-primary'
                                    : 'caption-sm border-gray-4 dark:border-gray-7 sm:body-sm ')}
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

                            <AccordionContent dir="rtl" className="flex justify-start flex-col">
                                {stats?.subMain?.map((sub) => {
                                    const isSubActive =
                                        stats.label !== 'شعبه'
                                            ? searchParams.get('type') === sub.routeQuery
                                            : pathName === sub.routeQuery;

                                    return (
                                        <SubNavItem
                                            key={sub.id}
                                            sub={sub}
                                            statsLabel={stats.label}
                                            isActive={isSubActive}
                                        />
                                    );
                                })}
                            </AccordionContent>

                        </AccordionItem>
                    );
                })}
            </Accordion>

            {secondLinks.map((stats) => (
                <LinkCustom linkState={stats} key={stats.id} />
            ))}

        </>
    )
}

export default ChildrenNavMobile