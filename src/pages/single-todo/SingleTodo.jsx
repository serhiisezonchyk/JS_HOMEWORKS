import { Button, Container, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import todoSchema from '../../validation/todoSchema';
import { toast } from 'react-toastify';
import styles from './single-todo.module.css';
import { TodoContext } from '../../context/TodoContext';
const SingleTodo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);
  const { updateTodo, getTodoById } = useContext(TodoContext);

  useEffect(() => {
    const todo = getTodoById(params.todoId);
    if (todo) {
      setTodo(todo);
    } else {
      navigate('/');
    }
  }, []);

  const formik = useFormik({
    initialValues: todo || todoSchema.cast(),
    enableReinitialize: true,
    validationSchema: todoSchema,
    onSubmit: (values) => {
      updateTodo(params.todoId, values);
      toast.success('Success');
      navigate('/');
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <TextField
          fullWidth
          id='title'
          name='title'
          label='Title'
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          margin='normal'
        />
        <TextField
          fullWidth
          id='description'
          name='description'
          label='Description'
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          margin='normal'
        />
        <Select
          id='status'
          name='status'
          value={formik.values.status}
          size='small'
          onChange={formik.handleChange}
          displayEmpty
          fullWidth
        >
          <MenuItem value='completed'>Completed</MenuItem>
          <MenuItem value='not-completed'>Not Completed</MenuItem>
          <MenuItem value='pending'>Pending</MenuItem>
        </Select>
        <Button color='primary' variant='contained' type='submit'>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SingleTodo;
