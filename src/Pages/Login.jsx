import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('props ', props);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { password, email };
    debugger
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
            onChange={event => setEmail(event.target.value)}
            placeholder="E-Mail"
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
            onChange={event => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
        </label>
        <button type="submit" style={undefined}>ADD BOOK</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({ user: state });

const mapDispatchToProps = dispatch => ({ loginUser: user => dispatch(loginUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
