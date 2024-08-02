import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/header';
import styles from './layout.module.css';
export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
