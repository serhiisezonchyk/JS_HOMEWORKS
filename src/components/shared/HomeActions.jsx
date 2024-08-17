import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import AddDialog from './AddDialog';

const HomeActions = ({ className, refetch }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={cn('flex gap-2 justify-end items-center', className)}>
        <Button variant='outline' onClick={() => setOpen(true)}>
          Add
        </Button>
        <Button size='icon' variant='outlined' onClick={() => refetch()}>
          <Loader2 size={20} />
        </Button>
      </div>
      {open && <AddDialog open={open} setOpen={setOpen} />}
    </>
  );
};

export default HomeActions;
