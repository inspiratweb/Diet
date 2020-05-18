import React from 'react';
import PropTypes from 'prop-types';

export const RealMacroQtty = ({ food, qtty }) => (
  <span className="diet-title-macros">
    <span className="diet-title-macros-p">{Math.ceil(food.macros.p * qtty)}</span>
    <span className="diet-title-macros-ch">{Math.ceil(food.macros.ch * qtty)}</span>
    <span className="diet-title-macros-f">{Math.ceil(food.macros.f * qtty)}</span>
  </span>
);


RealMacroQtty.propTypes = {
  food: PropTypes.shape({
    macros: PropTypes.shape({
      p: PropTypes.number,
      ch: PropTypes.number,
      f: PropTypes.number
    })
  }),
  qtty: PropTypes.number
};

RealMacroQtty.defaultProps = {
  food: {},
  qtty: 0
};
