import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorNewCalendarComponent } from './mentor-new-calendar.component';

describe('MentorNewCalendarComponent', () => {
  let component: MentorNewCalendarComponent;
  let fixture: ComponentFixture<MentorNewCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorNewCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorNewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
