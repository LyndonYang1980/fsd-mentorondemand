import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailModalComponent } from './training-detail-modal.component';

describe('TrainingDetailModalComponent', () => {
  let component: TrainingDetailModalComponent;
  let fixture: ComponentFixture<TrainingDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
