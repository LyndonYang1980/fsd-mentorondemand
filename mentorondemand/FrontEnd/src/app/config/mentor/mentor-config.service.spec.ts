import { TestBed } from '@angular/core/testing';

import { MentorConfigService } from './mentor-config.service';

describe('MentorConfigService', () => {
  let service: MentorConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
