import React from 'react';
import MenuBar from './MenuBar';

function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MenuBar/>
      {children}
    </div>
  );
}

export default UserLayout;
