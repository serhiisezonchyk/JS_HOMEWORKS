import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePhone, selectPhones } from '../../store/slices/phone';
import PhoneList from '../../components/List';
import PhoneForm from '../../components/PhoneForm';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const phones = useSelector(selectPhones);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(removePhone(id));
  };
  const handleViewMore = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div>
      <h1>Phone List</h1>
      <PhoneForm />
      <PhoneList
        data={phones}
        listItemProps={{
          primary: 'name',
          secondary: 'phone',
        }}
        onDelete={handleDelete}
        onViewMore={handleViewMore}
      />
    </div>
  );
};

export default Home;
