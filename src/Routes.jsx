import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Pages from './Pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Pages.Home} />
    <Route exact path="/Login" component={Pages.Login} />
    <Route exact path="/signup" component={Pages.Signup} />
    <Route exact path="/commerce/:id" component={Pages.Commerce} />
    <Route exact path="/favorites" component={Pages.Favorites} />
  </Switch>
);


const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Routes);
