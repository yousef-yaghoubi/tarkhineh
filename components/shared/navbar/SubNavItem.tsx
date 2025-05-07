'use client';

import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
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
  const {
    setOpen,
    sessionCookie,
    setShowChooseModal,
    setUrlMenu,
  } = useNavContext();

  const baseClass = clsx(
    'w-fit mr-2 pt-2 caption-sm sm:body-sm text-start',
    isActive && 'border-primary dark:border-primary'
  );

  if (statsLabel === 'شعبه') {
    return (
      <Link
        href={sub.routeQuery}
        onClick={() => {
          Cookies.set('branches', sub.label, { path: '/' });
          setUrlMenu(sub.routeQuery);
          setOpen(false);
        }}
        className={baseClass}
      >
        {sub.label}
      </Link>
    );
  }

  return sessionCookie ? (
    <Link
      href={`/menu?type=${sub.routeQuery}`}
      onClick={() => {
        setUrlMenu(sub.routeQuery);
        setOpen(false);
      }}
      className={baseClass}
    >
      {sub.label}
    </Link>
  ) : (
    <button
      onClick={() => {
        setOpen(false);
        setShowChooseModal(true);
        setUrlMenu(sub.routeQuery);
      }}
      className={baseClass}
    >
      {sub.label}
    </button>
  );
};
