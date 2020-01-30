import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Pages from './Pages';
import { checkSignedIn } from './redux/authActions';

const Routes = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <Switch>
      <Route exact path="/" component={Pages.Home} />
    </Switch>
  );
};


const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Routes);
