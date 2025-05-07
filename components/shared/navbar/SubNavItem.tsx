'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useNavContext } from '@/providers/navProvider';

type SubNavItemProps = {
  sub: {
    id: string | number;
    label: string;
    routeQuery: string;
  };
  statsLabel: string;
  isActive: boolean;
};

export const SubNavItem = ({
  sub,
  statsLabel,
  isActive,
}: SubNavItemProps) => {
  const router = useRouter();
  const {setOpen, sessionCookie, setShowChooseModal, setUrlMenu} = useNavContext()

  const className = `w-fit mr-2 pt-2 caption-sm sm:body-sm ${
    isActive ? 'border-primary dark:border-primary' : ''
  }`;

  if (statsLabel === 'شعبه') {
    return (
      <Link
        href={sub.routeQuery}
        onClick={() => {
          Cookies.set('branches', sub.label, { path: '/' });
          setUrlMenu(sub.routeQuery);
          setOpen(false)
        }}
        className={className}
      >
        {sub.label}
      </Link>
    );
  }

  return (
    <button
      onClick={() => {
        if (sessionCookie) {
          router.push(`/menu?type=${sub.routeQuery}`);
          setOpen?.(false);
        } else {
          setOpen?.(false);
          setShowChooseModal?.(true);
        }
        setUrlMenu(sub.routeQuery);
      }}
      className={className + ' text-start'}
    >
      {sub.label}
    </button>
  );
};
