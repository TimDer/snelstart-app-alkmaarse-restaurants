import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantIconTypeComponent } from './restaurant-icon-type.component';

describe('RestaurantIconTypeComponent', () => {
  let component: RestaurantIconTypeComponent;
  let fixture: ComponentFixture<RestaurantIconTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantIconTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantIconTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
