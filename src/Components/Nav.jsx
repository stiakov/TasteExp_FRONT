import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { signoutUser, checkSignedIn } from '../redux/authActions';

const Nav = ({ user }) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(signoutUser(user));

  let navTemplate = '';

  const changeBtnStatus = (e) => {
    const nodeList = document.getElementsByClassName('item-nav');
    const nodes = Array.from(nodeList);
    nodes.forEach(item => item.classList.remove('active'));

    e.target.classList.toggle('active');
  };

  if (checkSignedIn(user, dispatch)) {

    navTemplate = (
      <nav className="ui secondary pointing menu nav-menu">
        <Link to="/" className="item item-nav" onClick={changeBtnStatus}>HOME</Link>
        <Link to="/login" className="item item-nav" onClick={changeBtnStatus}>TEST</Link>
        <div className="right menu">
          <Link to="/" className="ui item item-nav" onClick={handleLogout}>LOGOUT</Link>
        </div>
      </nav>
    );
  }
  return navTemplate;
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(Nav);
