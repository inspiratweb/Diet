import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getDietsFromFb } from 'selectors/firebase/getDietsFromFb';
import { useSelector } from 'react-redux';
import { PageNotFound } from 'components/Common/PageNotFound';
import { Layout } from 'components/Diet/Layout';
import { getRouterFromFb } from 'selectors/firebase/getRouterFromFb';
import { isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { BlankSlate } from 'components/Common/BlankSlate';
import { getMealsFromFb } from 'selectors/firebase/getMealsFromFb';
import { getSimilarsFromFb } from 'selectors/firebase/getSimilarsFromFb';
import { getFoodsFromFb } from 'selectors/firebase/getFoodsFromFb';
import { Url } from 'consts/urls';

export const DietRoutes = () => {
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
    <Switch>
      <Route
        path={Url.diet('/:selectedDiet')}
        render={({ match }) => {
          const { selectedDiet } = match.params;
          const dietsNames = Object.keys(diets);

          if (dietsNames.indexOf(selectedDiet) >= 0) {
            return <Layout selectedDiet={diets[selectedDiet]} />;
          }
          return <PageNotFound />;
        }}
      />
      <Route exact path={Url.index()}>
        <Layout selectedDiet={diets[router]} />
      </Route>
      <Route path={Url.index()}>
        <PageNotFound />
      </Route>
    </Switch>
  );
};
