import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDetails/AppDetails';
import Installation from '../pages/Installation/Installation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'apps', element: <Apps /> },
      { path: 'apps/:id', element: <AppDetails /> },
      { path: 'installation', element: <Installation /> },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
