import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Landing from './Landing';
import Dashboard from './Dashboard';

import { checkSignedIn } from '../redux/authActions';

const Home = ({ user }) => {
  const dispatch = useDispatch();
  if (checkSignedIn(user, dispatch)) {
    return (<Dashboard />);
  }

  return <Landing />;
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Home);
