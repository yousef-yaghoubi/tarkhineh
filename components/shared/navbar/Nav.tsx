'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Modal from '../Modal';
import { branchs, navStats } from '@/lib/dataPublic';
import CardTarkhineGardi from '../card/CardTarkhineGardi';
import { iconsNav } from '@/lib/indexIcon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import IconNavbar from '@icons/menu.svg';
import Link from 'next/link';

function Nav({ menuBar }: { menuBar: boolean }) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const sessionCookie = Cookies.get('branchs');
  const [branchName, setBranchName] = useState('شعبه');
  const [urlMenu, setUrlMenu] = useState<string>();
  const query = Object.fromEntries(searchParams.entries());
  const [showChooseModal, setShowChooseModal] = useState(false);
  const closeModal = () => setShowChooseModal(false);
  const firstLinks = navStats.slice(0, 1);
  const accordionLinks = navStats.filter((stats) => stats.subMain);
  const secondLinks = navStats.slice(2).filter((stats) => !stats.subMain);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  useEffect(() => {
    if (!!sessionCookie) setBranchName(`شعبه ${sessionCookie}`);
  }, [sessionCookie]);

  return (
    <div
      className={
        !menuBar
          ? 'flex flex-row justify-between font-normal text-xs md:text-base w-full text-gray-7 dark:text-gray-4'
          : 'flex flex-col justify-start text-gray-7 dark:text-gray-4 overflow-y-scroll'
      }
    >
      {menuBar ? (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:!hidden" asChild>
            <IconNavbar width="24" height="24" className="fill-primary" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-white dark:bg-[#1c1b22] border-none p-0 menuMobile"
          >
            <>
              <Image
                src={'/image/topFrameMenuMobile.jpg'}
                alt="header menu"
                fill
                className="w-full !h-[94px] md:hidden !relative mb-2 z-10"
              />
              {firstLinks.map((stats) => {
                const IconNav = iconsNav[
                  stats.icon as keyof typeof iconsNav
                ] as React.ElementType;

                return (
                  <Link
                    prefetch
                    key={stats.id}
                    href={stats.route}
                    className={`md:border-0 mx-4 md:mx-0 flex h-[39px] justify-start items-center ${
                      stats.id == 6 ? 'border-0' : 'border-b border-gray-4 '
                    } ${
                      stats.route == pathName
                        ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary'
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
                        className={`pt-3 pb-2 hover:!no-underline border-b md:border-0 ${
                          isActive
                            ? '!border-b border-primary caption-md sm:body-md text-primary'
                            : 'caption-sm border-gray-4 sm:body-sm '
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
                                  Cookies.set('branchs', `${sub.label}`, {
                                    path: '/',
                                  });
                                }
                              }}
                              className={`w-fit mr-2 pt-2 caption-sm sm:body-sm ${
                                isSubActive ? 'text-primary' : ''
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
                    className={`md:border-0 mx-4 md:mx-0 flex h-[39px] justify-start items-center ${
                      stats.id == 6 ? 'border-0' : 'border-b border-gray-4 '
                    } ${
                      stats.route == pathName
                        ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary'
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
          </SheetContent>
        </Sheet>
      ) : (
        <NavigationMenu dir="rtl" className="max-w-full">
          <NavigationMenuList className="justify-around">
            {navStats.map((stats) =>
              stats.subMain ? (
                <NavigationMenuItem key={stats.id} defaultValue={'aa'}>
                  <NavigationMenuTrigger
                    className={`rounded-none ${
                      stats.subMain?.find(
                        (sub) => sub.routeQuery == pathName
                      ) || stats.route == pathName
                        ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary'
                        : 'caption-sm sm:body-sm lg:body-xl'
                    }`}
                  >
                    {stats.label == 'شعبه'
                      ? branchName
                      : stats.subMain?.find(
                          (sub) => sub.routeQuery == searchParams.get('type')
                        )?.label || stats.label}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="!w-52 flex flex-col py-2 bg-white dark:bg-background-2">
                    {stats.subMain?.map((sub) =>
                      stats.label == 'منو' ? (
                        <button
                          key={sub.label}
                          className="py-[7px] px-5 hover:bg-slate-100 dark:hover:bg-background-1 flex"
                          onClick={() => {
                            !!sessionCookie
                              ? router.push(`/menu?type=${sub.routeQuery}`)
                              : setShowChooseModal(true);
                            setUrlMenu(sub.routeQuery);
                          }}
                        >
                          {sub.label}
                        </button>
                      ) : (
                        <NavigationMenuLink
                          href={sub.routeQuery}
                          key={sub.label}
                          className="py-1 px-5 hover:bg-slate-100 dark:hover:bg-background-1"
                          onClick={() =>
                            stats.label == 'شعبه' &&
                            Cookies.set('branchs', `${sub.label}`, {
                              path: '/',
                            })
                          }
                        >
                          {sub.label}
                        </NavigationMenuLink>
                      )
                    )}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={stats.id}>
                  {/* <Link href={stats.route} legacyBehavior passHref> */}
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} md:border-0 mx-4 md:mx-0 ${
                      stats.id == 6 ? 'border-0' : 'border-b border-gray-4 '
                    } ${
                      stats.route == pathName
                        ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary'
                        : 'caption-sm sm:body-sm lg:!body-xl'
                    }`}
                    asChild
                  >
                    <Link href={stats.route} prefetch>
                      {stats.label}
                    </Link>
                  </NavigationMenuLink>
                  {/* </Link> */}
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
      )}

      <Modal
        isOpen={showChooseModal}
        onClose={closeModal}
        title={<h3 className="caption-lg md:h7">انتخاب شعبه</h3>}
        desc="برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:"
      >
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
          {branchs.map((branch) => (
            <CardTarkhineGardi
              key={branch.id}
              showType="small"
              desc={branch.desc}
              title={branch.title}
              img={branch.images[0].src}
              id={branch.id}
              onClickCustom={() => {
                Cookies.set('branchs', branch.title);
                closeModal();
                router.push(`/menu?type=${urlMenu}`);
              }}
            />
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default Nav;
