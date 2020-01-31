import React from 'react';
import { connect } from 'react-redux';
import Landing from "./Landing";

import { checkSignedIn } from '../redux/authActions';

const Home = ({ user }) => {

  if (checkSignedIn(user)) {
    return (<div>DASHBOARD</div>);
  }

  return <Landing />;
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Home);
