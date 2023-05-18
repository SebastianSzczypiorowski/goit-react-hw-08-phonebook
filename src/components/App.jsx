import { Route, Routes } from 'react-router-dom';

import Phonebook from './PhoneBook/Phonebook';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Register from './Register/Register';
import UserMenu from './Usermenu/Usermenu';

export const App = () => {
  return (
    <div>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Phonebook />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </>
    </div>
  );
};
