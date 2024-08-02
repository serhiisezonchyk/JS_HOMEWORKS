import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { Container } from '@mui/material';
import classNames from 'classnames';
const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  classNames(styles.navLink, { [styles.active]: isActive })
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={({ isActive }) =>
                  classNames(styles.navLink, { [styles.active]: isActive })
                }
                to='/all'
              >
                All Todos
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
