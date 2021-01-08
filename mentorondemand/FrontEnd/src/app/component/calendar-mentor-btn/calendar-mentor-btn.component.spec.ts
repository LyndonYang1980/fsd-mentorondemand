import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMentorBtnComponent } from './calendar-mentor-btn.component';

describe('CalendarMentorBtnComponent', () => {
  let component: CalendarMentorBtnComponent;
  let fixture: ComponentFixture<CalendarMentorBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarMentorBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMentorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
