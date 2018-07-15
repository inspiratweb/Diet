import React from 'react';
// import ListDietItem from './ListDietItem.jsx';
// import ListBasketItem from './ListBasketItem.jsx';
import Diet from '../containers/Diet.jsx';

class Layout extends React.Component {
  constructor() {
    super();

    this.handleClickDiet = this.handleClickDiet.bind(this);
    this.handleClickBasket = this.handleClickBasket.bind(this);
    this.state = {
      selectedTab: 'diet'
    };
  }

  handleClickDiet() {
    this.setState({ selectedTab: 'diet' });
  }

  handleClickBasket() {
    this.setState({ selectedTab: 'basket' });
  }

  // addToDiet(mealTime, food, qtty) {
  //   const existingIndex = this.diet.findIndex(
  //     diet => diet.mealTime === mealTime
  //   );
  //   return existingIndex >= 0
  //     ? this.diet[existingIndex].food.push({ food, qtty })
  //     : this.diet.push({ mealTime, food: [{ food, qtty }] });
  // }

  // addToBasket(food) {
  //   return this.basket.indexOf(food) === -1 && this.basket.push(food);
  // }

  // add(mealTime, food, qtty) {
  //   this.addToDiet(mealTime, food, qtty);
  //   this.addToBasket(food);

  //   return this;
  // }

  // renderDiet() {
  //   return this.diet.map(key => (
  //     <ListDietItem
  //       key={key.mealTime}
  //       mealTime={key.mealTime}
  //       food={key.food}
  //     />
  //   ));
  // }

  // renderBasket() {
  //   return this.basket.map(food => <ListBasketItem key={food} food={[food]} />);
  // }

  renderTabClass(tab) {
    return this.state.selectedTab === tab ? 'active' : '';
  }

  renderTab(tab) {
    return this.state.selectedTab === tab ? `${tab} active` : tab;
  }

  render() {
    return (
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
        {/* <ul className={this.renderTab('diet')}>{this.renderDiet()}</ul>
        <ul className={this.renderTab('basket')}>{this.renderBasket()}</ul> */}
      </div>
    );
  }
}

export default Layout;
