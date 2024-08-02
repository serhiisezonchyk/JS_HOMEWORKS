import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddForm from '../../components/shared/add-form';
import TodoList from '../../components/shared/todo-list';
import TodoService from '../../services/TodoService';
import styles from './home.module.css';
const Home = () => {
  const [todos, setTodos] = useState([]);
  const todoService = new TodoService();

  useEffect(() => {
    const loadedTodos = todoService.getTodos();
    setTodos(loadedTodos);
  }, []);

  const handleCreateTodo = (todo) => {
    todoService.addTodo(todo);
    setTodos(todoService.getTodos());
  };

  const handleToggle = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todoService.updateTodo(id, { completed: !todo.completed });
    setTodos(todoService.getTodos());
  };

  const handleDelete = (id) => {
    todoService.deleteTodo(id);
    setTodos(todoService.getTodos());
  };

  const handleStatusChange = (id, status) => {
    todoService.updateTodo(id, { status });
    setTodos(todoService.getTodos());
  };

  return (
    <Container>
      <div className={styles.container}>
        <AddForm onSubmit={handleCreateTodo} className={styles.addForm} />
        <TodoList
          todos={todos}
          className={styles.todoList}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
          isView={false}
        />
      </div>
    </Container>
  );
};
export default Home;
