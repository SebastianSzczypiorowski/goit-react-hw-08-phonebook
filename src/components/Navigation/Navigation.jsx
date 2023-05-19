import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/Phonebook">Phonebook</NavLink>}
    </nav>
  );
};

export default Navigation;
