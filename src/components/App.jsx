import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'components/redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import css from './AppBar/AppBar.module.css';

const HomePage = lazy(() => import('../Pages/Home/HomePage'));
const RegisterPage = lazy(() => import('../Pages/Register/Register'));
const LoginPage = lazy(() => import('../Pages/Login/Login'));
const PhonebookPage = lazy(() => import('../Pages/PhoneBook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className={css.test}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/phonebook"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/Login" component={<LoginPage />} />
            }
          />
          <Route
            path="/Phonebook"
            element={
              <PrivateRoute
                redirectTo="/Phonebook"
                component={<PhonebookPage />}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
