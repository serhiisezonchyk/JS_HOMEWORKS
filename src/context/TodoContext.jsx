import { createContext, useEffect, useState } from 'react';
import TodoService from '../services/TodoService';

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const todoService = new TodoService();

  useEffect(() => {
    const loadedTodos = todoService.getTodos();
    setTodos(loadedTodos);
  }, []);

  const createTodo = (todo) => {
    todoService.addTodo(todo);
    setTodos(todoService.getTodos());
  };

  const deleteTodo = (id) => {
    todoService.deleteTodo(id);
    setTodos(todoService.getTodos());
  };

  const changeStatus = (id, status) => {
    todoService.updateTodo(id, { status });
    setTodos(todoService.getTodos());
  };

  const updateTodo = (todoId, data) => {
    todoService.updateTodo(todoId, data);
    setTodos(todoService.getTodos());
  };
  
  const getTodoById = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        createTodo,
        deleteTodo,
        changeStatus,
        updateTodo,
        getTodoById,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
