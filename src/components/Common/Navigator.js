import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => (
  <nav className="navigator">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/diet">Diet</Link>
      </li>
      <li>
        <Link to="/basket">Basket</Link>
      </li>
      <li>
        <Link to="/builder">Builder</Link>
      </li>
      <li>
        <Link to="/">Log out</Link>
      </li>
    </ul>
  </nav>
);

export { Navigator };
