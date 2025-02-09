import React from 'react';
import ProgressShoping from './ProgressShoping';

import RenderCardFoods from './RenderCardFoods';

function page() {
  return (
    <>
      <section className="flex flex-col xl:flex-row justify-around items-center xl:items-start w-11/12 max-w-[1300px] mb-12">
        <RenderCardFoods/>
      </section>
    </>
  );
}

export default page;
