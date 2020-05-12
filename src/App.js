import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirebaseConnect, isLoaded } from 'react-redux-firebase';
import { Layout } from './components/Diet/Layout';
import { Foods } from './components/Foods/Foods';
import { BuilderWrapper } from './components/Builder/BuilderWrapper';
import { getFoodsFromFb } from './selectors/firebase/getFoodsFromFb';
import { getSimilarsFromFb } from './selectors/firebase/getSimilarsFromFb';
import { getMealsFromFb } from './selectors/firebase/getMealsFromFb';
import { BlankSlate } from './components/Common/BlankSlate';
import { getRouterFromFb } from './selectors/firebase/getRouterFromFb';
import { getDietsFromFb } from './selectors/firebase/getDietsFromFb';

const App = () => {

  useFirebaseConnect([
    'foods', 'similars', 'meals', 'router', 'diets'
  ]);

  const foods = useSelector(getFoodsFromFb);
  const similars = useSelector(getSimilarsFromFb);
  const router = useSelector(getRouterFromFb);
  const meals = useSelector(getMealsFromFb);
  const diets = useSelector(getDietsFromFb);

  if (
    !isLoaded(foods)
    || !isLoaded(similars)
    || !isLoaded(meals)
    || !isLoaded(diets)
    || !isLoaded(router)
  ) {
    return <BlankSlate />;
  }

  return (
    <Router basename="/diet">
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
        <Route exact path="/foods">
          <Foods />
        </Route>
        <Route exact path="/builder">
          <BuilderWrapper />
        </Route>
        <Route path="/:selectedDiet">
          <Layout />
        </Route>
      </Switch>
    </Router>
  );
};

export { App };
export { App as PureComponent };
