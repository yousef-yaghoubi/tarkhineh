import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';
import { usePathname } from 'next/navigation';
import React from 'react';

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
function DropDownItem({stats}:{stats: Props}) {
  
  return (
    
  );
}

export default DropDownItem;
