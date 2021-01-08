import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMentorBtnComponent } from './skill-mentor-btn.component';

describe('SkillMentorBtnComponent', () => {
  let component: SkillMentorBtnComponent;
  let fixture: ComponentFixture<SkillMentorBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMentorBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMentorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
