import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TodoList from '../../components/shared/todo-list';
import TodoService from '../../services/TodoService';

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  const todoService = new TodoService();

  useEffect(() => {
    const loadedTodos = todoService.getTodos();
    setTodos(loadedTodos);
  }, []);

  return (
    <Container>
      <TodoList todos={todos} isView={true} />
    </Container>
  );
};

export default AllTodos;
