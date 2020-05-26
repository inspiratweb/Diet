import React from 'react';
import { DndProvider } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';
import { Builder } from 'components/Builder/Builder';
import { isLoaded, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { getFoodsFromFb } from 'selectors/firebase/getFoodsFromFb';
import { getMealsFromFb } from 'selectors/firebase/getMealsFromFb';
import { BlankSlate } from 'components/Common/BlankSlate';

export const BuilderWrapper = () => {
  useFirebaseConnect([
    'foods',
    'meals',
  ]);

  const foods = useSelector(getFoodsFromFb);
  const meals = useSelector(getMealsFromFb);

  if (
    !isLoaded(foods)
    || !isLoaded(meals)
  ) {
    return <BlankSlate />;
  }

  return (
    <DndProvider
      backend={TouchBackend}
      options={{ enableMouseEvents: true }}
    >
      <Builder />
    </DndProvider>
  );
};
