import { RestaurantPricePipe } from './restaurant-price.pipe';

describe('RestaurantPricePipe', () => {
  it('create an instance', () => {
    const pipe = new RestaurantPricePipe();
    expect(pipe).toBeTruthy();
  });
});
