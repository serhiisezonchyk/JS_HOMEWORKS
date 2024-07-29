import React, { useState } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const TodoBox = () => {
  const [tasks, setTasks] = useState([]);

  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleRemove = (id) => {
    setTasks((prevState) => prevState.filter((el) => el.id !== id));
  };
  const createTask = (newTask) => {
    setTasks((prevState) => [newTask, ...prevState]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) return;
    const newTask = { id: uuidv4(), value };
    createTask(newTask);
    setValue('');
  };

  return (
    <div>
      <div className='mb-3'>
        <form className='d-flex' onSubmit={handleSubmit}>
          <div className='me-3'>
            <input
              type='text'
              value={value}
              onChange={handleChange}
              required
              className='form-control'
              placeholder='I am going...'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            add
          </button>
        </form>
      </div>
      {tasks.map((el) => (
        <Item task={el} key={el.id} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default TodoBox;
