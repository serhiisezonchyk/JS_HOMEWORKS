import { Container } from '@mui/material';
import React from 'react';
import AddForm from '../../components/shared/add-form';
import TodoList from '../../components/shared/todo-list';
import styles from './home.module.css';
const Home = () => {
  return (
    <Container>
      <div className={styles.container}>
        <AddForm className={styles.addForm} />
        <TodoList className={styles.todoList} isView={false} />
      </div>
    </Container>
  );
};
export default Home;
