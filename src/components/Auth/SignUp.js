import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signUp } from '../../actions/firebase/signUp';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pwdConfirmation, setPwdConfirmation] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({ email, password });
    history.push('/');
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
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
      <div>
        <div>Confirm password</div>
        <input
          onChange={(e) => setPwdConfirmation(e.target.value)}
          placeholder="Confirm Password.."
          type="password"
          value={pwdConfirmation}
        />
      </div>
      <button type="submit">Sign Up</button>
      <Link to="/log-in">Login</Link>
    </form>
  );

};
