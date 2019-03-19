import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import dietApp from './reducers/index.jsx';
import initialState from './initialState.js';
import App from './App.jsx';

import '../styles/index.scss';

const store = createStore(
  dietApp,
  initialState,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
