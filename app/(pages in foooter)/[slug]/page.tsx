import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import {
  questionsFAQ,
  questionsPrivacy,
  questionsRuls,
} from '@/lib/dataPublic';
import { getBaseUrl } from '@/lib/getBaseUrl';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {

  if (
    params.slug !== 'FAQ' &&
    params.slug !== 'ruls' &&
    params.slug !== 'privacy'
  ) {
    return {
      title: "ترخینه |  صفحه مورد نظر پیدا نشد",
      description: "متأسفیم، صفحه‌ای که به دنبال آن بودید پیدا نشد. لطفاً از منو یا جستجو استفاده کنید.",
      robots: "noindex, nofollow",
      openGraph: {
        title: "ترخینه |  صفحه مورد نظر پیدا نشد",
        description: "متأسفیم، صفحه‌ای که به دنبال آن بودید پیدا نشد.",
        url: "/logoGreenBig.png",
        siteName: "رستوران‌های زنجیره‌ای ترخینه",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "ترخینه |  صفحه مورد نظر پیدا نشد",
        description: "متأسفیم، صفحه‌ای که به دنبال آن بودید پیدا نشد.",
      },
    }
  }

  return {
    title: `ترخینه | ${params.slug == 'FAQ' ? 'سوالات متداول' : params.slug == 'privacy' ? 'حریم خصوصی' : 'قوانین و شرایط'}`,
    description: `${params.slug == 'FAQ' ? 'جواب تمام سوالات پرتکرار درباره رستوران ترخینه، سفارش آنلاین غذا، روش‌های پرداخت، ارسال، پیگیری سفارش و خدمات مشتریان را اینجا پیدا کنید.' : params.slug == 'privacy' ? 'در ترخینه به حفظ حریم خصوصی شما اهمیت می‌دهیم. با مطالعه این صفحه با نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شخصی شما آشنا شوید.' : 'با قوانین و شرایط استفاده از خدمات رستوران ترخینه آشنا شوید. رعایت این قوانین به ارائه خدمات بهتر و تجربه‌ای لذت‌بخش برای شما کمک می‌کند.'}`,
    openGraph: {
      title: `ترخینه | ${params.slug == 'FAQ' ? 'سوالات متداول' : params.slug == 'privacy' ? 'حریم خصوصی' : 'قوانین و شرایط'}`,
      description: `${params.slug == 'FAQ' ? 'جواب تمام سوالات پرتکرار درباره رستوران ترخینه، سفارش آنلاین غذا، روش‌های پرداخت، ارسال، پیگیری سفارش و خدمات مشتریان را اینجا پیدا کنید.' : params.slug == 'privacy' ? 'در ترخینه به حفظ حریم خصوصی شما اهمیت می‌دهیم. با مطالعه این صفحه با نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شخصی شما آشنا شوید.' : 'با قوانین و شرایط استفاده از خدمات رستوران ترخینه آشنا شوید. رعایت این قوانین به ارائه خدمات بهتر و تجربه‌ای لذت‌بخش برای شما کمک می‌کند.'}`,
      locale: 'fa_IR',
      type: 'website',
      url: `${getBaseUrl()}/${params.slug}`,
      images: [
        {
          url: '/logoGreenBig.png',
          width: 1200,
          height: 630,
          alt: params.slug,
        },
      ],
    },
    alternates: {
      canonical: `${getBaseUrl()}/${params.slug}`,
    },
  };
}

function page({ params }: { params: { slug: string } }) {
  if (
    params.slug !== 'FAQ' &&
    params.slug !== 'ruls' &&
    params.slug !== 'privacy'
  ) {
    notFound();
  }

  let questions = [];

  switch (params.slug) {
    case 'FAQ':
      questions = questionsFAQ;
      break;

    case 'privacy':
      questions = questionsPrivacy;
      break;

    case 'ruls':
      questions = questionsRuls;
      break;
  }

  return (
    <div className="w-full flex justify-center items-center my-3 md:my-6">
      <Accordion
        type="multiple"
        className="rounded md:rounded-md border border-gray-3 dark:border-background-2 w-4/5"
      >
        {questions.map((quest) => (
          <AccordionItem
            key={quest.id}
            value={`item-${quest.id}`}
            className="border-gray-3 dark:border-background-2"
          >
            <AccordionTrigger className="caption-md md:body-xl text-primary border-none hover:!no-underline px-3 md:px-4">
              {quest.question}
            </AccordionTrigger>
            <AccordionContent className="caption-sm md:body-md px-7">
              {quest.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default page;
