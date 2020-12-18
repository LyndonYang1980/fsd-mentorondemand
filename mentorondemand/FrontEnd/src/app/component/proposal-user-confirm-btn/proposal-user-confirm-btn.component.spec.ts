import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalUserConfirmBtnComponent } from './proposal-user-confirm-btn.component';

describe('ProposalUserConfirmBtnComponent', () => {
  let component: ProposalUserConfirmBtnComponent;
  let fixture: ComponentFixture<ProposalUserConfirmBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalUserConfirmBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalUserConfirmBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
