import React from 'react';
import ListMealItem from './ListMealItem.jsx';
import ListBasketItem from './ListBasketItem.jsx';

class ListMeal extends React.Component {
  constructor() {
    super();

    this.handleClickA = this.handleClickA.bind(this);
    this.handleClickB = this.handleClickB.bind(this);
    this.state = {
      selectedTab: 'listmeal'
    };

    this.diet = [];
    this.basket = [];

    this
      .add(8, 'Requeson', 250)
      .add(8, 'Avena', 70)
      .add(8, 'Miel', 15)
      .add(8, 'Almendras', 15)
      .add(8, 'Platano', 1)
      .add(11, 'Arroz', 50)
      .add(11, 'Pollo', 150)
      .add(11, 'Aceite', 10)
      .add(14, 'Arroz', 70)
      .add(14, 'Pollo', 150)
      .add(14, 'Aceite', 10)
      .add(19, 'Batido', 100)
      .add(19, 'Manzana', 1)
      .add(19, 'Avena', 30)
      .add(23, 'Huevos', 3)
      .add(23, 'AtunL', 2)
      .add(23, 'Tortitas', 1)
      .add(23, 'Almendras', 25);
  }

  handleClickA() {
    this.setState({selectedTab: 'listmeal'})
  }

  handleClickB() {
    this.setState({selectedTab: 'basket'})
  }

  add(mealTime, food, qtty) {
    // meals
    let repeated = false;

    this.diet.forEach((key) => {
      if (key.mealTime === mealTime) {
        repeated = true;
        key.food.push({food, qtty});
        return false;
      }
      return false;
    });

    if (!repeated) {
      this.diet.push({mealTime, food: [{food, qtty}]});
    }

    // basket
    let existing = false;

    this.basket.forEach((key) => {
      if (key.food === food) {
        existing = true;
        return false;
      }
      return false;
    });

    if (!existing) {
      this.basket.push({food});
    }

    return this;
  }

  renderListMeals() {
    return this.diet.map((key) => {
      return (
        <ListMealItem
          key={key.mealTime}
          mealTime={key.mealTime}
          food={key.food} />
      );
    });
  }

  renderBasket() {
    return this.basket.map((key) => {
      return (
        <ListBasketItem
          key={key.food}
          food={[key.food]} />
      );
    });
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
          <li className={this.renderTabClass('listmeal')} onClick={this.handleClickA}>Diet</li>
          <li className={this.renderTabClass('basket')} onClick={this.handleClickB}>Basket</li>
        </ul>
        <ul className={this.renderTab('listmeal')}>
          {this.renderListMeals()}
        </ul>
        <ul className={this.renderTab('basket')}>
          {this.renderBasket()}
        </ul>
      </div>
    )
  }
}

export default ListMeal;
