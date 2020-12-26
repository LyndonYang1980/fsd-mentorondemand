import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUserItemComponent } from './detail-user-item.component';

describe('DetailUserItemComponent', () => {
  let component: DetailUserItemComponent;
  let fixture: ComponentFixture<DetailUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
