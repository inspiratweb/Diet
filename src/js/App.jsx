import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout.jsx';

const App = () => (
  <Router>
    <Route component={Layout} />
  </Router>
);

export default App;
