import React from 'react';
import { connect, useDispatch } from 'react-redux';

const Dashboard = ({ user }) => {

  return (
    <div>
      <h2>{user ? `Welcome ${user.current.name}` : ''}</h2>

      DASHBOARD DASH DASH
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Dashboard);
