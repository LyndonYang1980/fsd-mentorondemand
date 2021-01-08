import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorNewSkillComponent } from './mentor-new-skill.component';

describe('MentorNewSkillComponent', () => {
  let component: MentorNewSkillComponent;
  let fixture: ComponentFixture<MentorNewSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorNewSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorNewSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
