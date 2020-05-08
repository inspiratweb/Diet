import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getDietAvailable } from '../selectors/diet/getDietAvailable';
import { fetchDiet } from '../actions/diet/fetchDiet';
import { setRouter } from '../actions/router/setRouter';
import { fetchRouter } from '../actions/router/fetchRouter';

import Diet from '../containers/Diet';
import Basket from '../containers/Basket';
import BlankSlate from './BlankSlate';

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
    const normalizedUrl = this.props.location.pathname.replace(process.env.PUBLIC_URL, '').replace(/\//g, '');

    if (normalizedUrl) {
      this.props.actions.setRouter(normalizedUrl);
    } else {
      this.props.actions.fetchRouter();
    }
    this.props.actions.fetchDiet();
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
    ) : (
      <BlankSlate />
    );
  }
}

Layout.propTypes = {
  actions: PropTypes.shape({
    setRouter: PropTypes.func,
    fetchDiet: PropTypes.func,
    fetchRouter: PropTypes.func,
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
    fetchRouter
  };
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
