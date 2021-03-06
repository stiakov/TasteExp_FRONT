import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { loginUser } from '../redux/authActions';

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password, remember };
    dispatch(loginUser(user));
    props.history.push('/');
    return user;
  };

  return (
    <div className="fullScreen bgLogin">
      <div className="ui raised very padded text container segment trans">
        <h2 className="ui center aligned icon header">
          <i className="key icon" />
          <div className="content">
            Taste Explorer
            <div className="sub header">Hey hey!</div>
          </div>
        </h2>

        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="email">
              Email
              <input
                id="email"
                label="email"
                type="text"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="E-Mail"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="password">
              Password
              <input
                id="password"
                label="password"
                type="password"
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Password"
                autoComplete="password"
                required
              />
            </label>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                label="remember_me"
                onChange={event => setRemember(event.target.checked)}
              />
              <label htmlFor="remember_me">Remember me</label>
            </div>
          </div>
          <button type="submit" className="ui fluid black button">Go ahead!</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Login);
