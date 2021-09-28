import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsLogoComponent } from './restaurants-logo.component';

describe('RestaurantsLogoComponent', () => {
  let component: RestaurantsLogoComponent;
  let fixture: ComponentFixture<RestaurantsLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
