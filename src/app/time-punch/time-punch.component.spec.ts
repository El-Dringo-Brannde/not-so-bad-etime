import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePunchComponent } from './time-punch.component';

describe('TimePunchComponent', () => {
  let component: TimePunchComponent;
  let fixture: ComponentFixture<TimePunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
