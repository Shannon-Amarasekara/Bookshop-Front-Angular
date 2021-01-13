import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBestsellersComponent } from './random-bestsellers.component';

describe('RandomBestsellersComponent', () => {
  let component: RandomBestsellersComponent;
  let fixture: ComponentFixture<RandomBestsellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomBestsellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
