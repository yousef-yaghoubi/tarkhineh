'use client';

interface Props {
  id: number;
  label: string;
  route: string;
  subMain?: SubMain[];
}
interface SubMain {
  id: number;
  label: string;
  route?: string;
  routeQuery?: string;
}

import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { usePathname } from 'next/navigation';


export function DropDown({ stats }: { stats: Props }) {
  const params = usePathname();
  const subHome = stats.subMain?.find((sub) => sub.routeQuery == params);
  const mainHome = stats.route == params;

  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`rounded-none ${
              subHome || mainHome
                ? 'caption-md sm:body-lg activeLink lg:activeLink !border-b border-primary'
                : 'caption-sm sm:body-sm lg:body-xl'
            }`}
          >
            {subHome?.label || stats.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!w-32 flex flex-col p-5 bg-white dark:bg-background-2 ">
            {stats.subMain?.map((sub) => (
              <NavigationMenuLink
                href={sub.routeQuery || sub.route}
                key={sub.label}
              >
                {sub.label}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default DropDown;
