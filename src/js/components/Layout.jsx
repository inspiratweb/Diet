import React from 'react';
import ListDietItem from './ListDietItem.jsx';
import ListBasketItem from './ListBasketItem.jsx';

class Layout extends React.Component {
  constructor() {
    super();

    this.handleClickDiet = this.handleClickDiet.bind(this);
    this.handleClickBasket = this.handleClickBasket.bind(this);
    this.state = {
      selectedTab: 'diet'
    };

    this.diet = [];
    this.basket = [];

    this
      .add(8, 'Huevos', 3)
      .add(8, 'Q-Havarti', 3)
      .add(8, 'Nueces', 25)

      .add(11, 'Requeson', 150)
      .add(11, 'BolloTruño', 100)
      .add(11, 'Arandanos', 30)

      .add(14, 'Pollo', 100)
      .add(14, 'Q-Cabra', 30)
      .add(14, 'Brocoli', 70)
      .add(14, 'Aceite', 10)
      .add(14, 'Yogur', 125)
      .add(14, 'Nueces', 25)

      .add(17, 'Huevos', 2)
      .add(17, 'Q-Havarti', 2)

      .add(20, 'Proteina', 30)

      .add(21, 'Pollo', 100)
      .add(21, 'Q-Cabra', 30)
      .add(21, 'Brocoli', 70)
      .add(21, 'Aceite', 10)
      .add(21, 'Nueces', 25)

      .add(23, 'Ensalada', 70)
      .add(23, 'Huevos', 2)
      .add(23, 'Merluza', 100)
      .add(23, 'AtunL', 1)
      .add(23, 'Aceite', 10);
  }

  handleClickDiet() {
    this.setState({ selectedTab: 'diet' });
  }

  handleClickBasket() {
    this.setState({ selectedTab: 'basket' });
  }

  addToDiet(mealTime, food, qtty) {
    const existingIndex = this.diet.findIndex(
      diet => diet.mealTime === mealTime
    );
    return existingIndex >= 0
      ? this.diet[existingIndex].food.push({ food, qtty })
      : this.diet.push({ mealTime, food: [{ food, qtty }] });
  }

  addToBasket(food) {
    return this.basket.indexOf(food) === -1 && this.basket.push(food);
  }

  add(mealTime, food, qtty) {
    this.addToDiet(mealTime, food, qtty);
    this.addToBasket(food);

    return this;
  }

  renderDiet() {
    return this.diet.map(key => (
      <ListDietItem
        key={key.mealTime}
        mealTime={key.mealTime}
        food={key.food}
      />
    ));
  }

  renderBasket() {
    return this.basket.map(food => <ListBasketItem key={food} food={[food]} />);
  }

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
        <ul className={this.renderTab('diet')}>{this.renderDiet()}</ul>
        <ul className={this.renderTab('basket')}>{this.renderBasket()}</ul>
      </div>
    );
  }
}

export default Layout;
