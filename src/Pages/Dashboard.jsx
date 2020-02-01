import React from 'react';
import { connect, useDispatch } from 'react-redux';
import Carousel from '../Components/dashboard/Carousel';

const Dashboard = ({ user }) => {

  return (
    <div>
      <h2>{user ? `Welcome ${user.current.name}` : ''}</h2>
      <Carousel />
      <div class="ui grid">
        <div class="doubling eight column row">
          <div class="column">X</div>
          <div class="column">X</div>
          <div class="column">X</div>
          <div class="column">X</div>
          <div class="column">X</div>
          <div class="column">X</div>
          <div class="column">X</div>
          <div class="column">X</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, null)(Dashboard);
