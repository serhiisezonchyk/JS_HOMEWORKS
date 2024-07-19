import React from 'react';

const LogItem = ({ item, handleDelete }) => {
  return (
    <button
      type='button'
      className='list-group-item list-group-item-action'
      onClick={() => handleDelete(item.id)}
    >
      {item.value}
    </button>
  );
};

export default LogItem;
