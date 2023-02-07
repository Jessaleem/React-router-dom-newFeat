import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Client from '../pages/Client';
import Admin from '../pages/Admin';
import RootLayouts from '../Layouts/RootLayouts';
import AuthLayouts from '../Layouts/AuthLayouts';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ErrorPage from '../pages/ErrorPage';
import { loader as postLoader } from './loader';
import { postsAction } from './action';

export const router = createBrowserRouter([
  {
    element: <Wrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RootLayouts />,
        children: [
          {
            path: '/',
            element: <Home />,
            loader: postLoader,
            action: postsAction,
          },

          {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
              {
                path: 'client/:id',
                element: <Client />,
              },
              {
                path: 'admin/:id',
                element: <Admin />,
              },
            ],
          },
        ],
      },
      {
        element: <AuthLayouts />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'signup',
            element: <Signup />,
          },
        ],
      },
    ],
  },
]);

function Wrapper() {
  return <Outlet />;
}
