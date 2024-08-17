import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';

const Layout = () => {
  return (
    <main className='h-screen'>
      <Outlet />
      <Toaster richColors closeButton/>
    </main>
  );
};

export default Layout;
