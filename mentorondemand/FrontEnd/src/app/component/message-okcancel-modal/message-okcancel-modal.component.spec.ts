import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOkcancelModalComponent } from './message-okcancel-modal.component';

describe('MessageOkcancelModalComponent', () => {
  let component: MessageOkcancelModalComponent;
  let fixture: ComponentFixture<MessageOkcancelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageOkcancelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOkcancelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
