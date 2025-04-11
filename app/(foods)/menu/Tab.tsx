'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function Tab({
  objectLinks,
}: {
  objectLinks:
    | { id: number; label: string; routeQuery: string }[]
    | { id: number; label: string; url: string }[];
}) {
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const typeQuery = searchParams.get('type') || 'all';
  const pathName = usePathname();

  return (
    <div className="w-full bg-gray-3 dark:bg-background-2 h-10 md:h-16 px-[21px] md:px-[108px] flex gap-4 md:gap-8 items-center">
      {objectLinks.map((link) =>
        'routeQuery' in link ? (
          <Link
            href={{
              pathname: '/menu',
              query: { ...query, type: link?.routeQuery },
            }}
            key={link.id}
            className={`h-full flex items-center ${link.routeQuery == typeQuery ? 'caption-lg md:h5 text-primary border-b md:border-b-2 border-primary' : 'caption-md md:body-xl text-gray-7'}`}
          >
            {link.label}
          </Link>
        ) : (
          <Link
            href={link.url}
            key={link.id}
            className={`h-full flex items-center ${link.url == pathName ? 'caption-lg md:h5 text-primary border-b md:border-b-2 border-primary' : 'caption-md md:body-xl text-gray-7'}`}
          >
            {link.label}
          </Link>
        )
      )}
    </div>
  );
}

export default Tab;
