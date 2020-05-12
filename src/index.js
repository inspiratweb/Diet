import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import dietApp from './reducers/index';
import { App } from './App';
import { fb as firebase, reactReduxFirebaseConfig } from './firebase';

import './styles/index.scss';

const store = createStore(
  dietApp,
  {},
  compose(
    applyMiddleware(reduxThunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('app')
);
