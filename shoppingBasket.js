const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  };

  addItem(candy) {
    this.basket.push(candy)
  };
  
  // my method before the Makers debuggin exercise:
  // getTotalPrice() {
  //   return this.basket
  //               .map(candy => candy.getPrice())
  //               .reduce((total, candy) => total + candy, 0)
  // };

  applyDiscount(discount) {
    return this.discount = discount;
  };

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  };
};

module.exports = ShoppingBasket;

// testing / debugging:
// basket = new ShoppingBasket();
// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));
// console.log(basket.applyDiscount(2));
// console.log(basket)
// console.log(basket.getTotalPrice());