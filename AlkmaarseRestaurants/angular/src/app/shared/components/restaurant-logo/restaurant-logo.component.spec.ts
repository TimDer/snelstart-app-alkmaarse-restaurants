import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLogoComponent } from './restaurant-logo.component';

describe('RestaurantLogoComponent', () => {
  let component: RestaurantLogoComponent;
  let fixture: ComponentFixture<RestaurantLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
