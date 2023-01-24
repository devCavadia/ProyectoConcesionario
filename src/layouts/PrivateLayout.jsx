import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';
import React from 'react';

const PrivateLayout = ({ children }) => {
  return (
    <div className=' flex flex-col sm:flex-row w-screen h-screen'>
      <Sidebar/>
      <SidebarResponsive />
      <main className='flex w-full overflow-y-scroll items-center justify-center'>
        {children}
      </main>
    </div>
  );
};

export default PrivateLayout;
