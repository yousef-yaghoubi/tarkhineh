import React from 'react';
import MenuBar from './MenuBar';

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-8 md:mx-16 lg:mx-[108px] my-12 flex gap-6">
      <MenuBar />
      {children}
    </section>
  );
}

export default UserLayout;
