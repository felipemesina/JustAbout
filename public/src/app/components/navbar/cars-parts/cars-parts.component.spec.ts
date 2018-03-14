import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsPartsComponent } from './cars-parts.component';

describe('CarsPartsComponent', () => {
  let component: CarsPartsComponent;
  let fixture: ComponentFixture<CarsPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
