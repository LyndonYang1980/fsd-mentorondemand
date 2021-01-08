import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSkillsetComponent } from './mentor-skillset.component';

describe('MentorSkillsetComponent', () => {
  let component: MentorSkillsetComponent;
  let fixture: ComponentFixture<MentorSkillsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSkillsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSkillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
