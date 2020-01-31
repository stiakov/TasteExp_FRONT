import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Pages from './Pages';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/Login" component={Pages.Login} />
      <Route exact path="/signup" component={Pages.Signup} />
    </Switch>
  );
};


const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Routes);
