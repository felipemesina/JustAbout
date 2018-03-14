import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsOutdoorsComponent } from './sports-outdoors.component';

describe('SportsOutdoorsComponent', () => {
  let component: SportsOutdoorsComponent;
  let fixture: ComponentFixture<SportsOutdoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsOutdoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsOutdoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
