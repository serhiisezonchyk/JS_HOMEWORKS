import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import HomePage from '@/pages/HomePage';
import SinglePost from '@/pages/SinglePost';
import Layout from './layouts/Layout';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: ':postId',
          element: <SinglePost />,
        },
        {
          path: '404',
          element: <NotFound />,
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
