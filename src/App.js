import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebaseConnect, isLoaded } from 'react-redux-firebase';
import { Layout } from './components/Diet/Layout';
import { LogIn } from './components/Auth/LogIn';
import { SignUp } from './components/Auth/SignUp';
import { Foods } from './components/Foods/Foods';
import { BuilderWrapper } from './components/Builder/BuilderWrapper';
import { BlankSlate } from './components/Common/BlankSlate';
import { setInitialState } from './actions/common/setInitialState';
import { getFoodsFromFirebase } from './selectors/firebase/getFoodsFromFirebase';
import { getMealsFromFirebase } from './selectors/firebase/getMealsFromFirebase';
import { getSimilarsFromFirebase } from './selectors/firebase/getSimilarsFromFirebase';
import { NavBar } from './components/Common/Navbar';
import { UserLogNav } from './components/Auth/UserLogNav';

const App = () => {
  const dispatch = useDispatch();
  useFirebaseConnect([
    'similars', 'meals', 'foods'
  ]);

  const foods = useSelector(getFoodsFromFirebase);
  const similars = useSelector(getSimilarsFromFirebase);
  const meals = useSelector(getMealsFromFirebase);

  if (!isLoaded(similars) || !isLoaded(foods) || !isLoaded(meals)) {
    return <BlankSlate />;
  }

  if (isLoaded(foods) && isLoaded(meals) && isLoaded(similars)) {
    dispatch(setInitialState({ foods, meals, similars }));
  }


  return (
    <Router basename="/diet">
      <NavBar />
      <Switch>
        <Route exact path="/foods" component={Foods} />
        <Route exact path="/builder" component={BuilderWrapper} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/log-in" component={LogIn} />
        <Route exact path="/" component={Layout} />
      </Switch>
      <UserLogNav />
    </Router>
  );
};

export { App };
