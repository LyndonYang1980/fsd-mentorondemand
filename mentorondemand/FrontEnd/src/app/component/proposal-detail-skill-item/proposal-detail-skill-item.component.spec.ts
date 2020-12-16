import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDetailSkillItemComponent } from './proposal-detail-skill-item.component';

describe('ProposalDetailSkillItemComponent', () => {
  let component: ProposalDetailSkillItemComponent;
  let fixture: ComponentFixture<ProposalDetailSkillItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalDetailSkillItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalDetailSkillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
