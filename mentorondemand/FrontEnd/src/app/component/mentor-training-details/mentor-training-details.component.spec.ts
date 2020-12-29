import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTrainingDetailsComponent } from './mentor-training-details.component';

describe('MentorTrainingDetailsComponent', () => {
  let component: MentorTrainingDetailsComponent;
  let fixture: ComponentFixture<MentorTrainingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorTrainingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
