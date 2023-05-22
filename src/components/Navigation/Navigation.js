import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink className={css.Link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.Link} to="/Phonebook">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
