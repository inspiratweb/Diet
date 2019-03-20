import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import dietApp from './reducers/index.jsx';
import App from './App.jsx';

import '../styles/index.scss';

const store = createStore(
  dietApp,
  {},
  compose(
    applyMiddleware(reduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
