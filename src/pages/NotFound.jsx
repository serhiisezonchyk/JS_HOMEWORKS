import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container h-screen w-full content-center text-center space-y-2'>
      <h1 className='text-2xl'>Page not found!</h1>
      <Button
        variant='outline'
        asChild
        className='text-slate-500 hover:text-slate-700'
      >
        <Link to='/' className=''>
          Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
