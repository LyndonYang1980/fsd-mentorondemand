import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCalendarDetailsComponent } from './mentor-calendar-details.component';

describe('MentorCalendarDetailsComponent', () => {
  let component: MentorCalendarDetailsComponent;
  let fixture: ComponentFixture<MentorCalendarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCalendarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCalendarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
