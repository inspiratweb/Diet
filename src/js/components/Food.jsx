import React from 'react';
import PropTypes from 'prop-types';

class Food extends React.Component {
  constructor() {
    super();

    this.state = {foods: []};

    const leche = {code: 'Leche', desc: 'Leche desnatada'};
    const avena = {code: 'Avena', desc: 'Copos de avena'};
    const proteina = {code: 'Proteina', desc: 'Concentrado de proteina', notbuy: true};
    const piña = {code: 'Piña', desc: 'Piña en su jugo'};
    const arroz = {code: 'Arroz', desc: 'Arroz integral'};
    const pollo = {code: 'Pollo', desc: 'Pechuga de pollo'};
    const almendra = {code: 'Almendras', desc: 'Almendra cruda'};
    const ensalada = {code: 'Ensalada', desc: 'Ensalada variada'};
    const tortitas = {code: 'Tortitas', desc: 'Tortitas de maiz/arroz'};
    const batido = {code: 'Batido', desc: 'Batido P50+C30+B10+C8', notbuy: true};
    const brocoli = {code: 'Brocoli', desc: 'Brocoli'};

    this.foods = [
      leche,
      avena,
      proteina,
      piña,
      arroz,
      pollo,
      almendra,
      ensalada,
      tortitas,
      batido,
      brocoli
    ];
  }

  // componentWillMount() {
  //   fetch('../data/foods.json')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((foods) => {
  //       this.setState({ foods: foods })
  //     })
  // }

  renderFoodSummary() {
    const length = this.props.food.length;

    return this.props.food.map((food, i) => {
      if (i < length - 1) {
        return `${food.food}, `;
      }
      return food.food;
    });
  }

  renderFoodDetail() {
    return this.foods.map((food) => {
      return this.props.food.map((key) => {
        if (key.food === food.code) {
          return (<li>{key.qtty}g: {food.desc}</li>);
        }
        return false;
      })
      return false;
    });
  }

  renderBuyableClass(buyable) {
    return 
  }

  renderBasketNames() {
    return this.foods.map((key) => {
      if (key.code === this.props.food[0]) {
        return key.notbuy ? <span className="basket-item-dontbuy">{key.desc}</span> : key.desc;
      }
      return false;
    });
  }

  renderItem() {
    if (this.props.tab === 'listitem') {
      if (this.props.showDetail) {
        return (
          <ul className="listmeal-food-detail">
            {this.renderFoodDetail()}
          </ul>
        );
      }
      return <p className="listmeal-food-summary">{this.renderFoodSummary()}</p>;
    } else if (this.props.tab === 'basket') {
      return this.renderBasketNames();
    }
  }

  render() {
    return (
      <div>
        {this.renderItem()}
      </div>
    );
  }
}

Food.propTypes = {
  food: PropTypes.array,
  showDetail: PropTypes.bool,
  tab: PropTypes.string
};

Food.defaultProps = {
  showDetail: false
};

export default Food;
