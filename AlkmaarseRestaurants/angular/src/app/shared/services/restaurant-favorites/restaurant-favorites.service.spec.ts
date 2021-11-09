import { TestBed } from '@angular/core/testing';

import { RestaurantFavoritesService } from './restaurant-favorites.service';

describe('RestaurantFavoritesService', () => {
  let service: RestaurantFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
