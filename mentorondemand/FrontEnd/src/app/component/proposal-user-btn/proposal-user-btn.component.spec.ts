import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalUserBtnComponent } from './proposal-user-btn.component';

describe('ProposalUserBtnComponent', () => {
  let component: ProposalUserBtnComponent;
  let fixture: ComponentFixture<ProposalUserBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalUserBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalUserBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
