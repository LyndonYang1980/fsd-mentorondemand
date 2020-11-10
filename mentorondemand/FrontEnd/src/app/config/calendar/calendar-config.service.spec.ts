import { TestBed } from '@angular/core/testing';

import { CalendarConfigService } from './calendar-config.service';

describe('CalendarConfigService', () => {
  let service: CalendarConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
