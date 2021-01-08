import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSkillDetailsComponent } from './mentor-skill-details.component';

describe('MentorSkillDetailsComponent', () => {
  let component: MentorSkillDetailsComponent;
  let fixture: ComponentFixture<MentorSkillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSkillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSkillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
