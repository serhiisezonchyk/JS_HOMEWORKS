import { Loader2 } from 'lucide-react';
import React from 'react';

const Loader = ({ className }) => {
  return (
    <div className={className}>
      <Loader2 size={24} className='animate-spin mx-auto my-0' />
    </div>
  );
};

export default Loader;
