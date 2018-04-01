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
      .add(8, 'Limon', 1)
      .add(8, 'Avena', 60)
      .add(8, 'Agua', 200)
      .add(8, 'Miel', 15)
      .add(8, 'Manzana', 1)
      .add(8, 'Canela', 5)
      .add(8, 'Requeson', 250)
      .add(11, 'PanCenteno', 100)
      .add(11, 'Aceite', 5)
      .add(11, 'Lomo', 60)
      .add(11, 'Tortitas', 30)
      .add(14, 'ArrozBasmati', 80)
      .add(14, 'Pollo', 100)
      .add(14, 'Brocoli', 100)
      .add(14, 'Platano', 100)
      .add(17, 'HarinaArroz', 90)
      .add(17, 'Chocolate', 20)
      .add(17, 'Chia', 5)
      .add(17, 'Canela', 5)
      .add(17, 'RalladuraLimon', 5)
      .add(20, 'Proteinas', 45)
      .add(20, 'Amilopectina', 50)
      .add(21, 'ArrozBasmati', 80)
      .add(21, 'Pollo', 100)
      .add(21, 'Brocoli', 100)
      .add(21, 'Platano', 100)
      .add(23, 'Ensalada', 50)
      .add(23, 'Huevos', 3)
      .add(23, 'AtunL', 1)
      .add(23, 'Aceite', 15)
      .add(23, 'Aguacate', 100);
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
