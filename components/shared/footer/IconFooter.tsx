import Image from 'next/image';
import Link from 'next/link';
interface Props {
  route: string;
  img: string;
  alt: string;
}
function IconFooter({ route, img, alt }: Props) {
  return (
    <Link href={route} className="ml-2 md:ml-4 w-[18px] md:w-6 h-[18px] md:h-6 relative">
      <Image
        src={img}
        alt={alt}
        className="w-[18px] md:w-6 h-[18px] md:h-6"
        fill
      />
    </Link>
  );
}

export default IconFooter;
