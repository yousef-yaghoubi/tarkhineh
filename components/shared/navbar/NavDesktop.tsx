'use client';
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
import { navStats } from '@/lib/dataPublic';
import Link from 'next/link';
import ModalBranch from './ModalBranch';
import { useNavContext } from '@/providers/navProvider';

function NavDesktop() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { branchName, setShowChooseModal, showChooseModal, urlMenu, setUrlMenu, sessionCookie} = useNavContext()
  
  return (
    <div
      className='flex flex-row justify-between font-normal text-xs md:text-base w-full text-gray-7 dark:text-gray-4'
    >
      <NavigationMenu dir="rtl" className="max-w-full">
        <NavigationMenuList className="justify-around">
          {navStats.map((stats) =>
            stats.subMain ? (
              <NavigationMenuItem key={stats.id} defaultValue={'aa'}>
                <NavigationMenuTrigger
                  className={`rounded-none ${stats.subMain?.find(
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
                          if (sessionCookie) {
                            router.push(`/menu?type=${sub.routeQuery}`);
                          } else {
                            setShowChooseModal(true);
                          }
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
                          Cookies.set('branches', `${sub.label}`, {
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
                  className={`${navigationMenuTriggerStyle()} md:border-0 mx-4 md:mx-0 ${stats.id == 6 ? 'border-0' : 'border-b border-gray-4 '
                    } ${stats.route == pathName
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

      <ModalBranch closeModal={() => setShowChooseModal(false)} showChooseModal={showChooseModal} urlMenu={urlMenu} />
    </div>
  );
}

export default NavDesktop;
