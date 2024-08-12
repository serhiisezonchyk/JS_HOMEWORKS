import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/not-found';
import Home from '../pages/home';
import SingleItem from '../pages/single-item';
import Layout from './layout';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ':numberId',
          element: <SingleItem />,
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
