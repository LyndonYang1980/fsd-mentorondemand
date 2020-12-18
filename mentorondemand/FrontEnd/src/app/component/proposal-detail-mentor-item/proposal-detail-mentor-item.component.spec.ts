import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDetailMentorItemComponent } from './proposal-detail-mentor-item.component';

describe('ProposalDetailMentorItemComponent', () => {
  let component: ProposalDetailMentorItemComponent;
  let fixture: ComponentFixture<ProposalDetailMentorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalDetailMentorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalDetailMentorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
