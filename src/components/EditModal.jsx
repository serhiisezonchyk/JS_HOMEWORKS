import { Box, Button, Modal, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editPhone } from '../store/slices/phone';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ data, open, handleClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...data },
  });
  const handleSave = (data) => {
    const { id, ...updatedData } = data;
    if (updatedData.name && updatedData.phone) {
      dispatch(editPhone({ id, updatedData }));
    }
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Box
          component='form'
          onSubmit={handleSubmit(handleSave)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '20px',
          }}
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
          <Box sx={{ gap: '10px', display: 'flex' }}>
            <Button variant='contained' color='primary' type='submit'>
              Save
            </Button>
            <Button
              variant='contained'
              color='error'
              type='button'
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
