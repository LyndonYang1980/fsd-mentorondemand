import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorDetailsModalComponent } from './mentor-details-modal.component';

describe('MentorDetailsModalComponent', () => {
  let component: MentorDetailsModalComponent;
  let fixture: ComponentFixture<MentorDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
