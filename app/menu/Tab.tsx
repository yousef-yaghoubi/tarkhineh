'use client';
import { navStats } from '@/lib/dataPublic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Tab() {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());

  return (
    <div className="w-full bg-gray-3 h-10 md:h-16 px-[21px] md:px-[108px] flex gap-4 md:gap-8 items-center">
      {navStats.at(2)?.subMain?.map((link) => (
        <Link
          href={{
            pathname: '/menu',
            query: { ...query, type: link.routeQuery },
          }}
          key={link.id}
          className={`h-full flex items-center ${link.routeQuery == searchParams.get('type') ? 'caption-lg md:h5 text-primary border-b md:border-b-2 border-primary' : 'caption-md md:body-xl text-gray-7'}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Tab;
