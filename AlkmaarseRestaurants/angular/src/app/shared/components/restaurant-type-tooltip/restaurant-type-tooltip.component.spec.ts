import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTypeTooltipComponent } from './restaurant-type-tooltip.component';

describe('RestaurantTypeTooltipComponent', () => {
  let component: RestaurantTypeTooltipComponent;
  let fixture: ComponentFixture<RestaurantTypeTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTypeTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTypeTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
