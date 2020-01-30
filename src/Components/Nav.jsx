import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { signoutUser, checkSignedIn } from '../redux/authActions';

const Nav = ({ user }) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(signoutUser(user));

  let navTemplate = '';
  if (checkSignedIn(user, dispatch)) {
    navTemplate = (
      <div>
        <Link to="/landing">HOME</Link>
        { ' ' }
        <Link to="/logout" onClick={handleLogout}>LOGOUT</Link>
      </div>
    );
  }
  return navTemplate;
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, null)(Nav);
