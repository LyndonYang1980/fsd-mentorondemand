import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrainingDetailsComponent } from './user-training-details.component';

describe('UserTrainingDetailsComponent', () => {
  let component: UserTrainingDetailsComponent;
  let fixture: ComponentFixture<UserTrainingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrainingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
