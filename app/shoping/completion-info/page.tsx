import React from 'react';
import ProgressShoping from '../shopingCart/ProgressShoping';
import SectionPage from './SectionPage';

function page() {
  return (
    <div className="flex flex-col items-center">
      <ProgressShoping />

      <SectionPage/>
    </div>
  );
}

export default page;
