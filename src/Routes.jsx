import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';
import { checkSignedIn } from './redux/authActions';

const Routes = () => (
  <Switch>
    <Route path="/signup" component={Pages.Signup}>
      {/*{checkSignedIn() ? <Redirect to="/dashboard" /> : <PublicHomePage />}*/}
    </Route>
    <Route path="/login" component={Pages.Login} />
    <Route exact path="/" component={Pages.Home} />
  </Switch>
);

export default Routes;
