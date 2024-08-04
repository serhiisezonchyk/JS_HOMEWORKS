import { Container } from '@mui/material';
import React from 'react';
import TodoList from '../../components/shared/todo-list';

const AllTodos = () => {

  return (
    <Container>
      <TodoList isView={true} />
    </Container>
  );
};

export default AllTodos;
