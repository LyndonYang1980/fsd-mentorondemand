import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalMentorBtnComponent } from './proposal-mentor-btn.component';

describe('ProposalMentorBtnComponent', () => {
  let component: ProposalMentorBtnComponent;
  let fixture: ComponentFixture<ProposalMentorBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalMentorBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalMentorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
