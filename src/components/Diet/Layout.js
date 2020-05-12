import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAvailableDiet } from '../../selectors/firebase/getAvailableDiet';
import { Diet } from './Diet';
import { Basket } from './Basket';
import { BlankSlate } from '../Common/BlankSlate';
import { applyKeyboardNavigation } from '../../utils/applyKeyboardNavigation';
import { B_KEY_CODE, D_KEY_CODE } from '../../consts/keyboard-key-codes';

export const Layout = () => {
  const availableDiet = useSelector(getAvailableDiet);
  const [selectedTab, setSelectedTab] = useState('diet');

  const handleClickDiet = () => {
    setSelectedTab('diet');
  };

  const handleClickBasket = () => {
    setSelectedTab('basket');
  };

  const renderTabClass = (tab) => (selectedTab === tab ? 'active' : '');

  const renderTab = (tab) => (selectedTab === tab ? `${tab} active` : tab);

  return availableDiet ? (
    <div>
      <ul className="tabs">
        <li
          className={renderTabClass('diet')}
          role="tab"
          aria-label="Press D Keyboard Key to display Diet Tab"
          tabIndex="0"
          onClick={handleClickDiet}
          onKeyDown={
            (e) => applyKeyboardNavigation(e, D_KEY_CODE, handleClickDiet)
          }
        >
          Diet
        </li>
        <li
          className={renderTabClass('basket')}
          role="tab"
          aria-label="Press B Keyboard Key to display Basket Tab"
          tabIndex="0"
          onClick={handleClickBasket}
          onKeyDown={
            (e) => applyKeyboardNavigation(e, B_KEY_CODE, handleClickBasket)
          }
        >
          Basket
        </li>
      </ul>
      <Diet className={renderTab('diet')} />
      <Basket className={renderTab('basket')} />
    </div>
  ) : (
    <BlankSlate />
  );

};
