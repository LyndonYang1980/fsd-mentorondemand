import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalBtnComponent } from './proposal-btn.component';

describe('ProposalBtnComponent', () => {
  let component: ProposalBtnComponent;
  let fixture: ComponentFixture<ProposalBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
