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
import { NoMatchPage } from './components/Common/NoMatchPage';

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
          <Layout selectedDiet={diets[router]} />
        </Route>
        <Route exact path="/foods">
          <Foods />
        </Route>
        <Route exact path="/builder">
          <BuilderWrapper />
        </Route>
        <Route
          path="/:selectedDiet"
          render={({ match }) => {
            const { selectedDiet } = match.params;
            const dietsNames = Object.keys(diets);

            if (dietsNames.indexOf(selectedDiet) >= 0) {
              return <Layout selectedDiet={diets[selectedDiet]} />;
            }
            return <NoMatchPage />;

          }}
        />
      </Switch>
    </Router>
  );
};

export { App };
export { App as PureComponent };
