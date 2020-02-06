import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import Nav from './Components/Nav';

function App() {
  return (
    <Provider store={store}>
      <div className="App ui container top-0">
        <Router>
          <Nav />
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
