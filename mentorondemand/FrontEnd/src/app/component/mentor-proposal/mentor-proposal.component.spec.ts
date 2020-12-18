import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorProposalComponent } from './mentor-proposal.component';

describe('MentorProposalComponent', () => {
  let component: MentorProposalComponent;
  let fixture: ComponentFixture<MentorProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
