import SearchBox from '@/components/shared/SearchBox/SearchBox';
import React from 'react';
import SwiperDeatail from './SwiperDeatail';
import IconNote from '@icons/note.svg';
import { headers } from 'next/headers';
import SliderSwiper from '@/components/shared/swiper/SliderSwiper';
import { generateBranchMetadata } from '@/lib/seo';
import { getBaseUrl } from '@/lib/getBaseUrl';
import ShowComments from '@/components/shared/comment/ShowComments';
import Button from '@/components/shared/button/Button';

async function getBranchBySlug({ params }: { params: { slug: string } }) {
  try {
    const response = await fetch(
      `${getBaseUrl()}/api/branch?branchName=${params.slug}`,
      {
        next: {
          tags: ['branch'],
          revalidate: 3600,
        },
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch branch data');
    }
    
    const { branch: branchAction } = await response.json();
    return branchAction;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const branch = await getBranchBySlug({ params });
  

  if (!branch) {
    return {
      title: 'Branch Not Found',
      description: 'The requested branch could not be found.'
    };
  }

  return generateBranchMetadata({
    name: branch.name,
    address: branch.address,
    phone: JSON.stringify(branch.phones.phones[0]),
    slug: branch.nickName,
    image: JSON.stringify(branch.images.images[0]),
  });
}

async function fetchFoods(slug: string, filter: string) {
  try {
    const headersList = headers();
    const customHeaders = {
      cookie: headersList.get('cookie') || '',
    };
    
    const response = await fetch(
      `${getBaseUrl()}/api/food?branchName=${slug}&filter=${filter}&page=${1}`,
      {
        method: 'GET',
        headers: customHeaders,
        next: {
          tags: ['food'], 
          revalidate: 3600 },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filter} foods`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${filter} foods:`, error);
    return { foods: [] };
  }
}

async function DynamicBranches({
  params,
}: {
  params: Readonly<{ slug: string }>;
}) {
  const { slug } = params;
  
  // Fetch data in parallel
  const [specialOfferData, popularFoodsData, notIraniData, branchAction] = await Promise.all([
    fetchFoods(slug, 'specialOffer'),
    fetchFoods(slug, 'mostPopular'),
    fetchFoods(slug, 'non-Iranian'),
    getBranchBySlug({ params })
  ]);

  const specialOfferFoods = specialOfferData.foods || [];
  const popularFoods = popularFoodsData.foods || [];
  const notIraniFoods = notIraniData.foods || [];

  if (!branchAction) {
    return <div>Branch not found</div>;
  }

  return (
    <section className="flex flex-col items-center">
      <div className="w-full flex justify-center">
        <SearchBox classes="w-[90%] mt-4 sm:hidden" />
      </div>

      <SliderSwiper
        theme="White"
        title="پیشنهاد ویژه"
        foodSlides={specialOfferFoods}
      />

      <SliderSwiper
        theme="Primary"
        title="غذاهای محبوب"
        foodSlides={popularFoods}
      />

      <SliderSwiper
        theme="White"
        title="غذاهای غیر ایرانی"
        foodSlides={notIraniFoods}
      />

      <Button
        btn="stroke"
        className="w-[152px] h-8 md:w-[184px] md:h-10 caption-lg md:button-lg"
        theme="Primary"
        link="/menu"
      >
        <span className="flex items-center">
          <IconNote className="w-4 h-4 md:w-6 md:h-6 fill-primary" />
          مشاهده منوی کامل
        </span>
      </Button>

      <span className="h6 md:h5 lg:h4 mt-6 md:mt-9 lg:mt-12 mb-3 md:mb-[18px]">
        {`شعبه ${branchAction?.name}`}
      </span>

      <SwiperDeatail
        address={branchAction?.address as string}
        durition={'همه‌روزه از ساعت 12 تا 23 بجز روزهای تعطیل'}
        images={
          branchAction?.images as {
            images: {
              id: number;
              alt: string;
              img: string;
              imgMobile: string;
            }[];
          }
        }
        phones={branchAction?.phones as { phones: string[] }}
      />

      <ShowComments comments={branchAction?.commentsBranch} id={branchAction.id} type='branch'/>
    </section>
  );
}

export default DynamicBranches;