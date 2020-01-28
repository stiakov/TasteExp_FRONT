import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <Link to="/">HOME</Link>
    <Link to="/login">LOGIN</Link>
    <Link to="/signup">SIGNUP</Link>
  </div>
);

export default Nav;
