import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import getDietAvailable from '../selectors/getDietAvailable.jsx';
import { setRouter, fetchDiet, fetchFoods, fetchMeals, fetchSimilars } from '../actions/index.jsx';

import Diet from '../containers/Diet.jsx';
import Basket from '../containers/Basket.jsx';

class Layout extends React.Component {
  constructor() {
    super();

    this.handleClickDiet = this.handleClickDiet.bind(this);
    this.handleClickBasket = this.handleClickBasket.bind(this);
    this.state = {
      selectedTab: 'diet'
    };
  }

  componentWillMount() {
    this.props.actions.setRouter(this.props.location.pathname);
    this.props.actions.fetchDiet();
    this.props.actions.fetchFoods();
    this.props.actions.fetchMeals();
    this.props.actions.fetchSimilars();
  }

  handleClickDiet() {
    this.setState({ selectedTab: 'diet' });
  }

  handleClickBasket() {
    this.setState({ selectedTab: 'basket' });
  }

  renderTabClass(tab) {
    return this.state.selectedTab === tab ? 'active' : '';
  }

  renderTab(tab) {
    return this.state.selectedTab === tab ? `${tab} active` : tab;
  }

  render() {
    return this.props.dietAvailables ? (
      <div>
        <ul className="tabs">
          <li
            className={this.renderTabClass('diet')}
            onClick={this.handleClickDiet}
          >
            Diet
          </li>
          <li
            className={this.renderTabClass('basket')}
            onClick={this.handleClickBasket}
          >
            Basket
          </li>
        </ul>
        <Diet className={this.renderTab('diet')} />
        <Basket className={this.renderTab('basket')} />
      </div>
    ) : <div>NADA</div>;
  }
}

Layout.propTypes = {
  actions: PropTypes.shape({
    setRouter: PropTypes.func,
    fetchDiet: PropTypes.func,
    fetchFoods: PropTypes.func,
    fetchMeals: PropTypes.func,
    fetchSimilars: PropTypes.func,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  dietAvailables: PropTypes.bool,
};

const mapStateToProps = state => ({
  dietAvailables: getDietAvailable(state),
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    setRouter,
    fetchDiet,
    fetchFoods,
    fetchMeals,
    fetchSimilars
  };
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
