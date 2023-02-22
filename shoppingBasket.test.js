const ShoppingBasket = require('./shoppingBasket');
const Candy = require('./candy');
let basket = new ShoppingBasket();

describe('getTotalPrice()', () => {
  it('returns 0 when basket is empty', () => {
    expect(basket.getTotalPrice()).toEqual(0);
  });

  it('adds a candy and returns the price', () => {
    let candy = new Candy('Mars', 4.99);
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it('adds 2 more candies and returns the price', () => {
    let candy = new Candy('Mars', 4.99);
    basket.addItem(new Candy('Skittle', 3.99));
    basket.addItem(new Candy('Skittle', 3.99));
    expect(basket.getTotalPrice()).toEqual(12.97);
  });
});
