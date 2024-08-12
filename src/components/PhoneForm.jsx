import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createPhone } from '../store/slices/phone';

function PhoneForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.name && data.phone) {
      dispatch(createPhone(data));
      reset();
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex',flexDirection:'row', gap: '10px', marginBottom: '20px' }}
    >
      <TextField
        label='Name'
        variant='outlined'
        {...register('name', { required: 'Name is required' })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label='Phone'
        variant='outlined'
        {...register('phone', { required: 'Phone is required' })}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />
      <Button variant='contained' color='primary' type='submit'>
        Create
      </Button>
    </Box>
  );
}

export default PhoneForm;
