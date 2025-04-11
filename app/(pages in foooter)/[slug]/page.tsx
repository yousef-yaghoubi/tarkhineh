import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';
import NotFound from '../../not-found';
import { notFound } from 'next/navigation';
import { questionsFAQ, questionsPrivacy, questionsRuls } from '@/lib/dataPublic';

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
    <>
      <div className="w-full flex justify-center items-center my-3 md:my-6 ">
        <Accordion
          type="single"
          collapsible
          className="rounded md:rounded-md border border-gray-3 w-4/5"
        >
          {questions.map((quest) => (
            <AccordionItem key={quest.id} value={`item-${quest.id}`}>
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
    </>
  );
}

export default page;
