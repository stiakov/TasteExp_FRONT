import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signoutUser } from '../redux/authActions';


const Nav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(signoutUser());

  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/signup">SIGNUP</Link>
      <Link to="/logout" onClick={handleLogout}>LOGOUT</Link>
    </div>
  );
};

export default Nav;
