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
      .add(8, 'Leche', 200)
      .add(8, 'Avena', 100)
      .add(8, 'Proteina', 50)
      .add(8, 'Piña', 120)
      .add(11, 'Arroz', 50)
      .add(11, 'Pollo', 200)
      .add(11, 'Almendras', 20)
      .add(14, 'Arroz', 50)
      .add(14, 'Pollo', 200)
      .add(14, 'Almendras', 20)
      .add(14, 'Ensalada', 100)
      .add(17, 'Tortitas', 30)
      .add(20, 'Batido', 100)
      .add(23, 'Brocoli', 200)
      .add(23, 'Pollo', 200);
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
