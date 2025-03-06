'use client';
import React, { useContext } from 'react';
import MenuBar from './MenuBar';
import ContextProvider, { CountShowMenuBar } from './ContextProvider';

function ChildLayout({ children }: { children: React.ReactNode }) {
  const showChild = useContext(CountShowMenuBar);
  return (
    <section className="">
      <div className="mx-8 my-12 flex gap-6 md:hidden">
        {showChild?.count == 0 ? <MenuBar /> : children}
      </div>

      <div className="hidden md:flex mx-8 md:mx-10 lg:mx-20 xl:mx-28 my-12 gap-6">
        <MenuBar />
        {children}
      </div>
    </section>
  );
}

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContextProvider>
      <ChildLayout>
        {children}
      </ChildLayout>
    </ContextProvider>
  );
}

export default UserLayout;
