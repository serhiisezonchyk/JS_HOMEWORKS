import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { editPhone, removePhone } from '../../store/slices/phone';
import EditModal from '../../components/EditModal';

const SingleItem = () => {
  const params = useParams();

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const phone = useSelector((state) =>
    state.phone.data.find((item) => item.id === params.numberId)
  );
  const handleDelete = () => {
    if (phone.id) {
      dispatch(removePhone(phone.id));
      navigate('/');
    }
  };

  if (!phone) return <Navigate to='/' />;
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Typography variant='h4'>{phone.name}</Typography>
        <Typography variant='body1'>Phone: {phone.phone}</Typography>

        <Box sx={{ mt: 2 }}>
          <Button variant='contained' color='primary' onClick={handleOpen}>
            Edit
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleDelete}
            sx={{ ml: 2 }}
          >
            Delete
          </Button>
        </Box>
      </Box>
      {open && (
        <EditModal
          data={phone}
          open
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default SingleItem;
