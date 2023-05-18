import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Contacts</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
    </nav>
  );
};

export default Navigation;
