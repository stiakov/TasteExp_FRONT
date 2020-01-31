import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { signoutUser, checkSignedIn } from '../redux/authActions';

const Nav = ({ user }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(signoutUser(user));

  let navTemplate = '';

  const changeBtnStatus = (e) => {
    const btns = document.getElementsByClassName('item-nav');
    for (let item of btns) {
      item.classList.remove('active');
    }

    e.target.classList.toggle('active');
  };
  if (checkSignedIn(user, dispatch)) {

    navTemplate = (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item item-nav" onClick={changeBtnStatus}>HOME</Link>
        <Link to="/login" className="item item-nav" onClick={changeBtnStatus}>TEST</Link>
        { ' ' }
        <div className="right menu">
          <Link to="/" className="ui item item-nav" onClick={handleLogout}>LOGOUT</Link>
        </div>
      </div>
    );
  }
  return navTemplate;
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(Nav);
