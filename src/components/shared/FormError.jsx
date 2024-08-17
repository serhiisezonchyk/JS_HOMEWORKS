import { cn } from '@/lib/utils';
import React from 'react';

const FormError = ({ formState, field }) => {
  return (
    <span
      className={cn(
        'absolute -bottom-6 font-light text-center w-full text-sm text-destructive',
        {
          'opacity-0': !formState.errors[field],
          'opacity-100 transition-all duration-300 ease-in-out':
            formState.errors[field],
        }
      )}
    >
      {formState?.errors[field]?.message || 'Error'}
    </span>
  );
};

export default FormError;
