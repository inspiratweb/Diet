import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Foods from './containers/Foods';
import { BuilderWrapper } from './containers/BuilderWrapper';
import { fetchFoods } from './actions/foods/fetchFoods';
import { fetchMeals } from './actions/meals/fetchMeals';
import { fetchSimilars } from './actions/similars/fetchSimilars';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods())
    dispatch(fetchMeals())
    dispatch(fetchSimilars())
  });

  return (
    <Router basename="/diet">
      <Switch>
        <Route exact path="/foods" component={Foods} />
        <Route exact path="/builder" component={BuilderWrapper} />
        <Route exact path="/" component={Layout} />
      </Switch>
    </Router>
  )
};

export { App };
