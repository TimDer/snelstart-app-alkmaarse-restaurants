import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLogoInfoComponent } from './restaurant-logo-info.component';

describe('RestaurantLogoInfoComponent', () => {
  let component: RestaurantLogoInfoComponent;
  let fixture: ComponentFixture<RestaurantLogoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantLogoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLogoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
