import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Diet } from './Diet';
import { Basket } from './Basket';
import { applyKeyboardNavigation } from '../../utils/applyKeyboardNavigation';
import { B_KEY_CODE, D_KEY_CODE } from '../../consts/keyboard-key-codes';
import { setSelectedDiet } from '../../actions/selectedDiet/setSelectedDiet';

export const Layout = ({ selectedDiet }) => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState('diet');

  useEffect(() => {
    dispatch(setSelectedDiet(selectedDiet));
  }, [selectedDiet, dispatch]);


  const handleClickDiet = () => {
    setSelectedTab('diet');
  };

  const handleClickBasket = () => {
    setSelectedTab('basket');
  };

  const renderTabClass = (tab) => (selectedTab === tab ? 'active' : '');

  const renderTab = (tab) => (selectedTab === tab ? `${tab} active` : tab);

  return (
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
  );
};

Layout.defaultProps = {
  selectedDiet: {}
};

Layout.propTypes = {
  selectedDiet: PropTypes.shape({
    any: PropTypes.shape({
      food: PropTypes.string,
      qtty: PropTypes.string,
    })
  })
};
