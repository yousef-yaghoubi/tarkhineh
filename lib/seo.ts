// lib/seo.ts

import { getBaseUrl } from "./getBaseUrl";

export function generateBranchMetadata({
  name,
  address,
  phone,
  slug,
  image,
}: {
  name: string;
  address: string;
  phone: string;
  slug: string;
  image: string;
}) {
  return {
    title: `ترخینه | شعبه ${name}`,
    description: `آدرس، شماره تماس و اطلاعات شعبه ${name} رستوران ترخینه. ${address} - تماس با ما: ${phone}`,
    openGraph: {
      title: `ترخینه | شعبه ${name}`,
      description: `مشاهده موقعیت شعبه ${name} روی نقشه و اطلاعات تماس.`,
      url: `${getBaseUrl()}/branches/${slug}`,
      images: [
        {
          url: image || `${getBaseUrl()}/og/default-branch.jpg`,
          width: 1200,
          height: 630,
          alt: `${name} - ترخینه`,
        },
      ],
    },
    alternates: {
      canonical: `${getBaseUrl()}/branches/${slug}`,
    },
  };
}
