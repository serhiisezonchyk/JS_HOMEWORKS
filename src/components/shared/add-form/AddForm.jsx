import { Button, Input, TextField } from '@mui/material';
import { Formik, useFormik } from 'formik';
import React from 'react';
import styles from './add-form.module.css';
import todoSchema from '../../../validation/todoSchema';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
const AddForm = ({ onSubmit, className }) => {
  const formik = useFormik({
    initialValues: todoSchema.cast(),
    validationSchema: todoSchema,
    onSubmit: (values) => {
      const newTodo = { id: uuidv4(), ...values };
      onSubmit(newTodo);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className={classNames(styles.form, className)}
    >
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
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        margin='normal'
      />
      <Button color='primary' variant='contained' type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default AddForm;
