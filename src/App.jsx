import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthRoutes } from 'components/Auth/AuthRoutes';
import { BuilderWrapper } from 'components/Builder/BuilderWrapper';
import { logOut } from 'actions/firebase/logOut';
import { GlobalErrors } from 'components/Common/GlobalErrors';
import { DietRoutes } from 'components/Diet/DietRoutes';
import { Foods } from 'components/Foods/Foods';
import { Url } from 'consts/urls';

const App = () => {
  const dispatch = useDispatch();

  return (
    <Router>
      <button type="button" onClick={() => dispatch(logOut())}>Log Out</button>
      <Switch>
        <Route exact path={Url.foods()}>
          <Foods />
        </Route>
        <Route exact path={Url.builder()}>
          <BuilderWrapper />
        </Route>
        <Route path={Url.auth()}>
          <AuthRoutes />
        </Route>
        <Route path={Url.index()}>
          <DietRoutes />
        </Route>
      </Switch>
      <GlobalErrors />
    </Router>
  );
};

export { App };
export { App as PureComponent };
