import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logIn } from '../../actions/firebase/logIn';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn({ email, password });
    history.push('/');
  };

  return (
    <form className="log-in-form" onSubmit={handleSubmit}>
      <div>
        <div>Email</div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email.."
          type="text"
          value={email}
        />
      </div>
      <div>
        <div>Password</div>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password.."
          type="password"
          value={password}
        />
      </div>
      <button type="submit">Log In</button>
      <Link to="/sign-up">Sign Up</Link>
    </form>
  );

};
