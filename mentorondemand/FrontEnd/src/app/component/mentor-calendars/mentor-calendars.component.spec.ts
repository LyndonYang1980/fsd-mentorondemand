import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCalendarsComponent } from './mentor-calendars.component';

describe('MentorCalendarsComponent', () => {
  let component: MentorCalendarsComponent;
  let fixture: ComponentFixture<MentorCalendarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCalendarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
