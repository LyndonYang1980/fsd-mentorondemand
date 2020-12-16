import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDetailUserItemComponent } from './proposal-detail-user-item.component';

describe('ProposalDetailUserItemComponent', () => {
  let component: ProposalDetailUserItemComponent;
  let fixture: ComponentFixture<ProposalDetailUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalDetailUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalDetailUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
