import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSkillItemComponent } from './detail-skill-item.component';

describe('DetailSkillItemComponent', () => {
  let component: DetailSkillItemComponent;
  let fixture: ComponentFixture<DetailSkillItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSkillItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSkillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
