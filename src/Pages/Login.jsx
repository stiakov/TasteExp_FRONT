import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ password, email });
    // createBook(newBook);
    // return newBook;
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

export default Login;
