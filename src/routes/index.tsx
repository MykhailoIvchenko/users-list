import NotFoundPage from '../pages/NotFoundPage';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import HomeRedirect from '../components/HomeRedirect';
import { AppRoutes } from '../utils/enums';
import AboutPage from '../pages/AboutPage';
import UsersPage from '../pages/UsersPage';
import UserDetailsPage from '../pages/UserDetailsPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path={AppRoutes.HOME} element={<HomeRedirect />} />
      <Route path={AppRoutes.ABOUT} element={<AboutPage />} />
      <Route path={AppRoutes.USERS} element={<UsersPage />} />
      <Route path={`${AppRoutes.USERS}/:id`} element={<UserDetailsPage />} />

      <Route path='*' element={<NotFoundPage />} />
    </Route>
  ),
  {
    basename: '/users-list',
  }
);
