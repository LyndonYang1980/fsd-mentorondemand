import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMentorItemComponent } from './detail-mentor-item.component';

describe('DetailMentorItemComponent', () => {
  let component: DetailMentorItemComponent;
  let fixture: ComponentFixture<DetailMentorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMentorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMentorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
