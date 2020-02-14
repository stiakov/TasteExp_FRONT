/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { signupUser } from '../redux/authActions';

const Login = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name,
      email,
      password,
      password_confirmation,
    };
    dispatch(signupUser(user));
    props.history.push('/');
    return user;
  };

  return (
    <div className="fullScreen bgSignup">
      <div className="ui raised very padded text container segment trans">
        <h2 className="ui center aligned icon header">
          <i className="address card icon" />
          <div className="content">
            Taste Explorer
            <div className="sub header">Welcome on board!</div>
          </div>
        </h2>

        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="name">
              <input
                id="name"
                label="name"
                type="text"
                name="name"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Full Name"
                autoComplete="name"
                required
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="email">
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
              <input
                id="password"
                label="password"
                type="password"
                name="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Password"
                autoComplete="new-password"
                required
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="password_confirmation">
              <input
                id="password_confirmation"
                label="password_confirmation"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={event => setPasswordConfirmation(event.target.value)}
                placeholder="Password Confirmation"
                autoComplete="new-password"
                required
              />
            </label>
          </div>
          <button type="submit" className="ui fluid olive button">Sign Up!</button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, null)(Login);
