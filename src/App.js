import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Foods from './containers/Foods';
import { fetchFoods, fetchMeals, fetchSimilars } from './actions/index';

class App extends React.Component {
  componentWillMount() {
    this.props.actions.fetchFoods();
    this.props.actions.fetchMeals();
    this.props.actions.fetchSimilars();
  }

  render() {
    return (
      <Router basename="/diet">
        <Switch>
          <Route path="/foods" component={Foods} />
          <Route component={Layout} />
        </Switch>
      </Router>
    )
  }
};

App.propTypes = {
  actions: PropTypes.shape({
    fetchFoods: PropTypes.func,
    fetchMeals: PropTypes.func,
    fetchSimilars: PropTypes.func,
  })
}

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchFoods,
    fetchMeals,
    fetchSimilars,
  };
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(null, mapDispatchToProps)(App);
