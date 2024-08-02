import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout';
import Home from '../pages/home';
import AllTodos from '../pages/all-todos';
import SingleTodo from '../pages/single-todo';
import NotFound from '../pages/not-found';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'all',
          element: <AllTodos />,
        },
        {
          path: ':todoId',
          element: <SingleTodo />,
        },
      ],
    },

    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
