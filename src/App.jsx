import React from 'react';
import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import { AuthRoutes } from 'components/Auth/AuthRoutes';
import { BuilderWrapper } from 'components/Builder/BuilderWrapper';
import { GlobalErrors } from 'components/Common/GlobalErrors';
import { DietRoutes } from 'components/Diet/DietRoutes';
import { Foods } from 'components/Foods/Foods';
import { Url } from 'consts/urls';
import { MainHeader } from 'components/Common/MainHeader';

const App = () => (
  <Router>
    <MainHeader />
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

export { App };
export { App as PureComponent };
