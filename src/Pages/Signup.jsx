/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { signupUser } from '../redux/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { name, email, password, password_confirmation };
    dispatch(signupUser(user));
    return user;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            id="name"
            label="name"
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full Name"
            autoComplete="name"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            label="email"
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-Mail"
            autoComplete="password"
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
            autoComplete="new-password"
            required
          />
        </label>
        <label htmlFor="password_confirmation">
          <input
            id="password_confirmation"
            label="password_confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            placeholder="Password Confirmation"
            autoComplete="new-password"
            required
          />
        </label>
        <button type="submit" style={undefined}>Sign Up!</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, null)(Login);
