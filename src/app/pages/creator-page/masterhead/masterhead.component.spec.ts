import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterheadComponent } from './masterhead.component';

describe('MasterheadComponent', () => {
  let component: MasterheadComponent;
  let fixture: ComponentFixture<MasterheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
