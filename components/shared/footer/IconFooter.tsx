'use client';

import Image from 'next/image';
import Link from 'next/link';
interface Props{
    route: string,
    img: string,
    alt:string
}
function IconFooter({route, img, alt} : Props) {
  return (
    <Link href={route} className="ml-2 md:ml-4">
      <Image
        src={img}
        alt={alt}
        width={window.innerWidth < 770 ? 16 : 24}
        height={window.innerWidth < 770 ? 16 : 24}
      />
    </Link>
  );
}

export default IconFooter;
