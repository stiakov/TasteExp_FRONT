import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { loginUser } from '../redux/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password, remember };
    dispatch(loginUser(user));
    return user;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            id="email"
            label="email"
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-Mail"
            autoComplete="email"
            required
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            autoComplete="password"
            required
          />
        </label>
        <label htmlFor="remember_me">
          <input
            id="remember_me"
            label="remember_me"
            type="checkbox"
            name="remember_me"
            onChange={(event) => setRemember(event.target.checked)}
            checked={remember}
          />
        </label>
        <button type="submit" style={undefined}>Sign in!</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, null)(Login);
