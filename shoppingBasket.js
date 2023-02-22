const candy = require('./candy');

class ShoppingBasket {
  constructor(basket) {
    this.basket = [];
  }
  
  getTotalPrice() {
    return this.basket
                .map(candy => candy.getPrice())
                .reduce((total, candy) => total + candy, 0)
  }

  addItem(candy) {
    this.basket.push(candy)
  }
};

module.exports = ShoppingBasket;
