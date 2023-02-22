const Candy = require('./candy');
let candy = new Candy('Mars', 4.99);

describe('Candy', () => {
  it('returns the name', () => {
    expect(candy.getName()).toEqual('Mars')
  });
  it('returns the price', () => {
    expect(candy.getPrice()).toEqual(4.99);
  });
});
